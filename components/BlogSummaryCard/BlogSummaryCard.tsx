import React, { DetailedHTMLProps, TimeHTMLAttributes } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Card from "../Card/Card";

export default function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
}: {
  slug: string;
  title: string;
  publishedOn: Date;
  abstract: string;
}) {
  const href = `/${slug}`;
  const humanizedDate = dayjs(publishedOn).locale("en").format("MMMM D, YYYY");

  return (
    <Card className="max-w-[750px] mb-8 cursor-pointer group">
      <Link
        href={href}
        className="block text-3xl font-medium leading-snug no-underline  transition-colors duration-200 mb-1"
      >
        {title}
      </Link>
      <time
        dateTime={publishedOn.toDateString()}
        className="block mb-4 font-medium text-lg text-neutral-500"
      >
        {humanizedDate}
      </time>
      <p className="text-lg mb-0">
        {abstract}{" "}
        <Link
          href={href}
          className="font-semibold underline group-hover:text-green-400 text-green-700"
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
