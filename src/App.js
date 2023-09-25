// import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Cars from './pages/cars';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
