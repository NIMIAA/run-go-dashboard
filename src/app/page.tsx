"use client";

import AppLogo from "./components/app/AppLogo";

// import { SizeType } from "antd/es/config-provider/SizeContext";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-100/50 h-screen w-full md:flex md:flex-col justify-center items-center">
      <div className="mb-6 grayscale-100">
        <AppLogo />
      </div>
      <main className=" sm:items-start py-12 w-96 px-8 rounded-lg md:bg-white md:border-1 md:border-gray-300 ">
        <h1 className="text-center text-3xl  font-semibold ">Welcome back!</h1>
        <p className="prose-lg text-center mb-6 text-gray-400">
          Enter your credentials to access your account
        </p>
        <form action="" className="flex flex-col gap-y-6">
          <div>
            <label className="w-full text-left text-sm font-semibold mb-2 hover:outline-none prose-lg">
              Email
            </label>
            <input
              type="text"
              placeholder="email"
              className="p-4 rounded w-full border-2 border-gray-300 focus:outline-foreground"
            />
          </div>

          <div>
            <label className="w-full text-left text-sm font-semibold mb-2 prose-lg ">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              className="p-4 rounded w-full border-2 border-gray-300 focus:outline-foreground"
            />
          </div>

          <button className="bg-foreground hover:bg-indigo-900 text-background text-md my-2 p-4 rounded w-full cursor-pointer transition-transform duration-200 ease-in hover:scale-95 text-white font-medium">
            Sign Up
          </button>
        </form>
        <a href="#" className="text-foreground font-medium prose-sm">
          Forgotten password?
        </a>
      </main>
    </div>
  );
}
