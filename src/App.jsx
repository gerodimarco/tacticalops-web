import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Activities from './components/Activities.jsx';
import Packs from './components/Packs.jsx';
import Firearms from './components/Firearms.jsx';
import Experiences from './components/Experiences.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Safety from './components/Safety.jsx';
import Advanced from './components/Advanced.jsx';
import Location from './components/Location.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="inicio">
        <Hero />
        <About />
        <Activities />
        <Packs />
        <Firearms />
        <Experiences />
        <HowItWorks />
        <Safety />
        <Advanced />
        <Location />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
