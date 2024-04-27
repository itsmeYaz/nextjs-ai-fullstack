"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewEntryCard = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  };

  return (
    // <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
    //   <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
    //     <span className="text-3xl">New Entry</span>
    //   </div>
    // </div>
    <Card
      onClick={handleOnClick}
      className="cursor-pointer transition-all duration-200 ease-in-out hover:bg-violet-600 hover:text-white"
    >
      <CardHeader>
        <CardTitle>Add New Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black">Click to add new journal entry.</p>
      </CardContent>
    </Card>
  );
};

export default NewEntryCard;
