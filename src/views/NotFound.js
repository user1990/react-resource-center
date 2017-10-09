import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>NotFound | Resource Center</title>
        </Helmet>
        <h1>NotFound View</h1>
      </div>
    );
  }
}

export default NotFound;
