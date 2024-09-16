import React, { useState } from "react";

export default function SectionBanner({ bannerTitle, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="section-banner overflow-hidden">
      <div
        onClick={toggleExpand}
        className="flex h-[9rem] items-center justify-between border-t-[1px] border-mainAccent px-3 sm:px-6 lg:pt-7 xl:pt-12"
      >
        <h2
          className={`text-sectionText w-full font-heading font-bold uppercase tracking-tighter transition-none sm:translate-y-0 ${
            isExpanded ? "" : "overflow-hidden"
          }`}
        >
          {bannerTitle[0].id} {bannerTitle[0].title}
        </h2>

        <button
          className="relative flex size-8 items-center justify-center rounded-full border border-black sm:size-10 xl:size-14"
          aria-expanded={isExpanded}
        >
          {/* Plus-minus icon */}
          <span className="absolute block h-[1.3px] w-3 bg-black sm:w-4"></span>
          <span
            className={`absolute block h-[1px] w-3 bg-black transition-transform duration-300 ease-in-out sm:w-4 ${
              isExpanded ? "rotate-0" : "rotate-90"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`banner-content transition-all duration-700 ease-in-out ${
          isExpanded ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}

//   return (
//     <div className="section-banner">
//       <div
//         onClick={toggleExpand}
//         className="flex items-center justify-between border-t-[1px] border-mainAccent px-3 sm:px-6 lg:pt-7 xl:pt-12 h-[9rem]"
//       >
//         <h2
//           className={`font-heading text-[14vw] font-bold uppercase tracking-tighter transition-none sm:translate-y-0 ${
//             isExpanded ? "" : "overflow-hidden"
//           }`}
//         >
//           {bannerTitle[0].id} {bannerTitle[0].title}
//         </h2>

//         <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black">
//           {/* Plus-minus icon */}
//           <span className="absolute block h-[1.3px] w-4 bg-black"></span>
//           <span
//             className={`absolute block h-[1px] w-4 bg-black transition-transform duration-300 ease-in-out ${
//               isExpanded ? "rotate-0" : "rotate-90"
//             }`}
//           ></span>
//         </button>
//       </div>

//       <div
//         className={`banner-content transition-all duration-300 ease-in-out ${
//           isExpanded ? "max-h-[1000px]" : "max-h-0"
//         } overflow-hidden`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

//   <div className="section-banner">
//     <div
//       onClick={toggleExpand}
//       className={`flex items-center justify-between border-t-[1px] border-mainAccent px-3 sm:px-6 lg:pt-7 xl:pt-12 ${
//         isExpanded
//           ? "h-[8rem]"
//           : "h-[5rem] overflow-hidden sm:h-[6rem] lg:h-[7rem] xl:h-[9rem]"
//       }`}
//     >
//       <h2 className="font-heading text-[14vw] font-bold uppercase tracking-tighter">
//         {bannerTitle[0].id} {bannerTitle[0].title}
//       </h2>

//       <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black">
//         {/* Plus-minus icon */}
//         <span className="absolute block h-[1.3px] w-4 bg-black duration-300 ease-in-out"></span>
//         <span
//           className={`absolute block h-[1px] w-4 bg-black transition-transform duration-300 ease-in-out ${
//             isExpanded ? "rotate-0" : "rotate-90"
//           }`}
//         ></span>
//       </button>
//     </div>

//     <div
//       className={`banner-content transition-all duration-300 ease-in-out ${
//         isExpanded ? "max-h-[50rem]" : "max-h-0"
//       } overflow-hidden`}
//     >
//       {children}
//     </div>
//   </div>
// );
