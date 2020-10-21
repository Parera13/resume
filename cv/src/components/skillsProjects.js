import React from 'react';
import '../components/skillsProjects.css';
import { IconContext } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

function SkillsProjects() {
  return (
    <div className='skills-projects-component'>
      <div className='skills'>
        <span className='title'>skills</span>
        <div className='skills-content'>
          <div className='hard'>
            <span className='title'>hard</span>
            <span className='hard-content'>
              <p>html</p>
              <p>css</p>
              <p>javascript</p>
              <p>reactjs</p>
            </span>
          </div>
          <div className='soft'>
            <span className='title'>soft</span>
            <span className='soft-content'>
              <p>good in problem solving</p>
              <p>proactive</p>
              <p>maximalist</p>
              <p>persistent</p>
            </span>
          </div>
        </div>
        <div className='skill-icons'>
          <IconContext.Provider value={{ className: 'icon' }}>
            <div>
              <FaHtml5 />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: 'icon' }}>
            <div>
              <FaCss3Alt />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: 'icon' }}>
            <div>
              <FaJs />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: 'icon' }}>
            <div>
              <FaReact />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className='projects'>
        <div className='projects-main'>
          <span className='title'>recent projects</span>
          <div className='project-content'>
            <h2>weather app</h2>
            <h3>weather application built in react, use weather api </h3>
            <a target='_blank' href='https://github.com/Parera13/weather-app'>
              https://github.com/Parera13/weather-app
            </a>
          </div>
          <div className='project-content'>
            <h2>todo dashboard</h2>
            <h3>todo dashboard built in react </h3>
            <a target='_blank' href='https://github.com/Parera13/todo-list'>
              https://github.com/Parera13/todo-list
            </a>
          </div>
          <div className='project-content'>
            <h2>find my product</h2>
            <h3>search products built in react, use own database </h3>
            <a
              target='_blank'
              href='https://github.com/Parera13/find-your-product'
            >
              https://github.com/Parera13/find-your-product
            </a>
          </div>
          <div className='project-content'>
            <h2>my resume</h2>
            <h3>create my own resume in React </h3>
            <a target='_blank' href='https://github.com/Parera13/resume'>
              https://github.com/Parera13/find-your-product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsProjects;
