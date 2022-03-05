import React from 'react';
import Header from './Componentes/Header';
import Feature from './Componentes/Feature';
import About  from './Componentes/About';
import Presentation from './Componentes/Presentation';
import Contact from './Componentes/Contact';
import aboutimage from '../src/images/about.png';
import aboutimage1 from '../src/images/download.png'
function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes With All You Need For Daily life' button='Get The App'/>
      <Presentation/>
      <About image={aboutimage1} title='Download And Get The APP Now' button='Download'/>
      <Contact/>
    </div>
  );
}

export default App;
