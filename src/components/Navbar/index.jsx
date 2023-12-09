import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-color-dark z-[2] px-4">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center p-4">
        <Link href="/" className="font-bold text-2xl text-color-primary">
          <span className="text-color-red">RADM </span>
          animelist
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
