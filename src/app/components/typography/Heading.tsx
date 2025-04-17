import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}
export default function Heading({ className, children }: Props) {
  return (
    <h1 className={"font-[700] text-3xl leading-1.5" + className}>{children}</h1>
  );
}
