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
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          Published on{" "}
          <time dateTime={publishedOn.toDateString()}>{humanizedDate}</time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
