export default function CtaBanner() {
  return (
    <section
      id="call-to-action"
      className="bg-background-accent-dark hidden w-full sm:block"
    >
      <div className="text-high-contrast mx-auto w-fit px-1 py-12 sm:px-4">
        <h1 className="text-heading-base text-center font-bold">
          Start your <span className="text-brand">Foraging Adventure!</span>
        </h1>
        <p className="text-body-lg max-w-[70ch] text-center">
          Whether you're seeking a deeper connection with nature, a new outdoor
          hobby, or simply love the idea of finding your own food, mushroom
          foraging offers a uniquely rewarding experience.
        </p>
      </div>
    </section>
  );
}
