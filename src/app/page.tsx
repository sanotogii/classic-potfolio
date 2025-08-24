import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import Intro from "./intro";
import {MDXRemote} from 'next-mdx-remote/rsc';

export default function Home() {

  return (
    <div className="space-y-8">
      <Intro />

    </div>
  );
}
