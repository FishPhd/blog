import { Suspense, cache } from "react";

import BlogHero from "@/components/BlogHero/BlogHero";
import { loadBlogPost } from "@/utils/file-helpers";
import { Metadata, ResolvingMetadata } from "next";

const getBlogPost = cache(loadBlogPost);

export async function generateMetadata(
  { params: { postSlug } }: BlogPostProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {
    frontmatter: { abstract, title },
  } = await getBlogPost(postSlug);

  return {
    robots: "noindex",
    title: `${title} • Bits & Bytes`,
    description: abstract,
  };
}

interface BlogPostProps {
  params: { postSlug: string };
}

async function BlogPost({ params }: BlogPostProps) {
  const {
    content,
    frontmatter: { abstract, publishedOn, slug, title },
  } = await getBlogPost(params.postSlug);

  if (!content) {
    return <div>Post not found</div>;
  }

  return (
    <article className="z-10 py-20 px-10">
      <BlogHero
        className="!mt-10"
        title={title}
        publishedOn={new Date(publishedOn)}
      />

      <div
        className={
          "relative grid max-w-[80rem] mx-auto p-16 bg-white dark:bg-gray-600 dark:text-white shadow-md rounded-lg border-green-200 border-1 px-36 py-24"
        }
      >
        <Suspense fallback={<>Loading...</>}>{content}</Suspense>
      </div>
    </article>
  );
}

export default BlogPost;
