import React from 'react';
import '../components/workEdu.css';

function WorkEdu() {
  return (
    <div className='work-edu-component'>
      <div className='edu'>
        <span className='title'>work experience</span>
        <div className='edu-content'>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2020</p>
                <p>2017</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>river ships - swiss gloria, ms saxonia, excellence coral</h2>
              <p>sailor</p>
            </div>
          </div>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2017</p>
                <p>2015</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>villa bagatelle</h2>
              <p>waiter</p>
            </div>
          </div>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2015</p>
                <p>2014</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>tiger tiger london</h2>
              <p>waiter</p>
            </div>
          </div>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2013</p>
                <p>2009</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>river ships - serenade 1, serenade 2, royal crown</h2>
              <p>bar waiter</p>
            </div>
          </div>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2009</p>
                <p>2004</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>budapest - events</h2>
              <p>waiter</p>
            </div>
          </div>
        </div>
      </div>
      <div className='edu'>
        <span className='title'>education</span>
        <div className='edu-content'>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2020</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>codecool</h2>
              <p>frontend developer</p>
            </div>
          </div>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2016</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>hajós akadémia</h2>
              <h3>zoltán gőzős közhasznú alapítvány</h3>
              <p>sailor</p>
            </div>
          </div>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2008</p>
                <p>2006</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>balassa bálint economic secondary school </h2>
              <p>hospitality management technician</p>
            </div>
          </div>
          <div className='section'>
            <div className='date-content'>
              <i class='fa fa-calendar'></i>
              <div className='date'>
                <p>2006</p>
                <p>2002</p>
              </div>
            </div>
            <div className='edu-details'>
              <h2>berzeviczy gergely economic secondary school </h2>
              <p>gce exemination</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkEdu;
