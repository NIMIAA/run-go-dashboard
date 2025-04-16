"use client";

import React from "react";
import Image from "next/image";

interface Props {
  className?: string;
}
export default function AppLogo({ className }: Props) {
  return (
    <Image
      src="/images/Logo.png"
      alt="logo"
      width={150}
      height={10}
      className={className}
    />
  );
}
