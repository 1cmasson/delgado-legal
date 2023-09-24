'use client'
import { Navigation } from "../../components/Navigation";
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Testimonials } from '../../components/Testimonials';

const App = () =>{
    return(
        <>
            <Banner/>
            <Navigation/>
            <Header title="Testimonials"/>
            <Testimonials/>
            <Footer/>
        </>
    )
}

export default App;