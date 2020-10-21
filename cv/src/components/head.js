import React from 'react';
import Photo from '../resumePhoto.png';

function Head() {
  return (
    <div className='head-component'>
      <div className='left'>
        <div className='photo'>
          <img src={Photo} alt='' />
        </div>
        <div className='name'>
          <span id='firstName'>istvan</span>
          <span id='secondName'> balazs</span>
          <p>Software tester</p>
        </div>
      </div>
      <div className='right'>
        <div className='right-content'>
          <div className='aboutMe-content'>
            <p>
              <span className='title'>about me</span> after a lot of travel and work around eu, i made a decision.
               so far i had physical works and i do want to change to intellectual work. i liked my last job as a 
               sailor but that is not matching with my further goals like starting a family. there was not a question 
               that i open to the it sector.
            </p>
            <p>
              i do effort to have a good relation with others, i prefer the tasks which are creative and push my limit.
            </p>
          </div>
          <div className='contacts'>
            <div className='contact-left'>
              <div className='contact'>
                <i className='fa fa-address-book'></i>
                <p>00 36 70 907 1313</p>
              </div>
              <div className='contact'>
                <i className='fa fa-envelope-square'></i>
                <p>istvan.balazs.priv@gmail.com</p>
              </div>
            </div>
            <div className='contact-right'>
              <div className='contact'>
                <i className="fa fa-compass"></i>
                <p>12. kerulet, budapest</p>
              </div>
              <div className='contact'>
                <i className="fa fa-linkedin"></i>
                <p>www.linkedin.com/in/istvan13</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
