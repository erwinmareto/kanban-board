"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
const Navbar = ({ token }) => {
  const router = useRouter();
  const logout = () => {
    deleteCookie("id");
    deleteCookie("username");
    deleteCookie("token");
    router.push("/");
    router.refresh();
  };
  return (
    <nav className="flex justify-between items-center bg-fuchsia-400 bg-opacity-50 p-5 backdrop-filter backdrop-blur-lg">
      <Link href="/">
        <h1 className="text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </h1>
      </Link>
      {token ? (
        <Link href={"/"} onClick={logout} className="text-xl">
          Log Out
        </Link>
      ) : (
        <Link href={"/auth/login"} className="text-xl">
          Log In
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
