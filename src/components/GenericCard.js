import React, { Component } from 'react'
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
      classes
    } = this.props

    return (
      <div>
        <Card className={classes} style={{ height: '100%' }}>
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
          <CardText style={{ fontSize: '16px', paddingTop: '0' }}>
            {children}
          </CardText>
          {actions && (
            <CardActions className='card-actions'>{actions}</CardActions>
          )}
        </Card>
      </div>
    )
  }
}

export default GenericCard
