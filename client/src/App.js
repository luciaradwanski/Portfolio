import './App.css';
import React from 'react';

import { Nav } from './Componentes/Nav';
import { About } from './Componentes/About';
import { Projects } from './Componentes/Projects';
import { Skills } from './Componentes/Skills';
import { Certificate } from './Componentes/Certificate';
import { Contact } from './Componentes/Contact';
import { Footer } from './Componentes/Footer';

function App() {
  return (
    
      <div className="App">
      <Nav/>
      <main>
        <About/>
        <Skills/>
        <Projects/>
        <Certificate/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
