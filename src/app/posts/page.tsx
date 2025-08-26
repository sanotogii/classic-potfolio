
import { getPosts } from "@/lib/appwrite/appwrite";
import { AnimatedPostsList } from "@/components/animated-posts-list";

export default async function PostsPage() {
  const posts = await getPosts(); // now fetching from Appwrite

  return (
    <main>
      <AnimatedPostsList posts={posts} />

    </main>
  );
}