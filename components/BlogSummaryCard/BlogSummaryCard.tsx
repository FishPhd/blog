import React, { DetailedHTMLProps, TimeHTMLAttributes } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Card from "../Card/Card";
import clsx from "clsx";

export default function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
  className,
}: {
  slug: string;
  title: string;
  publishedOn: Date;
  abstract: string;
  className?: string;
}) {
  console.log(publishedOn);
  const href = `/${slug}`;
  const humanizedDate = dayjs(publishedOn).locale("en").format("MMMM D, YYYY");

  return (
    <Card className={clsx("max-w-screen-lg mb-8", className)}>
      <Link
        href={href}
        className="block text-3xl font-medium leading-snug no-underline  transition-colors duration-200 mb-1"
      >
        {title}
      </Link>
      <p className="block mb-4 font-medium text-lg text-neutral-500">
        {humanizedDate}
      </p>
      <p className="text-lg mb-0">
        {abstract}{" "}
        <Link
          href={href}
          className="font-semibold underline hover:text-green-400 text-green-700"
        >
          Continue reading{" "}
          <span className="inline-block font-normal transition-transform duration-200">
            →
          </span>
        </Link>
      </p>
    </Card>
  );
}
