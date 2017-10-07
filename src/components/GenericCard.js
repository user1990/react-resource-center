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
        <CardTitle title={cardTitle} subtitle={cardSubtitle} />
        <CardText>
          {children}
        </CardText>
        <CardActions>
          <FlatButton label='Action1' />
          <FlatButton label='Action2' />
        </CardActions>
      </Card>
    );
  }
}

export default GenericCard;
