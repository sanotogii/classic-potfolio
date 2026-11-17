import { CvQrFeedback } from "@/components/cv-qr-feedback";
import Intro from "./intro";
import Technologies from "./technologies";
import Projects from "./projects";
import Certifications from "./certifications";
import Contacts from "./contacts";

export default function Home() {
  return (
    <div className="space-y-8">
      <Intro />
      <Technologies />
      <Projects />
      <Certifications />
      <Contacts />
      <CvQrFeedback />
    </div>
  );
}
