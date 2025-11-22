import ProjectCard from "./ProjectCard";
import { Rocket, Shell, MessageCircle } from "lucide-react";
import Image from "next/image";
import image1 from "@/public/images/goviralfast/goviralfast1.png";
import image2 from "@/public/images/deepintodev/deepintodev1.png";
import image4 from "@/public/images/knowusbetter/knowusbetter-logo.png";
import image5 from "@/public/images/knowusbetter/knowusbetter1.png";
import image6 from "@/public/images/starkecommerce/stark.png";
import image7 from "@/public/images/starkecommerce/starkminilogo.png";
const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <ProjectCard
        logo={<Image src={image4} alt="KnowUsBetter" width={36} height={36} />}
        title="KnowUsBetter"
        description="KnowUsBetter is a mobile game app for couples and friends who want to get to know each other better. Couples can test their connection by playing real-time challenges together - each from their own device. To create certain types of rooms, users need to purchase in-game coins. The app supports 3 languages: English, Turkish, and Spanish."
        image={image5}
        technologies={[
          "React Native",
          "TypeScript",
          "Socket.IO",
          "NodeJS",
          "PostgreSQL",
          "RevenueCat",
          "Expo",
        ]}
        websiteUrl="http://knowusbetter.app/"
        githubUrl="https://github.com/kaanmetep/KnowUsBetterApp"
        appStoreUrl="https://apps.apple.com/us/app/knowusbetter/id6754946265"
      />
      <ProjectCard
        logo={<Shell className="size-4 sm:size-5 md:size-7" />}
        title="DeepIntoDev"
        description="In the world of software development, filled with frameworks and abstractions, I often felt like I was just using technologies without truly understanding them. So, I started digging deeper, and researching. That’s why I created DeepIntoDev: to break down complex programming concepts into easy-to-understand explanations. DeepIntoDev has reached over +100,000 views worldwide, and more than +700 developers around the globe have subscribed to its newsletter."
        image={image2}
        technologies={["NextJS", "Redis", "MongoDB"]}
        websiteUrl="https://deepintodev.com"
        githubUrl="https://github.com/kaanmetep/deepintodev"
      />
      <ProjectCard
        logo={
          <Rocket className=" fill-yellow-200 size-4 sm:size-5 md:size-7" />
        }
        title="GoViralFast"
        description="GoViralFast is a SaaS where users can edit viral videos directly on the platform and download them instantly. Users can purchase a monthly subscription for a set fee. All payment transactions are securely processed through Stripe"
        image={image1}
        technologies={["NextJS", "Supabase", "Stripe", "TailwindCSS"]}
        websiteUrl="https://goviralfast.co"
        githubUrl="https://github.com/kaanmetep/goviralfast"
      />
      <ProjectCard
        logo={
          <Image src={image7} alt="Stark E-commerce" width={36} height={36} />
        }
        title="Stark E-commerce"
        description="This project is an e-commerce website where users can browse products, add items to their cart, and complete purchases. Admin users can also add products with images and view orders on their panel. This is an older portfolio project I built at the time to strengthen my knowledge of the MERN stack and improve my full-stack development skills."
        image={image6}
        technologies={[
          "ReactJS",
          "TailwindCSS",
          "Express",
          "MongoDB",
          "NodeJS",
        ]}
        websiteUrl="https://stark-ecommerce-front.vercel.app/"
        githubUrl="https://github.com/kaanmetep/stark-ecommerce"
      />
    </div>
  );
};

export default Projects;
