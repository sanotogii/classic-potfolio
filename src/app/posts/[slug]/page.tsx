// src/app/posts/[slug]/page.tsx (server component)
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { CodeBlock } from "@/components/code-block";
import { getPostBySlug } from "@/lib/appwrite/appwrite";
import "../../markdown.css";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import GeminiButton from "@/components/gemini-button";
import axios from "axios";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  // const post = await getPostBySlug(slug);
  const res = await axios.get(`http://localhost:3000/api/blogs/${slug}`);
  const post = res.data;
  // Fix MDX parsing issues with angle brackets
  // const sanitizedContent =
  //   post.content
  //     ?.replace(/< /g, "&lt; ")
  //     ?.replace(/ >/g, " &gt;")
  //     ?.replace(/</g, "&lt;")
  //     ?.replace(/>/g, "&gt;") || "";


  return (
    <>
      <Link className="text-gray-500 text-sm mb-4" href={"/posts"}>
        ← Back to posts
      </Link>
      <hr className="mt-8" />
      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 pb-2">
        <div className="flex items-center space-x-2">
          <FaEye size={20} />
          <p className="font-light">10 views - 4 min read</p>
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
