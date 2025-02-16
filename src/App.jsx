import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features  from "./components/Features"
import Courses from "./components/Courses";
import Choosingus from "./components/Choosingus";
import Form from "./components/Form";
import Footer from "./components/Footer";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="overflow-x-hidden">
        <Navbar/>
        <Home/>
        <Features/>
        <Courses/>
        <Choosingus/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default App
