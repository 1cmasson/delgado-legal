'use client'
import React from "react";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { Banner } from "../components/Banner";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { Practices } from "../components/Practices";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop"

const App = () => {
    return(
        <>  
            <Banner/>
            <Navigation/>
            <Hero />
            {/* <BackToTop/> */}
            <Stats/>
            <About/>
            <Practices/>
            <Testimonials/>
            <FAQ/>
            <Footer/>
        </>
    )
}

export default App;
