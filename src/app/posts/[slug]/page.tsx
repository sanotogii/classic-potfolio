// src/app/posts/[slug]/page.tsx (server component)
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import { CodeBlock } from '@/components/code-block'
import { getPostBySlug } from "@/lib/server-utils";
import '../../markdown.css'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { data, content } = getPostBySlug(params.slug);

  return (
      <article className="prose prose-lg dark:prose-invert max-w-none markdown-content atom-one-dark">
        <MDXRemote
          source={content}
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
      </article>
  );
}