import React, { cache, useId } from "react";
import BlogSummaryCard from "@/components/BlogSummaryCard/BlogSummaryCard";
import { getBlogPostList } from "@/utils/file-helpers";
import { Metadata } from "next";
import { BLOG_TITLE } from "@/constants";
import DivisionGroupsDemo from "@/components/DivisionGroupsDemo/DivisionGroupsDemo";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
  robots: "index, follow",
};

async function Home() {
  const id = useId();
  const blogPosts = await getBlogPostList();

  // You might need to adjust the padding and max-width classes according to your design.
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl px-10 py-16 mx-auto grad min-h-[60vh]">
      <h1 className="mt-4 text-4xl font-bold mb-16">Latest Content:</h1>

      {blogPosts.map((post) => (
        <BlogSummaryCard
          key={`blog-summary-${id}`}
          slug={post.slug}
          title={post.title}
          abstract={post.abstract}
          publishedOn={post.publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
