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
          <p>frontend developer</p>
        </div>
      </div>
      <div className='right'>
        <div className='right-content'>
          <div className='aboutMe-content'>
            <p>
              <span className='title'>about me</span> i am mixed of choleric and melancholic personality type. i do effort to have a good relation with others. i prefer the tasks which are creative and push my limit. 
            </p>
          </div>
          <div className='mentor-content'>
            <p>
              <span className='title'>mentor opinion</span> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in
            </p>
          </div>
          <div className='contacts'>
            <div className='contact-left'>
              <div className='contact'>
                <i class='fa fa-address-book'></i>
                <p>00 36 70 907 1313</p>
              </div>
              <div className='contact'>
                <i class='fa fa-envelope-square'></i>
                <p>pareraphotography@gmail.com</p>
              </div>
            </div>
            <div className='contact-right'>
              <div className='contact'>
                <i class="fa fa-compass"></i>
                <p>12. kerulet, budapest</p>
              </div>
              <div className='contact'>
                <i class="fa fa-linkedin"></i>
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
