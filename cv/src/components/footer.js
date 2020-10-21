import React from 'react';
import '../components/footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='language'>
        <div className="language-inside">
          <span className='title'>language</span>
          <div className='language-content'>
            <p>english</p>
            <div className='line-block'>
              <p id='lines'>|||||||||</p>
              <p id="lines-empty">|||||</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text'>
        <p>
          <span className='title'>hobbies</span> web developing, watching
          football, phototography, traveling, reading self-improvement books
        </p>
      </div>
    </div>
  );
}

export default Footer;
