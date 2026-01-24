import React from "react";
import Navbar from "@/component/01/navbar";
import Hero from "@/component/01/hero";
import About from "@/component/01/about";
import Counting from "@/component/01/counting";
import Services from "@/component/01/services";
import Project from "@/component/01/project";
import Testimonial from "@/component/01/testimonial";
import Faq from "@/component/01/faq";
import Contact from "@/component/01/contact";
import Footer from "@/component/01/footer";

export default function Home() {
  return (
    <>
     {/* HERO SECTION */}
      <div className="relative w-full min-h-screen mx-auto">
        <Navbar />
        <Hero />
      </div>

      {/* ABOUT US SECTION  */}
      <div className="w-full mx-auto">
        <About />
      </div>

      {/* COUNTING SECTION */}
      <div className="w-full mx-auto">
       <Counting /> 
      </div>

      {/* SERVICES SECTION */}
      <div className="w-full mx-auto">
        <Services />
      </div>

       {/* SERVICES SECTION */}
      <div className="w-full mx-auto">
        <Project />
      </div>

        {/* TESTIMONIAL SECTIION */}
      <div className="w-full mx-auto">
        <Testimonial />
      </div>

       {/* FAQ SECTION */}
      <div className="w-full mx-auto">
        <Faq />
      </div>

      {/* CONTACT SECTION */}
      <div className="w-full mx-auto">
        <Contact />
      </div>

      {/* FOOTER SECTION */}
      <div className="w-full mx-auto">
        <Footer />
      </div>
    </>
  );
}
