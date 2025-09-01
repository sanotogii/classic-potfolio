"use client"

import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { SiGooglegemini } from "react-icons/si";
import { motion } from "framer-motion"
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
  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-[#b97084] pb-4">Posts</h1>
      <Input placeholder="Search"/>
      {/* --------------------------------------------- */}
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
              <div className="flex items-center justify-between">
                <h2 className="font-serif font-bold text-3xl text-[#575279] dark:text-amber-50">{p.title}</h2>
                <p className=" font-light text-gray-500 pr-2">
                {new Date(p.$createdAt).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              </div>

                <p className="pt-1">{p.description}</p>
              </Link>
              <div className="flex items-center font-light text-gray-500 pt-4">

              {/* <span className="pr-2 pl-2">·</span> */}
                {/* <button className="pr-1"> <PiEye size={20} /> </button> */}

                {/* <p className="font-light">{p.views} views</p> */}
                <CiShare1 className="ml-auto " size={20} />
              </div>
              <hr className="my-4" />
            </motion.div>
          </li>
        ))}
      </ul>
    </>
  );
}
