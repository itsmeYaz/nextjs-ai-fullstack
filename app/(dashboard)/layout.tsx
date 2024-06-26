import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/history", label: "History" },
];

const DashboardLayout = ({ children }) => {
  return (
    <main className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
        <ul>
          {links.map((link) => (
            <li
              key={link.href}
              className="px-2 py-3 text-xl cursor-pointer border-b border-t border-black/10 transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
