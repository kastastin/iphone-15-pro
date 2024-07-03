import Hero from "./components/Hero";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="overflow-y-auto bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
