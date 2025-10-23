"use client";

import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { SiGooglegemini } from "react-icons/si";
import { motion } from "framer-motion";
import { PiEye, PiEyes } from "react-icons/pi";
import { CiShare1 } from "react-icons/ci";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  likes: string | number;
  [key: string]: any;
}

interface AnimatedPostsListProps {
  posts: Post[];
}

export function AnimatedPostsList({ posts }: AnimatedPostsListProps) {
  const [query, setQuery] = useState("");

  // Make sure posts is always an array
  const safePosts = Array.isArray(posts) ? posts : [];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return safePosts;
    return safePosts.filter((p) => {
      return (
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.slug && p.slug.toLowerCase().includes(q))
      );
    });
  }, [safePosts, query]);

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#c96442] pb-4">
        Posts
      </h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      {/* --------------------------------------------- */}
      <hr className="my-4" />
      <ul className="">
        {filtered.length === 0 ? (
          <li className="py-6 text-center">No posts found</li>
        ) : (
          filtered.map((p, index) => (
            <li key={p.slug}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/posts/${p.slug}`}>
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#575279] dark:text-[#c3c0b6]">
                      {p.title}
                    </h2>
                    <p className=" font-light text-sm  pr-2">
                      {new Date(p.$createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <p className="pt-1 text-sm">{p.description}</p>
                </Link>
                <div className="flex items-center font-ligh pt-4">
                  {/* <span className="pr-2 pl-2">·</span> */}
                  {/* <button className="pr-1"> <PiEye size={20} /> </button> */}

                  {/* <p className="font-light">{p.views} views</p> */}
                  <CiShare1 className="ml-auto " size={20} />
                </div>
                <hr className="my-4" />
              </motion.div>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
