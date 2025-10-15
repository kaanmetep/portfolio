import AboutSection from "@/components/AboutSection";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <div className="m-10 flex flex-col lg:flex-row border border-gray-200 rounded-lg shadow-md">
      <AboutSection />
      <ContentSection />
    </div>
  );
}
