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
import { redirect } from 'next/navigation';

export default function Home() {
   redirect('/login');
  return (
    <>
    <div className="overflow-hidden">
     {/* HERO SECTION */}
      <div className="w-full min-h-screen mx-auto">
        <Navbar />
        <Hero />
      </div>

      {/* ABOUT US SECTION  */}
      <div className="w-full mx-auto my-15 md:my-30">
        <About />
      </div>

      {/* COUNTING SECTION */}
      <div className="w-full mx-auto my-15 md:my-30">
       <Counting /> 
      </div>

      {/* SERVICES SECTION */}
      <div className="w-full mx-auto my-15 md:my-30">
        <Services />
      </div>

       {/* PROJECTS SECTION */}
      <div className="w-full mx-auto my-15 md:my-30">
        <Project />
      </div>

        {/* TESTIMONIAL SECTIION */}
      <div className="w-full mx-auto my-15 md:my-30">
        <Testimonial />
      </div>

       {/* FAQ SECTION */}
      <div className="w-full mx-auto my-15 md:my-30 bg-yellow-200/60 rounded-xl p-4">
        <Faq />
      </div>

      {/* CONTACT SECTION */}
      <div className="w-full mx-auto my-15 md:my-30">
        <Contact />
      </div>

      {/* FOOTER SECTION */}
      <div className="w-full mx-auto">
        <Footer />
      </div>
    </div>
    </>
  );
}
