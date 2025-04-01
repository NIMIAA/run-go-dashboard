"use client";

import { FieldType, onFinish, onFinishFailed } from "@/hooks/auth";
import { UserIcon } from "@heroicons/react/24/outline";
import { Button, Form, Input } from "antd";
// import { SizeType } from "antd/es/config-provider/SizeContext";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-100/50 h-screen w-full flex flex-col justify-center items-center">
      <main className=" sm:items-start py-12 w-96 px-8 rounded-lg bg-white border-1 border-gray-300 ">
        <h1 className="text-center text-3xl  font-semibold ">Welcome back!</h1>
        <p className="prose-sm text-center mb-6 text-gray-400">
          Enter your credentials to access your account
        </p>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              size="large"
              className="bg-blue-600 hidden"
              prefix={<UserIcon />}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            className="py-4 w-full"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" className="py-4 w-full" />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
}
