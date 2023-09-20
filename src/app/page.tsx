'use client'
import React from "react";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { Banner } from "../components/Banner";
import { Stats } from "../components/Stats";
import { About } from "../components/About";

const App = () => {
    return(
        <>  
            <Banner/>
            <Navigation/>
            <Hero />
            <Stats/>
            <About/>
        </>
    )
}

export default App;