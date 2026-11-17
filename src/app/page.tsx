import Intro from "./intro";
import Technologies from "./technologies";
import Projects from "./projects";
import Contacts from "./contacts";

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
