import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import About from "./components/Aboute/Aboute";


function Root({count}) {
    return (
        <div className="w-full h-auto bg-bodyColor text-lightText px-4">
            <div className="max-w-screen-xl mx-auto">
                <Banner count={count}/>
                <Features/>
                <Projects/>
                <Resume/>
                {/*<Testimonial/>*/}
                <About/>
                <Contact/>
                <Footer/>
                <FooterBottom/>
            </div>
        </div>
    );
}

export default Root;
