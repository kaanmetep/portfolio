import AboutSection from "@/components/AboutSection";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <div className="m-8 flex flex-col lg:flex-row border border-gray-200 rounded-lg shadow-lg bg-white lg:h-[90vh] ">
      <AboutSection />
      <ContentSection />
    </div>
  );
}
