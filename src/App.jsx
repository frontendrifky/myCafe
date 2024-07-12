
import Home from "./home";
import About from './about';
import Menu from "./menu";
import ContactUs from "./contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
