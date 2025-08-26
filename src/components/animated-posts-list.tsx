"use client"

import Link from "next/link";
import { Eye } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { SiGooglegemini } from "react-icons/si";
import { motion } from "framer-motion"

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  likes: string | number;
  [key: string]: any; // for additional frontmatter fields
}

interface AnimatedPostsListProps {
  posts: Post[];
}

export function AnimatedPostsList({ posts }: AnimatedPostsListProps) {
  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-[#b97084] pb-4">Posts</h1>
      <Input placeholder="Search"/>
      <hr className="my-4" />   
      <ul className="">
        {posts.map((p, index) => (
          <li key={p.slug}>
            <motion.div       
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/posts/${p.slug}`}>
                <h2 className="font-serif font-bold text-3xl text-[#575279] dark:text-amber-50">{p.title}</h2>
                <p className="pt-1">{p.description}</p>
              </Link>
              <div className="flex items-center text-sm text-gray-500 pt-4">
                <p className="pr-4">{p.date}</p>
                <button className="pr-1"> <Eye size={22} /> </button>
                <p>{p.likes}</p>
                <SiGooglegemini className="" size={22}/>
              </div>
              <hr className="my-4" />
            </motion.div>
          </li>
        ))}
      </ul>
    </>
  );
}
