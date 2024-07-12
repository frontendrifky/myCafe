import Header from "./Header";
import AboutUs from "./about/aboutUs";
import Story from "./about/ourStory";
import Testimonial from "./about/testimonial";
import Footer from "./footer";

function About(){

    return(
        <>
            <Header></Header>
            <AboutUs></AboutUs>
            <Story></Story>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    );
}

export default About;