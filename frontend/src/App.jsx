import React from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Pointer } from './components/Pointer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500/30 selection:text-white relative">
      <Pointer />
      {/* Scrollable Container with sections */}
      <main className="w-full flex flex-col gap-16 bg-black">
        {/* Flush section flow */}
        <div className="w-full flex flex-col">
          <Hero />
          <About />
          <Skills />
        </div>

        {/* Separated sections */}
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
