import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Card from "../Card/Card";

export default function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
}) {
  const href = `/${slug}`;
  const humanizedDate = dayjs(publishedOn).locale("en").format("MMMM D, YYYY");

  return (
    <Card className="w-full max-w-[750px] mb-8">
      <Link
        href={href}
        className="block text-xl leading-snug no-underline transition-colors duration-200 mb-1"
      >
        {title}
      </Link>
      <time dateTime={publishedOn} className="block mb-4 font-medium text-lg">
        {humanizedDate}
      </time>
      <p className="text-lg mb-0">
        {abstract}{" "}
        <Link href={href} className="font-semibold">
          Continue reading{" "}
          <span className="inline-block font-normal transition-transform duration-200">
            →
          </span>
        </Link>
      </p>
    </Card>
  );
}
