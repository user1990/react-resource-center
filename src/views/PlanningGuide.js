// eslint-disable-next-line
/* global trackScroll handleScroll setHeaders */
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import throttle from 'lodash/throttle'
import PlanningGuideNav from '../components/PlanningGuideNav'
import PlanningGuidelines from '../components/PlanningGuidelines'
import '../styles/planning-guide.css'

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

  setHeaders = headerPositions => {
    this.setState({ headerPositions })
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

        <PlanningGuideNav
          activeSection={this.state.activeSection}
          headerPosition={this.state.headerPositions}
        />
        <PlanningGuidelines setHeaders={this.setHeaders} />
      </div>
    )
  }
}

export default PlanningGuide
