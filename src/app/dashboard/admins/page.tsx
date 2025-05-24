import PageHeading from "@/app/components/typography/PageHeading";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Table } from "antd";

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
        <PageHeading>Admin Management</PageHeading>
        <button className="btn btn-md rounded-lg ">
          <MagnifyingGlassIcon className="size-6" />
        </button>
      </div>
      <Table dataSource={dataSource} columns={columns} className="mt-8" />
    </>
  );
}
