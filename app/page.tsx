import React from "react";
import BlogSummaryCard from "@/components/BlogSummaryCard/BlogSummaryCard";

function Home() {
  // You might need to adjust the padding and max-width classes according to your design.
  return (
    <div className="flex flex-col items-center w-full max-w-[var(--content-width)] py-16 mx-auto">
      <h1 className="mt-4 mb-6">Latest Content:</h1>

      {/* TODO: Iterate over the data read from the file system! */}
      <BlogSummaryCard
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      />
    </div>
  );
}

export default Home;
