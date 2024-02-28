import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Reservation from './components/Reservation';

function App() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Reservation/>
      <Footer/>
    </main>
  );
}

export default App;
