export default function SocMed({ href, children }) {
  return (
    <div className="flex justify-end mr-6 md:mx-10 md:mr-16 my-4">
      <a
        href={href}
        className="hover:bg-indigo-700 rounded-full p-1 hover:text-white transition"
      >
        <i>{children}</i>
      </a>
    </div>
  );
}

// import { useRef, useState } from "react";
// import classnames from "classnames";

// export default function SocMed({ href, children, title }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const targetRef = useRef(null);

//   return (
//     <div className="flex justify-end mr-6 md:mx-10 md:mr-16 my-4 transition duration-500">
//       <a
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         href={href}
//         className="hover:bg-indigo-700 rounded-full p-1 hover:text-white transition duration-500"
//       >
//         <i>{children}</i>
//       </a>

//       <div
//         className={classnames(
//           "text-xs mr-8 items-center p-1 px-1 shadow-xl bg-black bg-opacity-60 text-white absolute rounded transition duration-500",
//           isHovered ? "" : "hidden"
//         )}
//       >
//         {title}
//       </div>
//     </div>
//   );
// }
