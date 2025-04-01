import { FormProps } from "antd";

export type FieldType = {
  email?: string;
  password?: string;
};

export const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

export const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
  errorInfo
) => {
  console.log("Failed:", errorInfo);
};
