
import './App.css';
import { Fragment } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Property from './Components/Property';
import Services from './Components/Services';
import Work from './Components/Work';
import Accordion from './Components/Accordion';
import Agent from './Components/Agent';
import Footer from './Components/Footer';

function App() {
  return (
    <Fragment>
     <Navbar />
     <Home />
     <Property />
     <Services />
     <Work />
     <Accordion />
     <Agent />
     <Footer />
    </Fragment>
  );
}

export default App;
