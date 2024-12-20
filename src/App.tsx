import BenefitsOverview from "./components/benefits-overview";
import CtaBanner from "./components/cta-banner";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <div className="bg-background-main text-main relative h-full min-h-dvh w-full max-w-screen overflow-clip text-base">
      <Header />
      <main className="flex w-full flex-col items-center">
        <Hero />
        <BenefitsOverview />
        <CtaBanner />
      </main>
    </div>
  );
}

export default App;
