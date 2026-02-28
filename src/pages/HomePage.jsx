export default function HomePage() {
  return (
    <>
      <section className="h-full min-h-[53vh] w-full" id="home">
        <div className="relative mt-28 flex h-full w-full items-start justify-center gap-2">
          <img
            src="homepage/welcome.png"
            className="block h-auto scale-125 object-cover md:scale-100"
          />
        </div>
      </section>
    </>
  );
}
