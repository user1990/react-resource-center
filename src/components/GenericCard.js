import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export class GenericCard extends Component {
  constructor(props){
    super(props);
    this.state = { depth: 1 };
  }

  onMouseOver = () => {
    this.setState({ depth: 2 })
  }

  onMouseOut = () => {
    this.setState({ depth: 1 })
  }

  render () {
    const {
      actions,
      headerTitle,
      headerSubtitle,
      headerAvatar,
      mediaImgSrc,
      mediaImgAlt,
      overlay,
      cardTitle,
      cardSubtitle,
      children,
      classes,
      hoverable
    } = this.props

    return (
      <Paper
        zDepth={this.state.depth}
        onMouseOver={hoverable && this.onMouseOver}
        onMouseOut={hoverable && this.onMouseOut}
      >
        <Card className={classes} style={{ boxShadow: 'none' }}>
          {(headerTitle || headerAvatar) && (
            <CardHeader
              title={headerTitle}
              subtitle={headerSubtitle}
              avatar={headerAvatar}
            />
          )}

          {mediaImgSrc && (
            <CardMedia className='img-container' overlay={overlay}>
              <img src={mediaImgSrc} alt={mediaImgAlt} />
            </CardMedia>
          )}
          {cardTitle && (
            <CardTitle
              title={cardTitle}
              subtitle={cardSubtitle}
              style={{ paddingBottom: '0' }}
            />
          )}
          <CardText style={{ fontSize: '16px' }}>
            {children}
          </CardText>
          {actions && (
            <CardActions className='card-actions'>{actions}</CardActions>
          )}
        </Card>
      </Paper>
    )
  }
}

export default GenericCard
