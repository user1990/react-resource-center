import filter from 'lodash/filter'
import React from 'react'
import Masonry from 'react-masonry-component'
import { GenericCard } from './../components/GenericCard'
import FlatButton from 'material-ui/FlatButton'
import DownloadIcon from './DownloadIcon'
import { logEvent } from '../utils/analytics'

const MasonryComp = ({ data, activeTab }) => {
  return (
    <Masonry>
      {filter(
        data,
        logo => activeTab === 'all' || activeTab === logo.category
      ).map(({ thumbnailUrl, jpgUrl, name, psdUrl }, i) => (
        <div className='col s12 m6 l4 xl3 logo-card-container' key={i}>
          <GenericCard
            classes='logo-card'
            mediaImgSrc={
              'https://myfranciscan.franciscan.edu/ICS/clientconfig/customcontent/marcom/MarComTab/' +
              thumbnailUrl
            }
            actions={
              <div>
                <FlatButton
                  href={
                    'https://myfranciscan.franciscan.edu/ICS/clientconfig/customcontent/marcom/MarComTab/' +
                    jpgUrl
                  }
                  download={name}
                  label={
                    <span>
                      <DownloadIcon color='#ffb41f' />JPG
                    </span>
                  }
                  onClick={() => logEvent('Logo Download (JPG)', name)}
                />
                <FlatButton
                  href={
                    'https://myfranciscan.franciscan.edu/ICS/clientconfig/customcontent/marcom/MarComTab/' +
                    psdUrl
                  }
                  download={name}
                  label={
                    <span>
                      <DownloadIcon color='#ffb41f' />PSD
                    </span>
                  }
                  onClick={() => logEvent('Logo Download (PSD)', name)}
                />
              </div>
            }
          />
        </div>
      ))}
    </Masonry>
  )
}

export default MasonryComp