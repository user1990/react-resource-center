import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { posterVideos } from '../data/posterVideosData'
import '../styles/video.css'

const PosterVideos = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 flow-text'>
          <Helmet>
            <title>Poster Videos | Resource Center</title>
          </Helmet>
        </div>
        {posterVideos.map((video, key) => {
          return (
            <div key={key} className='col s12'>
              <div style={{ width: '100%' }}>
                <h3 className='flow-text'>{video.title}</h3>
                <div className='video-container z-depth-1'>
                  <iframe
                    src={video.url}
                    width='853'
                    height='480'
                    frameBorder='0'
                    allowFullScreen='allowfullscreen'
                    title='tutorial-video'
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PosterVideos
