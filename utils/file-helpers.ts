import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

export interface BlogPost {
  slug: string;
  publishedOn: Date;
  title: any;
  abstract: any;
  content?: string;
}

export interface BlogPost {
  slug: string;
  publishedOn: Date;
  title: any;
  abstract: any;
  content?: string;
}
export async function getBlogPostList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory("/content");

  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      publishedOn: new Date(frontmatter.publishedOn),
      title: frontmatter.title,
      abstract: frontmatter.abstract,
      ...frontmatter,
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export async function loadBlogPost(slug: string) {
  const rawContent = await readFile(`/content/${slug}.mdx`);
  console.log("getting content!");
  return await compileMDX<{
    title: string;
    slug: string;
    publishedOn: string;
    abstract: string;
  }>({
    source: rawContent,
    options: { parseFrontmatter: true },
  });
}

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
