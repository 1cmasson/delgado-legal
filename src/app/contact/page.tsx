'use client'
import { Navigation } from "../../components/Navigation";
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Contact } from "../../components/Contact";

const App = () => { 
    return(
        <>
            <Banner/>
            <Navigation/>
            <Header title="Contact"/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App