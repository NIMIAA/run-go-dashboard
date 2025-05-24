import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}
export default function Heading({ className, children }: Props) {
  return (
    <h1 className={"font-[700] md:text-3xl leading-1.5 mb-4" + className}>{children}</h1>
  );
}
