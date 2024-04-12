import React from "react";
import clsx from "clsx";

import styles from "./BlogHero.module.css";
import dayjs from "dayjs";

export function BlogHero({
  title,
  publishedOn,
  className,
  ...delegated
}: {
  title: string;
  publishedOn: Date;
  className?: string;
  [key: string]: any;
}) {
  const humanizedDate = dayjs(publishedOn).locale("en").format("MMMM D, YYYY");

  return (
    <header
      className={clsx(
        "relative flex flex-col justify-end items-center w-full mx-auto max-w-[65rem] pt-[calc(48px + 8vw)] pb-16",
        className
      )}
      {...delegated}
    >
      <div className={"relative w-full"}>
        <h1 className="mb-2 text-4xl font-bold">{title}</h1>
        <p className="text-lg mb-0 text-green-800">
          Published on{" "}
          <time className="font-medium" dateTime={publishedOn.toDateString()}>
            {humanizedDate}
          </time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
