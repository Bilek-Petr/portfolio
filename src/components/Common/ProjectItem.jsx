import React, { lazy } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function ProjectItem({ item, isExpanded, onToggle }) {
  return (
    <div>
      <article className="flex items-center justify-between px-2 py-2">
        <div className="flex gap-5">
          <p
            className="font-heading text-projectTitle font-bold text-gray-300"
            aria-hidden="true"
          >
            {item.id < 10 ? `0${item.id}` : `${item.id}`}
          </p>
          <h3 className="font-heading text-projectTitle font-bold">
            {item.title}
          </h3>
        </div>
        <span
          aria-expanded={isExpanded}
          className="flex size-12 transform cursor-pointer items-center justify-center transition-transform duration-300"
          onClick={() => onToggle(item.id)}
          style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <MdOutlineKeyboardArrowDown className="size-5 transition-all duration-300 hover:size-10 sm:size-7" />
        </span>
      </article>

      <div
        className={`transition-max-height overflow-hidden duration-500 ease-in-out ${isExpanded ? "max-h-[100rem]" : "max-h-0"}`}
      >
        <figure className="my-4">
          <img
            src={item.image}
            alt={item.title}
            className="h-auto w-full rounded-lg"
          />
        </figure>

        <div className="flex justify-center gap-2 pt-6">
          {item.tools && item.tools.length > 0 ? (
            item.tools.map((tool, index) => (
              <span
                key={index}
                className="text-primaryTone cursor-pointer rounded-full bg-blue-100 px-4 py-2 text-sm font-medium uppercase transition-colors duration-300 hover:bg-blue-300 hover:text-mainLight"
              >
                {tool}
              </span>
            ))
          ) : (
            <span>No tools listed</span>
          )}
        </div>

        {item.progress && (
          <div className="flex justify-center pt-10">
            <span className="text-gray500">
              {item.progress}{" "}
              <span className="wave-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </span>
          </div>
        )}

        <div className="my-10 flex justify-center">
          {item.pageLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.pageLink}
              className="border-primaryTone text-primaryTone block w-full cursor-pointer border-[1px] p-4 text-center transition duration-300 hover:bg-blue-100"
            >
              See the Page
            </a>
          )}

          {item.codeLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.codeLink}
              className="border-primaryTone bg-primaryTone block w-full cursor-pointer border-[1px] p-4 text-center text-white transition duration-300 hover:bg-opacity-80"
            >
              See the Code
            </a>
          )}
        </div>
      </div>
      <hr className="text-mainAccent" />
    </div>
  );
}
