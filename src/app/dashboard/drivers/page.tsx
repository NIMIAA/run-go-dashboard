import Heading from "@/app/components/typography/Heading";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Table } from "antd";
import PageHeading from "@/app/components/typography/PageHeading";

export default function Drivers() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeading>Driver Management</PageHeading>
        <button className="btn btn-md rounded-lg ">
          <MagnifyingGlassIcon className="size-6" />
        </button>
      </div>
      <Table dataSource={dataSource} columns={columns} className="mt-8" />
    </>
  );
}
