import WorkExperienceItem from "./WorkExperienceItem";
const Experience = () => {
  return (
    <div>
      <div className="flex flex-col gap-12">
        <WorkExperienceItem
          company="Radity"
          title="Frontend Developer Intern"
          dates="07/2025 – 08/2025"
          description="Worked as part of an international team of over 100 people, contributing to software development projects. Focused on building solutions for insurance companies using NextJS, NodeJS, and Java."
        />
        <WorkExperienceItem
          company="eCatalog"
          title="Software Engineer Intern"
          dates="04/2025 – 06/2025"
          description="eCatalog is a B2B SaaS with 50+ clients and ₺500M in sales. During my internship, I implemented customer-
          requested features and significantly improved the UX. I have primarily worked with NextJS and React."
        />
        <WorkExperienceItem
          company="PRESSAN "
          title="Information Technology Staff"
          dates="07/2021 – 09/2021"
          description="I worked as an IT Staff before starting my B.S. Degree. I developed an internal tool to simplify the tracking of cartridges, printers, and other office equipment."
        />
      </div>
    </div>
  );
};

export default Experience;
