import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features  from "./components/Features"
import Courses from "./components/Courses";
import Choosingus from "./components/Choosingus";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
        <Navbar/>
        <Home/>
        <Features/>
        <Courses/>
        <Choosingus/>
    </div>
  )
}

export default App
