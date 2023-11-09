import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center p-4">
        <Link href="/" className="font-bold text-2xl">
          CUYANIMELIST
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
