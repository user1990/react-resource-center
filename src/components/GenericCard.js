import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export class GenericCard extends Component {
  render() {
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
    } = this.props;

    return (
      <Card className={classes}>
        {(headerTitle || headerAvatar) &&
          <CardHeader
            title={headerTitle}
            subtitle={headerSubtitle}
            avatar={headerAvatar}
          />}

        {mediaImgSrc &&
          <CardMedia className='image-container' overlay={overlay}>
            <img src={mediaImgSrc} alt={mediaImgAlt} />
          </CardMedia>}
        {cardTitle && 
          <CardTitle 
            title={cardTitle} 
            subtitle={cardSubtitle} 
            style={{ paddingBottom: '0' }}
          />
        <CardText style={{ fontSize: '16px', paddingTop: '0' }}>
          {children}
        </CardText>
        {actions && 
          <CardActions>
            {actions}
          </CardActions>}
      </Card>
    );
  }
}

export default GenericCard;
