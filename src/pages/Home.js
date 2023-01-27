import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";


const Home = () => {
    return(
        <>
            <Navbar/>
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
            <Footer/>
        </>

    )
}

export default Home;