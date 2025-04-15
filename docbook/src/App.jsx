import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AllDoctor from "./pages/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alldoctors" element={<AllDoctor />} />
        <Route path="/alldoctors/:special" element={<AllDoctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
