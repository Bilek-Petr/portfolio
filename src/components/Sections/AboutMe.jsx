import React, { useState, useRef, useEffect } from "react";
import SectionBanner from "../Common/SectionBanner";
import ToggleButton from "../Common/Button";
import classNames from "classnames";

export default function AboutMe({ sectionAboutMeData, sectionList }) {
  const [isTellToggled, setIsTellToggled] = useState(false);
  const contentRef = useRef(null);

  const toggleTell = () => setIsTellToggled((prevState) => !prevState);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isTellToggled
        ? `${contentRef.current.scrollHeight}px`
        : "calc(3 * 6.5rem + 1rem)"; // Adjust height for visible content
    }
  }, [isTellToggled]);

  const paragraphClassNames = (index) =>
    classNames(
      "mb-4 transform text-base leading-relaxed transition-opacity duration-500 ease-in-out",
      {
        "opacity-100": isTellToggled || index < 3,
        "opacity-0": !isTellToggled && index >= 3,
      },
    );

  return (
    <section id="about-me">
      <SectionBanner bannerTitle={sectionList} isHighlighted={true}>
        <div className="m-auto flex w-11/12 max-w-[1800px] flex-col sm:flex-row-reverse sm:gap-x-12 sm:py-20 lg:w-full lg:gap-x-36 lg:px-5 xl:gap-x-48">
          {/* Image Column */}
          <div className="mb-6 flex-shrink-0 sm:mb-0 sm:w-1/3">
            <img
              src="/portfolio/images/profile_photo_phone.webp"
              alt="Profile Photo"
              className="h-auto max-h-[40rem] w-full object-cover"
            />
          </div>

          {/* Paragraph Column */}
          <div className="relative flex flex-col sm:w-2/3">
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

            {/* Button to toggle paragraphs */}
            <div className="link-custom flex w-full justify-center overflow-hidden py-6">
              <ToggleButton
                onClick={toggleTell}
                isToggled={isTellToggled}
                textOn="HIDE IT"
                textOff="TELL ME MORE!"
              />
            </div>
          </div>
        </div>
      </SectionBanner>
    </section>
  );
}
