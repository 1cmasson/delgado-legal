'use client'
import React from "react";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation"
import { Banner } from "../components/Banner"

const App = () => {
    return(
        <>
            <Banner/>
            <Navigation/>
            <Hero />
        </>
    )
}

export default App;