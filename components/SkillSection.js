import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillSection(){
    return (
        <section id="skills" className="py-28 bg-skills dark:bg-skdrk">
            <div className="container mx-auto px-10 lg:px-8 md:px-8">
                <SectionTitle>Skills</SectionTitle>
                <div className="flex flex-wrap -mx-4 mt-16 md:mt-20">
                    <div className="md:w-4/12 w-full py-4 md:px-6 px-4">
                        <SkillCard 
                            nama="Flutter Dart"
                            level="Lanjutan"
                            image="/flutter.svg"
                            imageClassName="w-12"
                        />
                    </div>
                    <div className="md:w-4/12 w-full py-4 md:px-6 px-4">
                        <SkillCard 
                            nama="Python"
                            level="Menengah"
                            image="/python.svg"
                            imageClassName="w-12 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full py-4 md:px-6 px-4">
                        <SkillCard 
                            nama="React"
                            level="Menengah"
                            image="/react.svg"
                            imageClassName="w-12"
                        />
                    </div>
                    <div className="md:w-4/12 w-full py-4 md:px-6 px-4">
                        <SkillCard 
                            nama="Java"
                            level="Lanjutan"
                            image="/java.svg"
                            imageClassName="h-10"
                        />
                    </div>
                    <div className="md:w-4/12 w-full py-4 md:px-6 px-4">
                        <SkillCard 
                            nama="Node JS"
                            level="Menengah"
                            image="/nodejs-icon.svg"
                            imageClassName="w-10"
                        />
                    </div>
                    <div className="md:w-4/12 w-full py-4 md:px-6 px-4">
                        <SkillCard 
                            nama="Figma"
                            level="Menengah"
                            image="/figma.svg"
                            imageClassName="h-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}