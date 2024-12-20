import BenefitsOverview from "./components/benefits-overview";
import Community from "./components/community";
import CtaBanner from "./components/cta-banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import SafetyEducation from "./components/safety-education";

function App() {
  return (
    <div className="bg-background-main text-main relative h-full min-h-dvh w-full max-w-screen overflow-clip text-base">
      <Header />
      <main className="flex w-full flex-col items-center">
        <Hero />
        <BenefitsOverview />
        <CtaBanner />
        <SafetyEducation />
        <Community />
        <Footer />
      </main>
    </div>
  );
}

export default App;
