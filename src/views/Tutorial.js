import React from 'react';
import '../styles/video.css';

const Tutorial = props =>
  (<div className='container'>
    <div className='row'>
      <div className='col s12'>
        <p className='btm-margin-20'>
          If you have any problems using the MarCom Resource Center, please
          contact Jesse Weigel at{' '}
          <a href='mailto:jweigel@franciscan.edu'>jweigel@franciscan.edu</a> or{' '}
          <a href='tel:17402845305'> 740-284-5305</a>.
        </p>
      </div>
    </div>
    <div className='row'>
      <div className='col s12 valign-wrapper' style={{ minHeight: 'calc(50vh - 64px)' }}>
        <div className='video-container z-depth-1'>
          <iframe
            width='853'
            height='480'
            title='youtube-video'
            src='https://www.youtube.com/embed/WQt0GDsL8ZU?rel=0'
            frameBorder='0'
            allowFullScreen='allowfullscreen'>Youtube
          </iframe>
        </div>
      </div>
    </div>
  </div>);

export default Tutorial;
