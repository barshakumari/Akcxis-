import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "jquery/src/jquery"
import Navbar from "./Components/navbar"
import Home from "./Components/home"
import About from "./Components/about"
import Coaching from './Components/coaching';
import Studyabroad from './Components/studyabroad';
import Career from "./Components/career"
import Migrate from './Components/migrate';
import Contact from "./Components/contact"
import Visit from './Components/visit';
import Work from "./Components/work"
import Footer from "./Components/footer"

import Pte from "./Components/Pte"
import Toefl from "./Components/Toefl"
import SpokenEng from './Components/SpokenEng';
import French from './Components/French';
import Ielts from './Components/Ielts';
import "aos/dist/aos.css"
import chatimg from './Components/images/WhatsappAVTAR.png'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Celpip from './Components/Celpip';


// study visa
import Canadastudy from './Components/canadastudy';
import Usastudy from './Components/usastudy';
import Ukstudy from './Components/ukstudy';
import Australiastudy from './Components/australiastudy';
import Newzealandstudy from './Components/newzealandstudy';
import Germanystudy from './Components/germanystudy';
import Singaporestudy from './Components/singaporestudy';

// work visa
import CanadaWork from './Components/Wowkvisa/CanadaWork'
import NzWork from './Components/Wowkvisa/NzWork'
import EuropeWork from './Components/Wowkvisa/EuropeWork'
import UkWork from './Components/Wowkvisa/UkWork'
import UsaWork from './Components/Wowkvisa/UsaWork'
import SingaporeWork from './Components/Wowkvisa/SingaporeWork'
import AusWork from './Components/Wowkvisa/AusWork';
import PolandWork from './Components/Wowkvisa/polandWork';
import MaltaWork from './Components/Wowkvisa/maltaWork';
import FranceWork from './Components/Wowkvisa/franceWork';
import BelgiumWork from './Components/Wowkvisa/belgiumWork';

// PR Visa
import CanadaPr from './Components/PRvisa/CanadaPr'
import AusPr from './Components/PRvisa/AusPr'

// visitor
import UsaVisit from './Components/visitorvisa/UsaVisit';
import canadaVisit from './Components/visitorvisa/canadaVisit'
import SingaporeVisit from './Components/visitorvisa/SingaporeVisit'
import GermanyVisit from './Components/visitorvisa/GermanyVisit'
import CanadaVisit from './Components/visitorvisa/canadaVisit';
import UkVisitor from './Components/visitorvisa/UkVisitor';
import AusVisit from './Components/visitorvisa/AusVisit';
import NzVisit from './Components/visitorvisa/NzVisit'


import Refundpolicy from './Components/refundpolicy';
import Termcondition from './Components/termcondition';
import Privacypolicy from './Components/privacypolicy';
import Travelhome from './Components/travel/travelhome';
import Testimonial from './Components/testimonial';
import { useEffect } from 'react';


function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>

      {
        !pathname.startsWith("/travelhome") && <a
          href="https://wa.me/9872833369?text="
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i class="fa fa-whatsapp whatsapp-icon"></i> */}
          <img src={chatimg} alt='' className='img-fluid whatsapp-icon ' />
        </a>
      }

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaching" element={<Coaching />} />

        <Route path="pte" element={<Pte />} />
        <Route path="toefl" element={<Toefl />} />
        <Route path="spokeneng" element={<SpokenEng />} />
        <Route path="french" element={<French />} />
        <Route path="Celpip" element={<Celpip />} />
        <Route path="ielts" element={<Ielts />} />

        <Route path="/studyabroad" element={<Studyabroad />} />
        <Route path="/work" element={<Work />} />
        <Route path="/migrate" element={<Migrate />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/canadastudy" element={< Canadastudy />} />
        <Route path="/usastudy" element={< Usastudy />} />
        <Route path="/ukstudy" element={< Ukstudy />} />
        <Route path="/australiastudy" element={< Australiastudy />} />
        <Route path="/newzealandstudy" element={< Newzealandstudy />} />
        <Route path="/germanystudy" element={< Germanystudy />} />
        <Route path="/singaporestudy" element={< Singaporestudy />} />

<<<<<<< HEAD
          <Route path="/canadaWork" element={< CanadaWork />} />
          <Route path="/Nzwork" element={< NzWork />} />
          <Route path="/EuropeWork" element={< EuropeWork />} />
          <Route path="/SingaporeWork" element={< SingaporeWork />} />
          <Route path="/UkWork" element={< UkWork />} />
          <Route path="/UsaWork" element={< UsaWork />} />
          <Route path="/AusWork" element={< AusWork />} />
          <Route path="/polandWork" element={< PolandWork />} />
          <Route path="/maltaWork" element={< MaltaWork />} />
          <Route path="/franceWork" element={< FranceWork />} />
          <Route path="/belgiumWork" element={< BelgiumWork/>} />
=======
        <Route path="/canadaWork" element={< CanadaWork />} />
        <Route path="/Nzwork" element={< NzWork />} />
        <Route path="/EuropeWork" element={< EuropeWork />} />
        <Route path="/SingaporeWork" element={< SingaporeWork />} />
        <Route path="/UkWork" element={< UkWork />} />
        <Route path="/UsaWork" element={< UsaWork />} />
        <Route path="/AusWork" element={< AusWork />} />
>>>>>>> 902171eec53d9b0d2ff647cb2c7cc5fa9c98238b

        <Route path="/CanadaPr" element={< CanadaPr />} />
        <Route path="/AusPr" element={< AusPr />} />

        <Route path="/UsaVisit" element={< UsaVisit />} />
        <Route path="/canadaVisit" element={< CanadaVisit />} />
        <Route path="/GermanyVisit" element={< GermanyVisit />} />
        <Route path="/SingaporeVisit" element={< SingaporeVisit />} />
        <Route path="/NzVisit" element={< NzVisit />} />
        <Route path="/UkVisitor" element={< UkVisitor />} />
        <Route path="/AusVisit" element={< AusVisit />} />


        <Route path="/privacypolicy" element={< Privacypolicy />} />
        <Route path="/termcondition" element={< Termcondition />} />
        <Route path="/refundpolicy" element={< Refundpolicy />} />

        <Route path="/testimonial" element={< Testimonial />} />

        <Route path="/travelhome" element={< Travelhome />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
