"use client";
import React, { ReactNode } from "react";
import { routes } from "../components/routes";
import Link from "next/link";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-12 h-screen w-full">
      <nav className="col-span-2 px-4 pt-12 relative bg-gray-300">
        <ul className="flex flex-col gap-y-6">
          {routes.map((route) => {
            return (
              <li key={route.label} className="">
                <Link
                  className="flex font-[family-name:var(--font-geist-sans)] items-center gap-x-2 prose-lg capitalize font-medium"
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
        <div role="header max-h-12 flex justify-between">
          <h1 className="text-3xl font-semibold">Rungo</h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        {children}
      </main>
    </div>
  );
}
