import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import throttle from 'lodash/throttle'
import '../styles/planning-guide.css'
import {
  headerTitles,
  planningGuideData,
  servicesData,
  styles
} from '../data/planningGuideServicesData'

const spliceHeaders = header => {
  let headersPositions = []
  header.forEach(elem => {
    headersPositions.push(elem.offsetTop)
  })
  return headersPositions
}

class PlanningGuide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerPositions: [],
      scrollY: 0,
      activeSection: 0
    }
    this.handleScroll = throttle(this.handleScroll, 200)
  }

  componentDidMount () {
    this.setState({
      headerPositions: spliceHeaders([...document.getElementsByTagName('h3')])
    })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY }, () => {
      switch (true) {
        case this.state.scrollY < this.state.headerPositions[1]:
          this.setState({ activeSection: 0 })
          break
        case this.state.scrollY < this.state.headerPositions[2]:
          this.setState({ activeSection: 1 })
          break
        case this.state.scrollY < this.state.headerPositions[3]:
          this.setState({ activeSection: 2 })
          break
        default:
          this.setState({ activeSection: 3 })
          break
      }
    })
  };

  handleNext = () => {
    const { stepIndex } = this.state
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 })
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 })
    }
  };

  render () {
    return (
      <div>
        <Helmet>
          <title>Planning Guide | Resource Center</title>
        </Helmet>

        <div style={styles.root}>
          <ul>
            {headerTitles.map((head, key) => {
              return (
                <li
                  key={key}
                  className={this.state.activeSection === key && 'active'}
                  onClick={() =>
                    (document.body.scrollTop = this.state.headerPositions[key])}
                >
                  {head.title}
                </li>
              )
            })}
          </ul>
        </div>

        <div className='container'>
          <div className='row flow-text'>
            <h2 style={{ marginBottom: 0 }}>
              Please follow these guidelines before final approval.
            </h2>
            <div className='col s12' />
            {planningGuideData.map((item, key) => {
              return (
                <span key={key}>
                  <h3 id={item.id}>{item.title}</h3>
                  {item.description.split('\n').map((paragraph, key) => {
                    return <p key={key}>{paragraph}</p>
                  })}
                </span>
              )
            })}
            <p>
              See <Link to='glossary'>Common MarCom Terms</Link> for more
              information. MarCom provides many services to help you complete
              your marketing and communication projects.
            </p>
            {servicesData.map((sevice, key) => {
              return (
                <dl key={key}>
                  <dt>{servicesData.title}</dt>
                  <dd>{servicesData.description}</dd>
                </dl>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PlanningGuide
