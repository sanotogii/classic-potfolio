import Link from "next/link";
import { getPosts } from "@/lib/server-utils"; // or inline the helper

export default function PostsPage() {
  const posts = getPosts(); // server component: sync FS ok

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/posts/${p.slug}`}>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}