import './App.css';
import React from 'react';

import { Nav } from './Componentes/Nav';
import { About } from './Componentes/About';
import { Projects } from './Componentes/Projects';
import { Skills } from './Componentes/Skills';
import { Certificate } from './Componentes/Certificate';
import { Contact } from './Componentes/Contact';

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
      </main>
    </div>
  );
}

export default App;
