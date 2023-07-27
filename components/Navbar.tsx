import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className={cn("flex items-center justify-center pt-2")}>
      {/* logo  */}

      {/* navigation  */}
      <nav className=" flex justify-center border-gray-200  rounded-full shadow-lg overflow-hidden">
        <Link
          href=""
          className="hover:text-lime-600 hover:bg-lime-300/[0.2] py-2 px-5 hover:outline-2 outline-black  "
        >
          Home
        </Link>
        <Link
          href="#"
          className="hover:text-lime-600 hover:bg-lime-300/[0.2] py-2 px-5 hover:outline-2 outline-black  "
        >
          Blogs
        </Link>
        <Link
          href="#"
          className="hover:text-lime-600 hover:bg-lime-300/[0.2] py-2 px-5 hover:outline-2 outline-black  "
        >
          Projects
        </Link>
        <Link
          href="#"
          className="hover:text-lime-600 hover:bg-lime-300/[0.2] py-2 px-5 hover:outline-2 outline-black  "
        >
          About me
        </Link>
      </nav>
      {/* social media links  */}

      {/* theme switch  */}
    </div>
  );
};

export default Navbar;
