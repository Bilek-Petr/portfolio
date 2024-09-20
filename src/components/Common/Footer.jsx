import React, { useState } from "react";

import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "p.bilek29@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy email: ", err));
  };

  return (
    <footer className="sm:border-t-2 sm:border-mainAccent">
      <div className="m-auto flex max-w-[1600px] flex-col flex-wrap items-center justify-center gap-y-8 px-6 py-5 sm:flex-row sm:justify-between sm:gap-y-0">
        <div>
          <p className="text-center font-heading text-lg font-bold text-mainAccent sm:text-xl xl:text-2xl">
            If you want to know more, reach out to me here
          </p>
        </div>

        <section className="relative flex flex-wrap justify-center gap-9">
          <a href="https://github.com/Bilek-Petr" target="_blank">
            <IoLogoGithub
              aria-label="github link"
              className="size-12 transition-all duration-500 hover:scale-125"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/petr-bílek-a5b096314/"
            target="_blank"
          >
            <IoLogoLinkedin
              aria-label="linkedin link"
              className="size-12 transition-all duration-500 hover:scale-125"
            />
          </a>

          <IoMailOutline
            aria-label="copy email"
            className="size-12 cursor-pointer transition-all duration-500 hover:scale-125"
            onClick={handleCopyEmail}
          />

          <span
            className={`absolute bottom-full right-[-1.75em] rounded text-center text-sm font-bold text-mainAccent transition-opacity duration-700 sm:w-[6rem] ${
              copied ? "opacity-100" : "opacity-0"
            }`}
          >
            Email copied!
          </span>
        </section>
      </div>
    </footer>
  );
}
