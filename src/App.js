import './App.css';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </ChakraProvider>
  );
}

export default App;
