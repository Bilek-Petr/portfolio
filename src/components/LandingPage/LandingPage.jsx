export default function LandingPage({ data }) {
  return (
    <>
      <section
        className="link-custom flex h-full w-full justify-center px-4 pb-32 pt-20 sm:px-8 sm:py-28 2xl:pt-24"
        style={{ "--tw-shadow-color": "#1E1E1E" }}
      >
        <span className="relative font-special text-descriptionText font-semibold uppercase sm:bottom-[-30px]">
          {data.greeting}
        </span>
        <h1 className="whitespace-nowrap font-heading text-nameHeading font-bold uppercase leading-none sm:tracking-[-0.6rem]">
          {data.firstName}
          <span className="hidden sm:inline">{` ${data.lastName}`}</span>
        </h1>
        <span className="font-special text-descriptionText font-semibold uppercase leading-10">
          Just a wanderer who ended up <br></br> developing web apps
        </span>
      </section>
    </>
  );
}
