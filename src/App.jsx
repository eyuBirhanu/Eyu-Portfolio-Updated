import { About } from "./components/About";
import { Certificates } from "./components/Certificates";
import { Collaborate } from "./components/Collaborate";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MyDetailExp } from "./components/MyDetailExp";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="bg-blackCustom  font-Roboto font-light">
      <NavBar />
      <Hero />
      <Experience />
      <About />
      <MyDetailExp />
      <Certificates />
      <Collaborate />
      <Footer />
    </div>
  );
}

export default App;
