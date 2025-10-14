import Tab from "./ui/Tab";
import ProjectCard from "./ProjectCard";
const ContentSection = () => {
  return (
    <div className="p-10 w-[60%]">
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
        title="GoViralFast"
        description="GoViralFast is a platform that helps you to create viral content for your business. With GoViralFast, you can create viral content for your business in minutes. It made with nextjs and tailwindcss."
        image="https://via.placeholder.com/150"
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
