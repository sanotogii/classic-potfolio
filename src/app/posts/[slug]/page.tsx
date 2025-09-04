"use client";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import { CodeBlock } from "@/components/code-block";
import "../../markdown.css";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import GeminiButton from "@/components/gemini-button";
import SummaryDisplay from "@/components/summary-displayer";
import { useState, useEffect } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useSummaryStore } from "@/store/useSummaryStore";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Skeleton } from "@/components/ui/skeleton";
interface Post {
  title: string;
  content: string;
  views: number;
}

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [post, setPost] = useState<Post | null>(null);
  const [serializedContent, setSerializedContent] =
    useState<MDXRemoteSerializeResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const { isGenerating, setIsGenerating } = useSummaryStore();

  // Get slug from params
  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  // Fetch post data when slug is available
  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
        const res = await fetch(`${base}/api/blogs/${slug}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch post");
        const postData = await res.json();

        // Serialize the MDX content for client-side rendering
        const serialized = await serialize(postData.content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkFrontmatter],
            rehypePlugins: [rehypeHighlight],
          },
        });

        setPost(postData);
        setSerializedContent(serialized);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!post || !serializedContent) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Post not found</div>
      </div>
    );
  }

  return (
    <>
      <Link
        className="text-gray-500 text-sm mb-4 hover:text-gray-700"
        href={"/posts"}
      >
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

        <GeminiButton content={post.content} />
      </div>
      <hr />

            {isGenerating && (
        <div className="space-y-3 my-4">
          <SparklesText>Generating Summary...</SparklesText>
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      )}
      <SummaryDisplay />

      <hr />
      {/* ----------------------------------------- */}
  <article className="prose prose-lg dark:prose-invert max-w-none markdown-content">
        {serializedContent && (
          <MDXRemote
            {...serializedContent}
            components={{
              pre: ({ children, ...props }) => (
                <CodeBlock {...props}>{children}</CodeBlock>
              ),
            }}
          />
        )}
      </article>
    </>
  );
}
