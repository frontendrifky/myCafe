import Header from './Header';
import Landing from './homePage/landing';
import Services from './homePage/services';
import Experience from './homePage/experience';
import Footer from './footer';

import './index.css';


function Home() {
    return (
      <>
        <Header></Header>
        <Landing></Landing>
        <Services></Services>
        <Experience></Experience>
        <Footer></Footer>
      </>
    )
  }
  
  export default Home