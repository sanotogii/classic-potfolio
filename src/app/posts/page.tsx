import { AnimatedPostsList } from "@/components/animated-posts-list";

export const dynamic = "force-dynamic";
export default async function PostsPage() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const res = await fetch(`${base}/api/blogs`, { cache: "no-store" });
  // if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  console.log("Fetched posts:", data);
  return (
    <main>
      <AnimatedPostsList posts={data} />
    </main>
  );
}
