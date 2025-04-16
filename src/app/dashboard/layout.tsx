"use client";
import React, { ReactNode } from "react";
import { routes } from "../components/routes";
import Link from "next/link";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import AppLogo from "../components/app/AppLogo";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-12 h-screen w-full">
      <nav className="col-span-2 pt-12 relative bg-foreground/95 text-white ">
        <ul className="flex flex-col gap-y-4">
          {routes.map((route) => {
            return (
              <li key={route.label} className="">
                <Link
                  className="flex font-[family-name:var(--font-geist-sans)] items-center gap-x-2 prose-lg capitalize font-medium hover:border-l-white hover:border-l-[4px] py-3 px-2 transition delay-25 ease-in-out duration-200"
                  href={route.path}
                >
                  {" "}
                  {route.defaultIcon}
                  {route.label}
                </Link>
              </li>
            );
          })}

          <button className="flex font-[family-name:var(--font-geist-sans)] items-center gap-x-2 prose-lg capitalize font-medium position absolute bottom-10 w-full left-0 right-0 px-4">
            <ArrowLeftStartOnRectangleIcon className="size-6" /> Logout
          </button>
        </ul>
      </nav>
      <main className="col-span-10 bg-white/50 h-screen overflow-x-hidden overflow-y-scroll">
        <section
          role="header"
          className="flex justify-between border-b-gray-200 border-b-[2px] max-h-24 bg-gray-50/90 py-4 px-16"
        >
          <AppLogo className="h-[50px]" />
          <label className="input">
            <input
              type="search"
              required
              placeholder="Search"
              className="rounded-lg"
            />
          </label>
          <div className="flex items-center gap-x-6">
            <div className="cursor-pointer">
              <BellIcon className="size-6" />
            </div>
            <div className="cursor-pointer flex items-center gap-x-2">
              <div className="avatar ">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                <div></div>
              </div>
              <div>
                <h6 className="-mb-2 font-medium">Jane Doe</h6>
                <small>jane@rungo.com</small>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-16 h-[90vh] overflow-y-scroll bg-gray-50">
          {children}
        </section>
      </main>
    </div>
  );
}
