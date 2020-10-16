import React from 'react';
import './App.css';
import Head from './components/head';
import "./components/head.css"
import Interest from './components/interest';
import SkillsProjects from './components/skillsProjects';
import WorkEdu from './components/workEdu';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Head />
     <Interest />
     <SkillsProjects />
     <WorkEdu />
     <Footer />
    </div>
  );
}

export default App;
