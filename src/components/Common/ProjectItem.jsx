import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function ProjectItem({ item, isExpanded, onToggle }) {
  return (
    <div>
      <article className="flex items-center justify-between py-2">
        <div className="flex gap-5">
          <p
            className="font-heading text-projectTitle font-bold text-gray-300"
            aria-hidden="true"
          >
            {item.id < 10 ? `0${item.id}` : `${item.id}`}
          </p>
          <h2 className="font-heading text-projectTitle font-bold">
            {item.title}
          </h2>
        </div>
        <span
          className="flex size-12 transform cursor-pointer items-center justify-center transition-transform duration-300"
          onClick={() => onToggle(item.id)}
          style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <MdOutlineKeyboardArrowDown className="size-5 transition-all duration-300 hover:size-10 sm:size-7" />
        </span>
      </article>

      {/* Conditionally render the image with transition */}
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

        {item.progress && (
          <div className="flex justify-center">
            <span className="font-bold">{item.progress}</span>
          </div>
        )}

        <div className="my-10 flex justify-center">
          {item.pageLink && (
            <a
              target="_blank"
              href={item.pageLink}
              className="block w-full cursor-pointer border-[1px] border-mainAccent p-4 text-center transition duration-300 hover:bg-gray-100"
            >
              See the Page
            </a>
          )}

          {item.codeLink && (
            <a
              target="_blank"
              href={item.codeLink}
              className="block w-full cursor-pointer border-[1px] border-mainAccent bg-mainAccent p-4 text-center text-white transition duration-300 hover:bg-opacity-80"
            >
              See the Code
            </a>
          )}
        </div>
      </div>
      <hr className="text-mainAccent"></hr>
    </div>
  );
}
