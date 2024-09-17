import React from "react";

export default function Card({ cardContent: { title, field, content, year } }) {
  return (
    <article className="container relative m-auto flex w-11/12 max-w-[700px] flex-col items-center justify-center rounded-sm border-[1px] border-mainAccent bg-white py-5 text-center shadow-custom-black duration-300 hover:bg-gray-100 hover:shadow-custom-black-hover lg:h-[25rem]">
      {year && (
        <span className="duration-400 absolute right-1 top-0 -translate-y-5 font-bold">
          {year}
        </span>
      )}

      <header>
        <p className="text-lg font-semibold">{title}</p>
        {field && <p className="mt-2 font-bold text-mainAccent">{field}</p>}
      </header>
      {content && <section className="mt-2 opacity-80">{content}</section>}
    </article>
  );
}
