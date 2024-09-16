import React, { useState } from "react";
import SectionBanner from "../Common/SectionBanner";
import ToggleButton from "../Common/Button";

export default function AboutMe({ sectionAboutMeData, sectionList }) {
  const [isTellToggled, setIsTellToggled] = useState(false);

  const toggleTell = () => {
    setIsTellToggled(!isTellToggled);
  };

  return (
    <section id="about-me">
      <SectionBanner bannerTitle={sectionList}>
        <div className="m-auto flex w-[95%] max-w-screen-2xl flex-col sm:flex-row-reverse sm:gap-x-8 lg:py-20">
          {/* Image Column */}
          <div className="mb-6 sm:mb-0 sm:w-1/3">
            <img
              src="/images/profile_photo_phone.webp"
              alt="Profile Photo"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Paragraph Column */}
          <div className="flex flex-col justify-center sm:w-2/3">
            <div
              className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                isTellToggled ? "max-h-[9999px]" : "max-h-[15rem]"
              }`}
            >
              {sectionAboutMeData.description.map((paragraph, index) => (
                <div
                  key={index}
                  className={`mb-4 transform text-base leading-relaxed transition-all duration-500 ease-in-out ${
                    isTellToggled || index < 3
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  }`}
                >
                  <p
                    className={`${
                      paragraph.highlight ? "font-bold" : "text-pretty"
                    }`}
                  >
                    {paragraph.text}
                  </p>
                  {paragraph?.quote && (
                    <blockquote className="mt-2 font-heading text-2xl">
                      {paragraph.quote}
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* Button to toggle paragraphs */}
            <ToggleButton
              onClick={toggleTell}
              isToggled={isTellToggled}
              textOn="Hide it"
              textOff="Tell me more!"
            />
          </div>
        </div>
      </SectionBanner>
    </section>
  );
}
