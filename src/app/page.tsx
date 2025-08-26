import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import Intro from "./intro";
import {MDXRemote} from 'next-mdx-remote/rsc';
import GeminiButton from "@/components/gemini-button";
import {createUser} from "@/lib/appwrite/appwrite"

async function handleCreateUser() {
    "use server";
    
    try {
        const result = await createUser(Math.random().toString(36).substring(2, 15) + "@gmail.com","+212644107956", "password", "userddd2");
        console.log({result}); // {result: {$id: "user123", email: "mail@gmail.com", ...}}
    } catch (error) {
        console.log({error}); // {error: "AppwriteException: ..."}
    }
}

export default function Home() {
    return (
        <div className="space-y-8">
            <Intro />
            <form action={handleCreateUser}>
                <button type="submit">Create User</button>
            </form>
    </div>
  );
}
