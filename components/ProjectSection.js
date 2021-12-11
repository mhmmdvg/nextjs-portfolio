import ProjectItems from "./ProjectItems";
import SectionTitle from "./SectionTitle";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-28 dark:bg-drk">
      <div className="container mx-auto px-10 xl:px-0 md:px-8">
        <SectionTitle>Projects</SectionTitle>
        <div className="flex -mx-4 md:mt-20 mt-16 flex-wrap">
          <div className="md:w-6/12 w-full px-12 md:px-4 pb-1 mb-6">
            <ProjectItems
              nama="First Portfolio"
              description="My First Portfolio"
              image="/projectport.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-12 md:px-4 pb-1 mb-6">
            <ProjectItems
              nama="ICON IBOX"
              description="Android Application"
              image="/project1.png"
              className="border-gray-400 border-2"
            />
          </div>
          {/* <div className="md:w-6/12 w-full px-12 md:px-4 pb-1 mb-6">
            <ProjectItems
              nama="First Portfolio"
              description="My First Portfolio"
              image="/projectport.png"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
