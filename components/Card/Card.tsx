import React from "react";
import clsx from "clsx";

import styles from "./Card.module.css";
import { cn } from "@/utils/tailwind";

function Card({
  children,
  className,
  ...delegated
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        "rounded-lg bg-white p-10 shadow-md border-neutral-900",
        className
      )}
      {...delegated}
    >
      {children}
    </div>
  );
}

export default Card;
