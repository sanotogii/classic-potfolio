import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { CodeBlock } from "@/components/code-block";
import "../../markdown.css";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import GeminiButton from "@/components/gemini-button";

export const dynamic = "force-dynamic";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const res = await fetch(`${base}/api/blogs/${slug}`, { cache: "no-store" });
  if (!res.ok) throw new Error('Failed to fetch post');
  const post = await res.json();



  return (
    <>
      <Link className="text-gray-500 text-sm mb-4" href={"/posts"}>
        ← Back to posts
      </Link>

      {/* <hr className="mt-6" /> */}
      <h1 className="font-bold text-5xl font-serif mt-6 mb-6">{post.title}</h1>

      <hr />
      <div className="flex items-center justify-between text-sm text-gray-500 pt-2 pb-2">
        <div className="flex items-center space-x-2">
          <FaEye size={20} />
          <p className="font-light">{post.views} views 4 min read</p>
        </div>

        <GeminiButton />
      </div>
      <hr />

      {/* ----------------------------------------- */}
      <article className="prose prose-lg dark:prose-invert max-w-none markdown-content atom-one-dark">
        {
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkFrontmatter],
                rehypePlugins: [rehypeHighlight],
              },
            }}
            components={{
              pre: ({ children, ...props }) => (
                <CodeBlock {...props}>{children}</CodeBlock>
              ),
            }}
          />
}
      </article>
    </>
  );
}
