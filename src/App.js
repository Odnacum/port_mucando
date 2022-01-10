import React, { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import Linguas from "./components/Linguas/Linguas";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => 
  // const [{ themeName }] = useContext(ThemeContext);

   (
    <div id="top" className={`${"light"} app`}>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        {/* <Linguas/> */}
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
;

export default App;
