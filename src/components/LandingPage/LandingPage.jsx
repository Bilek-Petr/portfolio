import React, { useEffect } from "react";
import { splitText } from "../../animations/split";

export default function LandingPage({ data }) {
  useEffect(() => {
    splitText();
  }, []);

  return (
    <>
      <section className="h-full w-full justify-center bg-mainLight px-4 pb-32 pt-20 sm:px-8 sm:py-28 2xl:pt-24">
        <span className="relative font-special text-descriptionText font-semibold uppercase text-mainAccent sm:bottom-[-30px]">
          {data.greeting}
        </span>
        <h1
          id="name-title"
          className="w-full font-heading text-nameHeading font-bold uppercase leading-none text-mainAccent sm:tracking-[-0.6rem]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {data.firstName} {data.lastName}
        </h1>
        <span className="font-special text-descriptionText font-semibold uppercase leading-10 text-mainAccent">
          Just a wanderer who ended up <br></br>
          developing web apps
        </span>
      </section>
    </>
  );
}
