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
          <span id='quot'>"</span> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam, vitae in exercitationem laudantium deserunt
          voluptatibus aut at. Eos laborum necessitatibus maiores eveniet at
          quas, atque, harum enim ratione molestiae quidem?
        </p>
      </div>
    </div>
  );
}

export default Footer;
