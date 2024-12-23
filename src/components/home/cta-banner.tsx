import SectionWrapper from "~/components/shared/section-wrapper";

export default function CtaBanner() {
  return (
    <SectionWrapper
      id="call-to-action"
      className="bg-background-accent-dark hidden sm:block"
    >
      <div className="mx-auto w-fit px-1 py-12 text-center sm:px-4">
        <h2 className="text-heading-base text-high-contrast font-bold">
          Start your <span className="text-brand">Foraging Adventure!</span>
        </h2>
        <p className="max-w-[70ch] text-lg">
          Whether you're seeking a deeper connection with nature, a new outdoor
          hobby, or simply love the idea of finding your own food, mushroom
          foraging offers a uniquely rewarding experience.
        </p>
      </div>
    </SectionWrapper>
  );
}
