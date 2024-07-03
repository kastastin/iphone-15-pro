import * as Sentry from "@sentry/react";

import Hero from "./components/Hero";
import Model from "./components/Model";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <main className="overflow-y-auto bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
