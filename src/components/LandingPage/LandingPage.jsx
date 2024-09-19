export default function LandingPage({ data }) {
  return (
    <>
      <section className="mb-32 h-full px-4 pt-20 sm:mb-20 sm:px-8 2xl:pt-24">
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
