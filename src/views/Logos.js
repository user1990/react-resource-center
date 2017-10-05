import React, { Component } from 'react';
import { CardTitle } from 'material-ui/Card';
import { GenericCard } from './../components/GenericCard';

class Logos extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col m6'>
          <GenericCard
            headerTitle='Hello'
            headerAvatar='http://via.placeholder.com/140x100'
            mediaImgSrc='http://via.placeholder.com/120x100'
            overlay={
              <CardTitle
                title='Nice Job'
                subtitle='Congratulations on this great Achievement'
              />
            }
            cardTitle='Nice one'
            cardSubtitle='Looking good'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            iusto, quis dignissimos fugiat qui architecto. Numquam illum dolor
            officia qui sit possimus sint quisquam provident, a laudantium
            reiciendis asperiores perferendis!
          </GenericCard>
        </div>
      </div>
    );
  }
}

export default Logos;
