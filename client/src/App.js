import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Connect from "./screens/Connect/Connect";
import About from "./screens/About/About";
import Give from "./screens/Give/Give";

function App() {
  return (
    <div className=" text-center">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/give" element={<Give />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
