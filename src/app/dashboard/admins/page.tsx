import Heading from "@/app/components/typography/Heading";
import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Drivers() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading>Admin Management</Heading>
        <button className="btn btn-md rounded-lg bg-foreground text-white">
          <PlusIcon className="size-6" /> Admin
        </button>
      </div>
    </>
  );
}
