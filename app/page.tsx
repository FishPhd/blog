import React from "react";
import BlogSummaryCard from "@/components/BlogSummaryCard/BlogSummaryCard";

function Home() {
  // You might need to adjust the padding and max-width classes according to your design.
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg py-16 mx-auto grad min-h-[60vh]">
      <h1 className="mt-4 text-4xl font-bold mb-16">Latest Content:</h1>

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
