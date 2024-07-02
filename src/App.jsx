import Hero from "./components/Hero";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <main className="bg-black overflow-y-auto">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default App;
