'use client'
import { Navigation } from "../../components/Navigation";
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FAQ } from '../../components/FAQ';

const App = () => { 
    return(
        <>
            <Banner/>
            <Navigation/>
            <Header title="FAQ"/>
            <FAQ/>
            <Footer />
        </>
    )
}

export default App