import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import { GenericCard } from './../components/GenericCard'
import { Helmet } from 'react-helmet'

class Posters extends Component {
  render () {
    return (
      <div
        className='container valign-wrapper'
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - '64'}px)`
        }}
      >
        <div
          className='row flow-text'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <h2 style={{ flex: '1 100%' }}>Poster Resources</h2>
          <div className='col s12 m6 flex-div'>
            <a href='https://www.canva.com/'>
              <GenericCard cardTitle='Create Your Own' hoverable>
                Canva.com is a free graphic design tool with an easy to use
                drag-and-drop interface and access to over a million photographs,
                graphics, and fonts. It is used by non-designers as well as
                professionals.
              </GenericCard>
            </a>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='Video Tutorials' hoverable>
              Canva.com is a free graphic design tool with an easy to use
              drag-and-drop interface and access to over a million photographs,
              graphics, and fonts. It is used by non-designers as well as
              professionals.
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='Student Design'>
              Canva.com is a free graphic design tool with an easy to use
              drag-and-drop interface and access to over a million photographs,
              graphics, and fonts. It is used by non-designers as well as
              professionals.
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='Professional Design'>
              Canva.com is a free graphic design tool with an easy to use
              drag-and-drop interface and access to over a million photographs,
              graphics, and fonts. It is used by non-designers as well as
              professionals.
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='Printing'>
              Canva.com is a free graphic design tool with an easy to use
              drag-and-drop interface and access to over a million photographs,
              graphics, and fonts. It is used by non-designers as well as
              professionals.
            </GenericCard>
          </div>
          <div className='col s12 m6 flex-div'>
            <GenericCard cardTitle='University Logo'>
              Canva.com is a free graphic design tool with an easy to use
              drag-and-drop interface and access to over a million photographs,
              graphics, and fonts. It is used by non-designers as well as
              professionals.
            </GenericCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Posters
