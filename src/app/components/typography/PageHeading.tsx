import React, { ReactNode } from "react";
import Heading from "./Heading";

interface Props {
  className?: string;
  children: ReactNode;
}
export default function PageHeading({ className, children }: Props) {
  return <Heading className={"font-extrabold" + className}> {children}</Heading>;
}
