import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { genericCardData } from '../data/genericCardData';
import { GenericCard } from './../components/GenericCard';
import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topCoord: null
    };
  }

  componentDidMount() {
    topCoord: this.refs.homepageContainer.offsetTop
  }

  render() {
    return (
      <div
        ref='homepageContainer'
        className="container valign-wrapper"
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
        }}
      >
        <Helmet>
          <title>Home | Resource Center</title>
        </Helmet>
        <div
          className="row flow-text"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
        <div className="col s12">
          <h2 style={{ flex: '1 100%' }}>Hello! How can MarCom help you?</h2>
        </div>
          {_.map(genericCardData, ({ title, description }, key) => {
            return (
              <div key={key} className="col s12 m4 flex-div">
                <GenericCard cardTitle={title}>
                  {description}
                </GenericCard>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
