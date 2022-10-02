import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Videos from './components/videos/Videos';
import Blogs from './components/blogs/Blogs';
import ConnectWithMe from './components/connectwithme/ConnectWithMe';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/connectwithme" element={<ConnectWithMe />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
