import { prisma } from "@/utils/db";
import { getUserByClerkID } from "@/utils/auth";
import NewEntryCard from "@/components/NewEntryCard";
import EntryCard from "@/components/EntryCard";
import Link from "next/link";
import Question from "@/components/Question";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getEntries = async () => {
  const user = await getUserByClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return entries;
};

const formatDate = (entry) => {
  const date = new Date(entry).toDateString();
  return date;
};

const JournalPage = async () => {
  const entries = await getEntries();
  console.log("entries: ", entries);
  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="my-8">
        <Question />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <Card
              key={entry.id}
              className="transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
            >
              <CardHeader>
                <CardTitle>{formatDate(entry.createdAt)}</CardTitle>
                <CardDescription>
                  Last update: {formatDate(entry.updatedAt)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-500">Click to show entry.</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
