import React from "react";

export default function Card({ cardContent: { title, field, content, year } }) {
  return (
    <article className="container relative m-auto w-11/12 max-w-[1700px] items-center rounded-sm border-[1px] border-mainAccent bg-white py-5 text-center shadow-custom-black duration-300 hover:bg-gray-100 hover:shadow-custom-black-hover lg:grid lg:h-[20rem] lg:grid-rows-3">
      {year && (
        <span className="duration-400 absolute right-1 top-0 -translate-y-5 font-bold">
          {year}
        </span>
      )}
      <header className="self-end">
        <p className="text-lg font-semibold">{title}</p>
        {field && (
          <p className="mt-2 text-lg font-bold text-mainAccent lg:mt-0">
            {field}
          </p>
        )}
      </header>

      <hr className="hidden h-[1px] w-full bg-gray-300 lg:block"></hr>

      {content && (
        <section className="mt-2 self-start opacity-80 lg:mt-0">
          {content}
        </section>
      )}
    </article>
  );
}
