import React, { useState, useRef, useEffect } from "react";
import SectionBanner from "../Common/SectionBanner";
import classNames from "classnames";

export default function AboutMe({
  sectionAboutMeData,
  sectionList,
  initiallyExpanded,
}) {
  const contentRef = useRef(null);

  const paragraphClassNames = (index) =>
    classNames(
      "mb-4 transform text-base leading-relaxed transition-opacity duration-500 ease-in-out",
    );

  return (
    <section id="about-me">
      <SectionBanner
        bannerTitle={sectionList}
        isHighlighted={true}
        initiallyExpanded={true}
      >
        <div className="m-auto flex w-11/12 max-w-[1800px] flex-col pb-20 pt-12 sm:flex-row-reverse sm:gap-x-6 sm:py-32 lg:w-full lg:gap-x-12 lg:px-5 xl:gap-x-16">
          {/* Image Column */}
          <div className="mb-6 flex-shrink-0 sm:mb-0 sm:w-1/3">
            <img
              src="/portfolio/images/profile_photo_phone.webp"
              alt="Profile Photo"
              className="h-auto max-h-[40rem] w-full object-cover"
            />
          </div>

          {/* Paragraph Column */}
          <div className="relative flex flex-col justify-center">
            <div
              ref={contentRef}
              className="transition-max-height overflow-hidden duration-500 ease-in-out"
            >
              {sectionAboutMeData.description.map((paragraph, index) => (
                <div key={index} className={paragraphClassNames(index)}>
                  <p
                    className={classNames(
                      paragraph.highlight
                        ? "text-3xl font-bold lg:text-5xl"
                        : "text-pretty sm:text-base lg:text-lg",
                    )}
                  >
                    {paragraph.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBanner>
    </section>
  );
}
