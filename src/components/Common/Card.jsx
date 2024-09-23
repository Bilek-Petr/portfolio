import React from "react";

export default function Card({ cardContent: { title, field, content, year } }) {
  return (
    <article className="container relative m-auto w-11/12 items-center rounded-sm border-[1px] border-mainAccent bg-mainLight py-5 text-center shadow-custom-black duration-300 hover:bg-gray-100 hover:shadow-custom-black-hover lg:grid lg:h-[20rem] lg:grid-rows-3">
      {year && (
        <span className="duration-400 absolute right-0 top-0 -z-10 -translate-y-5 font-bold text-gray500 text-opacity-60 lg:-translate-y-8 lg:text-4xl lg:text-opacity-40">
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
