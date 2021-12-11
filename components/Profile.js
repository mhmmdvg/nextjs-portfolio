import ArtV from "../public/vikriartnostar.svg";
import SectionTitle from "./SectionTitle";

export default function Profile() {
  return (
    <section id="profile" className="bg-white dark:bg-drk py-28">
      <div className="dark:text-white container mx-auto 2xl:px-0">
        <SectionTitle>Profile</SectionTitle>
        <div className="flex xl:w-9/12 mx-auto flex-wrap mt-10 2xl:items-center xl:items-center md:items-start">
          <div className="md:w-5/12 w-full px-10">
            <ArtV className="w-full" />
          </div>
          <div className="md:w-7/12 w-full px-10 dark:text-gray-400">
            <p className="leading-loose text-lg">
              Hello! My name is Muhammad Vikri. I&apos;m a student in Brawijaya
              University. I like to design and learn about a programming. I
              would like to learn new things about technologies.
            </p>
            {/* <p className="leading-relaxed mt-6 text-lg">
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
