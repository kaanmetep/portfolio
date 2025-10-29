import AboutSection from "@/components/AboutSection";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <div className="lg:m-8 m-3 flex flex-col lg:flex-row border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white lg:h-[93vh] dark:bg-black dark:text-white">
      <AboutSection />
      <ContentSection />
    </div>
  );
}
