"use client";
import React from "react";
import { useSummaryStore } from "@/store/useSummaryStore";
import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { CodeBlock } from "@/components/code-block";
import "../app/markdown.css";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
const SummaryDisplay = () => {
  const { generatedSummary, clearSummary } = useSummaryStore();
  const [serializedContent, setSerializedContent] =
    useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    // Cleanup function runs when component unmounts
    return () => {
      clearSummary();
    };
  }, [clearSummary]);

  // Serialize the markdown content when generatedSummary changes
  useEffect(() => {
    if (!generatedSummary) return;

    const serializeContent = async () => {
      try {
        const serialized = await serialize(generatedSummary, {
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkFrontmatter],
            rehypePlugins: [rehypeHighlight],
          },
        });
        setSerializedContent(serialized);
      } catch (error) {
        console.error("Error serializing content:", error);
      }
    };

    serializeContent();
  }, [generatedSummary]);

  if (!generatedSummary) return null;

  return (
    <div className="summary-section my-6 rounded-2xl">
      <div className="relative w-full overflow-hidden rounded-2xl">
        {/* <ShineBorder borderWidth={2} duration={35} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}  /> */}
        <div className="bg-gray-50 dark:bg-[#262624]  dark:border-gray-700 p-6">
          <h3 className="font-serif font-bold text-2xl mb-4">AI Summary</h3>
          <div className="text-sm prose prose-sm dark:prose-invert max-w-none markdown-content">
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
          </div>
        </div>
        <BorderBeam
          duration={6}
          size={400}
          borderWidth={2}
          className="from-transparent via-[#c96442] to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-[#ded8c4] to-transparent"
        />
      </div>
    </div>
  );
};

export default SummaryDisplay;
