import { AnimatedPostsList } from "@/components/animated-posts-list";
import axios from "axios";
export default async function PostsPage() {
  // const posts = await getPosts(); // now fetching from Appwrite
  const posts = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`)
  console.log('Fetched posts:', posts.data);
  return (
    <main>
      <AnimatedPostsList posts={posts.data} />

    </main>
  );
}