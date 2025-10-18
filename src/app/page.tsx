import Intro from "./intro";
import Technologies from "./technologies";
import Projects from "./projects";
import Contacts from "./contacts";
import { createUser } from "@/lib/appwrite/appwrite";


async function handleCreateUser() {
  "use server";

  try {
    const result = await createUser(
      Math.random().toString(36).substring(2, 15) + "@gmail.com",
      "+212644107956",
      "password",
      "userddd2",
    );
    console.log({ result }); // {result: {$id: "user123", email: "mail@gmail.com", ...}}
  } catch (error) {
    console.log({ error }); // {error: "AppwriteException: ..."}
  }
}

export default function Home() {
  return (
    <div className="space-y-8">
      <Intro />
      <Technologies />
      <Projects />
      <Contacts />
    </div>
  );
}
