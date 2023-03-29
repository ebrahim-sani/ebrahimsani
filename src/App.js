import React from "react";
import {
   Skills,
   Contact,
   Header,
   Testimonials,
   Work,
   About,
   Footer,
} from "./container/index";
import { Navbar } from "./components/index";
import "./App.scss";

const darkMode = () => {
   //
};

const App = () => {
   return (
      <div className={`${darkMode} ? "dark__bg" : "app"`}>
         <Navbar />
         <Header />
         <About />
         <Work />
         <Skills />
         <Testimonials />
         <Contact />
         <Footer />
      </div>
   );
};

export default App;
