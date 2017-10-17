import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/video.css';
import { logPageView } from '../utils/analytics'

class Tutorial extends Component {
  state = { topCoord: null }

  componentDidMount() {
    this.setState({
      topCoord: this.refs.tutorialContainer.offsetTop
    })
    logPageView()
  }

  render() {
    return (
      <div ref='tutorialContainer' className='container'>
        <Helmet>
          <title>Tutorial | Resource Center</title>
        </Helmet>
        <div className='row' style={{ marginBottom: 0 }}>
          <div
            className='col s12 valign-wrapper'
            style={{
              minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
            }}
          >
            <div style={{ width: '100%' }}>
              <div className='video-container z-depth-1'>
                <iframe
                  src='https://www.youtube.com/embed/WQt0GDsL8ZU?rel=0'
                  width='853'
                  height='480'
                  title='tutorial-video'
                  frameBorder='0'
                  allowFullScreen='allowfullscreen'
                />
              </div>
              <p style={{ marginTop: '20px' }}>
                If you have any problems using the MarCom Resource Center,
                please contact Jesse Weigel at{' '}
                <a href='mailto:jweigel@franciscan.edu'>
                  jweigel@franciscan.edu
                </a>
                or <a href='tel:17402845305'> 740-284-5305</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial
