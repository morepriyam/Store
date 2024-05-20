import { CircleUser, MenuIcon, SearchIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";

type Props = {};
const Navbar = async (props: Props) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b-[1px] border-neutral-900 bg-black/40 px-4 py-4 backdrop-blur-lg">
      <div className="flex items-center gap-[30px] mr-[30px]">
        <Link className="flex items-center gap-2" href="#">
          <span className="text-2xl font-bold">store</span>
        </Link>
        <nav className="hidden gap-4 text-sm font-medium md:flex">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            Shop
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-5 flex-grow lg:flex-grow-0">
        <div className="relative flex-grow lg:flex-grow-0">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            className="rounded-md pl-10 py-2 text-sm lg:w-80"
            placeholder="Search"
            type="search"
          />
        </div>
        <div className="flex gap-5">
          <ShoppingCart className="h-6 w-6 hover:p-[1px]" />
          <CircleUser className="h-6 w-6 hidden md:block hover:p-[1px]" />
        </div>
        <MenuIcon className="md:hidden hover:p-[1px]" />
      </div>
    </header>
  );
};

export default Navbar;
