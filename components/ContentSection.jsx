import Tab from "./ui/Tab";
import ProjectCard from "./ProjectCard";
import { Rocket, Shell } from "lucide-react";
import image1 from "@/public/images/goviralfast/goviralfast1.png";
import image2 from "@/public/images/deepintodev/deepintodev1.png";

const ContentSection = () => {
  return (
    <div className="p-10 w-[60%] max-h-[90vh] overflow-y-auto">
      <ul className="flex gap-6">
        <li>
          <Tab selected>Projects</Tab>
        </li>
        <li>
          <Tab>Experience</Tab>
        </li>
        <li>
          <Tab>Contact</Tab>
        </li>
      </ul>
      <ProjectCard
        logo={<Shell className="size-4 sm:size-5 md:size-7" />}
        title="DeepIntoDev"
        description="In the world of software development, filled with frameworks, libraries, and abstractions, I often felt like I was just using technologies without truly understanding them. So, I started digging deeper, researching, and questioning. That’s why I created DeepIntoDev: to break down complex programming concepts into simpler, easy-to-understand explanations."
        image={image2}
        technologies={[
          "React",
          "TypeScript",
          "NextJS",
          "TailwindCSS",
          "Supabase",
        ]}
      />
      <ProjectCard
        logo={
          <Rocket className=" fill-yellow-200 size-4 sm:size-5 md:size-7" />
        }
        title="GoViralFast"
        description="GoViralFast is a platform that helps you to create viral content for your business. With GoViralFast, you can create viral content for your business in minutes. It made with nextjs and tailwindcss."
        image={image1}
        technologies={[
          "NextJS",
          "TailwindCSS",
          "React",
          "TypeScript",
          "Stripe",
        ]}
      />
      <ProjectCard
        logo={
          <Rocket className=" fill-yellow-200 size-4 sm:size-5 md:size-7" />
        }
        title="QuizVersus"
        description="QuizVersus is a platform that helps you to create quizzes for your business. With QuizVersus, you can create quizzes for your business in minutes. It made with nextjs and tailwindcss."
        image={image1}
        technologies={[
          "NextJS",
          "TailwindCSS",
          "React",
          "TypeScript",
          "Stripe",
        ]}
      />
    </div>
  );
};

export default ContentSection;
