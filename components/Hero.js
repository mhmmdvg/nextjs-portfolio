import Artv from "../public/vikriartnostar.svg";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import SocMed from "./SocialMedia";
import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-drk pb-52 transition duration-500">
      <div className="container mx-auto md:px-6">
        <Navbar />
      </div>
      <div className="container mx-auto mt-16 hidden lg:mt-24 md:block">
        <div className="flex items-center flex-wrap">
          <div className="w-3/12 mt-8 dark:text-white">
            <SocMed href="http://instagram.com/mhmmdvg" title="@mhmmdvg">
              <AiOutlineInstagram className="h-5 w-5" />
            </SocMed>
            <SocMed href="https://id.pinterest.com/muhammadvikrii99/">
              <FaPinterestP className="h-5 w-5" />
            </SocMed>
            <SocMed href="http://github.com/mhmmdvg">
              <AiOutlineGithub className="h-5 w-5" />
            </SocMed>
          </div>
          <div className="w-3/12 py-20 text-left">
            <h1 className="font-bold dark:text-white md:text-4xl sm:text-2xl lg:w-10/12 font-serif pb-1">
              Hi, I&apos;m Vikri
            </h1>
            <h4 className="dark:text-white md:text-xl sm:text-base font-sans lg:w-10/12 leading-loose pb-1">
              UI/UX and Front End
            </h4>
            <p className="dark:text-white md:text-base sm:text-sm pb-6">
              I&apos;m UI/UX Designer and Front End Developer
            </p>
            <Button mailto="mailto:muhammadvikrii99@gmail.com">
              Contact Me <FiSend className="ml-2 my-1" />
            </Button>
          </div>
          <div className="w-6/12">
            <Artv className="h-96 w-96" />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="dark:bg-drk container mx-auto mt-10 md:hidden">
        <div className="flex items-center flex-wrap">
          <div className="w-3/12 mt-20 dark:text-white">
            <SocMed href="http://instagram.com/mhmmdvg">
              <AiOutlineInstagram className="h-5 w-5" />
            </SocMed>
            <SocMed href="https://id.pinterest.com/muhammadvikrii99/">
              <FaPinterestP className="h-5 w-5" />
            </SocMed>
            <SocMed href="http://github.com/mhmmdvg">
              <AiOutlineGithub className="h-5 w-5" />
            </SocMed>
          </div>
          <div className="w-3/12">
            <Artv className="h-full w-60" />
          </div>
        </div>
        <div className="flex items-center flex-wrap">
          <div className="w-full py-2 px-10 text-center">
            <h1 className="dark:text-white font-bold text-2xl font-serif pb-1">
              Hi, I&apos;m Vikri
            </h1>
            <h4 className="dark:text-white font-sans text-lg leading-loose pb-1">
              UI/UX and Front End
            </h4>
            <p className="dark:text-white text-base pb-6">
              I&apos;m UI/UX Designer and Front End Developer
            </p>
            <Button mailto="mailto:muhammadvikrii99@gmail.com">
              Contact Me <FiSend className="ml-2 my-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Hero() {
//     return (
//       <div className="bg-white mb-52">
//         <div className="container mx-auto">
//           <Navbar />
//         </div>
//         <div className="container mx-auto mt-16">
//           <div className="flex items-center">
//             <div className="w-3/12 mt-20">
//               <SocMed>
//                 <AiOutlineInstagram className="h-5 w-5" />
//               </SocMed>
//               <SocMed>
//                 <FaPinterestP className="h-5 w-5" />
//               </SocMed>
//               <SocMed>
//                 <AiOutlineGithub className="h-5 w-5" />
//               </SocMed>
//             </div>
//             <div className="w-3/12 py-20 text-left">
//               <h1 className="font-bold text-4xl font-serif">Hi, I'm Vikri</h1>
//               <h4 className="text-xl font-sans leading-loose">
//                 UI/UX and Front End
//               </h4>
//               <p className="text-base">
//                 I'm UI/UX Designer and Front End Developer
//               </p>
//             </div>
//             <div className="w-3/12">
//               <Artv className="h-25 w-25" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
