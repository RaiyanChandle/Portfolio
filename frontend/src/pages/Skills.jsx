import React from 'react';
import Folder from '../components/Skills/Folder';

// Import all 24 logos from the skillLogo assets folder
import htmlLogo from '../assets/skillLogo/HTML5.svg';
import cssLogo from '../assets/skillLogo/CSS3.svg';
import jsLogo from '../assets/skillLogo/JavaScript.svg';
import tsLogo from '../assets/skillLogo/TypeScript.svg';
import tailwindLogo from '../assets/skillLogo/Tailwind CSS.svg';
import reactLogo from '../assets/skillLogo/React.svg';
import nodeLogo from '../assets/skillLogo/Node.js.svg';
import expressLogo from '../assets/skillLogo/Express.png';
import mongoLogo from '../assets/skillLogo/MongoDB.png';

import pythonLogo from '../assets/skillLogo/Python.svg';
import cppLogo from '../assets/skillLogo/cpp.svg';
import mysqlLogo from '../assets/skillLogo/MySQL.svg';
import postgresLogo from '../assets/skillLogo/PostgresSQL.svg';
import flaskLogo from '../assets/skillLogo/Flask.svg';
import fastapiLogo from '../assets/skillLogo/FastAPI.svg';
import tensorflowLogo from '../assets/skillLogo/TensorFlow.svg';
import kerasLogo from '../assets/skillLogo/Keras.svg';

import numpyLogo from '../assets/skillLogo/NumPy.svg';
import pandasLogo from '../assets/skillLogo/Pandas.svg';
import scikitLogo from '../assets/skillLogo/scikit-learn.svg';
import gitLogo from '../assets/skillLogo/Git.svg';
import githubLogo from '../assets/skillLogo/GitHub.svg';
import vscodeLogo from '../assets/skillLogo/Visual Studio Code (VS Code).svg';
import canvaLogo from '../assets/skillLogo/Canva.svg';

export default function Skills() {
  // Flat list of 24 skills with custom folder brand colors
  const skills = [
    // Frontend UI & Core Web
    { name: 'HTML5', src: htmlLogo, color: '#E34F26' },
    { name: 'CSS3', src: cssLogo, color: '#1572B6' },
    { name: 'JavaScript', src: jsLogo, color: '#F7DF1E' },
    { name: 'TypeScript', src: tsLogo, color: '#3178C6' },
    { name: 'Tailwind CSS', src: tailwindLogo, color: '#06B6D4' },
    { name: 'React', src: reactLogo, color: '#61DAFB' },
    { name: 'Node.js', src: nodeLogo, color: '#339933' },
    { name: 'Express', src: expressLogo, color: '#404040' },
    { name: 'MongoDB', src: mongoLogo, color: '#47A248' },

    // Programming Languages & ML/DL Stuff (grouped with Python)
    { name: 'C++', src: cppLogo, color: '#00599C' },
    { name: 'Python', src: pythonLogo, color: '#3776AB' },
    
    { name: 'Scikit-learn', src: scikitLogo, color: '#F89939' },
    { name: 'TensorFlow', src: tensorflowLogo, color: '#FF9900' },
    { name: 'Keras', src: kerasLogo, color: '#D00000' },
    { name: 'NumPy', src: numpyLogo, color: '#4DABF7' },
    { name: 'Pandas', src: pandasLogo, color: '#8F71FF' },

    // Backend APIs & Databases
    { name: 'MySQL', src: mysqlLogo, color: '#4479A1' },
    { name: 'PostgreSQL', src: postgresLogo, color: '#4169E1' },
    { name: 'Flask', src: flaskLogo, color: '#E4E4E7' },
    { name: 'FastAPI', src: fastapiLogo, color: '#009688' },
    

    // Developer Tools & Utilities
    { name: 'Git', src: gitLogo, color: '#F05032' },
    { name: 'GitHub', src: githubLogo, color: '#FFFFFF' },
    { name: 'VS Code', src: vscodeLogo, color: '#007ACC' },
    { name: 'Canva', src: canvaLogo, color: '#00C4CC' }
  ];

  return (
    <section 
      id="skills" 
      className="h-screen w-full bg-black flex flex-col justify-start items-center relative overflow-hidden select-none font-sans px-8 pt-10"
    >
      <div className="max-w-7xl mx-auto w-full z-10 space-y-8">
        
        {/* Section Heading at Top */}
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-center">
          My Skills
        </h2>

        {/* CSS Grid - columns are strictly aligned vertically like Windows desktop icons */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-12 gap-y-12 md:gap-x-16 md:gap-y-16 justify-items-center justify-center w-full max-w-7xl mx-auto pt-2">
          {skills.map((item, idx) => (
            <div 
              key={idx} 
              className="flex justify-center items-center w-28 h-24 md:w-32 md:h-28"
            >
              <Folder
                name={item.name}
                logo={item.src}
                color={item.color}
                size={1.25}
                isLogoFilter={['Flask', 'Express', 'GitHub', 'Pandas'].includes(item.name)}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
