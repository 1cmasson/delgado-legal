'use client'
import { Navigation } from "../../components/Navigation";
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Practices } from '../../components/Practices';

const App = () => { 
    return(
        <>
            <Banner/>
            <Navigation/>
            <Header title="Practice Areas"/>
            <Practices/>
            <Footer/>
        </>
    )
}

export default App