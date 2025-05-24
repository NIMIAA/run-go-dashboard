"use client";
import React, { ReactNode } from "react";
import { routes } from "../components/routes";
import Link from "next/link";
import { ArrowLeftStartOnRectangleIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  const pathname = usePathname();

  return (
    <div className="md:grid md:grid-cols-12 h-screen w-full">
      <nav className="hidden md:block col-span-3 pt-12 relative bg-foreground text-white border-r border-r-gray-300">
        <ul className="flex flex-col gap-y-6 px-4">
          {routes.map((route) => {
            return (
              <li key={route.label} className="">
                <Link
                  className={
                    route.path == pathname
                      ? "flex font-[family-name:var(--font-geist-sans)] items-center gap-x-2 prose-sm capitalize font-medium text-center p-4 transition delay-25 ease-in-out duration-200 bg-white/90 rounded-lg text-foreground"
                      : "flex font-[family-name:var(--font-geist-sans)] items-center gap-x-2 prose-sm capitalize font-medium text-center p-4 transition delay-25 ease-in-out duration-200 hover:bg-white/90 rounded-lg hover:text-foreground"
                  }
                  href={route.path}
                >
                  {" "}
                  {route.defaultIcon}
                  {route.label}
                </Link>
              </li>
            );
          })}

          <button className="position absolute bottom-10 left-4 right-4   flex font-[family-name:var(--font-geist-sans)] items-center gap-x-2 prose-sm capitalize font-medium text-center py-2 px-2 transition delay-25 ease-in-out duration-200 hover:bg-white/90 rounded-lg hover:text-foreground">
            <ArrowLeftStartOnRectangleIcon className="size-6" /> Logout
          </button>
        </ul>
      </nav>
      <main className="col-span-9 h-screen overflow-x-hidden overflow-y-scroll">
        <section
          role="header"
          className="flex justify-between border-b-gray-200 border-b-[2px] max-h-24 bg-white/10 py-4 px-6 md:px-16 "
        >
            <Bars3BottomLeftIcon className="size-6"/>

          {/* <label className="input rounded-lg w-3/5 hover:border-foreground hover:outline-transparent focus:outline-none "> */}
            {/* <input type="search" required placeholder="Search" className="" /> */}
          {/* </label> */}
          <div className="flex justify-between items-center gap-x-5">
            <div className="cursor-pointer">
              <BellIcon className="size-6" />
            </div>
            <div className="cursor-pointer flex items-center gap-x-2">
              <div className="avatar ">
                <div className="w-6 md:w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="hidden md:block">
                <h6 className="-mb-2 font-medium">Jane Doe</h6>
                <small>jane@rungo.com</small>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-6 md:py-12 md:px-16 h-[90vh] overflow-y-scroll bg-gray-50">
          {children}
        </section>
      </main>
    </div>
  );
}
