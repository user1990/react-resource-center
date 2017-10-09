import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/video.scss'

class PosterVideos extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 flow-text'>
            <Helmet>
              <title>Poster Videos | Resource Center</title>
            </Helmet>
          </div>
          <div className='col s12'>
            <div style={{ width: '100%' }}>
              <h3 className='flow-text'>Powerpoint</h3>
              <div className='video-container z-depth-1'>
                <iframe
                  src='https://www.youtube.com/embed/A4qXONix2aQ?rel=0'
                  width='853'
                  height='480'
                  frameBorder='0'
                  allowFullScreen='allowfullscreen'
                  title='tutorial-video'
                />
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <h3 className='flow-text'>Publisher</h3>
              <div className='video-container z-depth-1'>
                <iframe
                  src='https://www.youtube.com/embed/xFFDn5zSS5A?rel=0'
                  width='853'
                  height='480'
                  frameBorder='0'
                  allowFullScreen='allowfullscreen'
                  title='tutorial-video'
                />
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <h3 className='flow-text'>Photoshop</h3>
              <div className='video-container z-depth-1'>
                <iframe
                  src='https://www.youtube.com/embed/Nsm56J4m984?rel=0'
                  width='853'
                  height='480'
                  frameBorder='0'
                  allowFullScreen='allowfullscreen'
                  title='tutorial-video'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PosterVideos
