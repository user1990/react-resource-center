import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon'
import { GenericCard } from './../components/GenericCard';
import '../styles/logos.scss';
import { logos } from '../data/logoData';

class Logos extends Component {
  state = {
    activeTab: 'all',
    data: logos,
    type: 'all',
  }
  render() {
    const { activeTab } = this.state;
    const tabs = {
      all: 'All',
      alumni: 'Alumni',
      text: 'Text',
      athletics: 'Athletics',
      video: 'Video',
      austrian: 'Austrian',
      conference: 'Conference',
      franciscan: 'Franciscan',
      grad: 'Grad School',
      iheart: 'IHeart',
      online: 'Online',
      pilgrimages: 'Pilgrimages',
      press: 'Press',
      seal: 'Seal',
      yom: 'Year of Mercy',
    };

    const DownloadIcon = props => 
      <SvgIcon {...props}>
        <path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' />
        <path d='M0 0h24v24H0z' fill='none' />
      </SvgIcon>

    const massonryComp = (
      <Masonry>
        {this.state.data
          .filter(logo => activeTab === 'all' || activeTab === logo.category)
          .map((logo, i) =>
            (<div className='col s12 m6 l4 xl3' key={i}>
              <GenericCard
                mediaImgSrc={`https://myfranciscan.franciscan.edu/ICS/clientconfig/customcontent/marcom/MarComTab/${logo.thumbnailUrl}`}
                actions={
                  <div>
                    <FlatButton 
                      label={
                        <span>
                          <DownloadIcon color='#ffb41f' />JPG
                        </span>
                      } 
                    />
                    <FlatButton 
                      label={
                        <span>
                          <DownloadIcon color='#ffb41f' />PSD
                        </span>
                      } 
                    />
                  </div>
                }
              />
            </div>)
          )}
      </Masonry>
    );
    
    return (
      <div>
        <div className='row'>
          <div className='col s12'>
            <ul className='tabs'>
              {Object.keys(tabs).map(tabKey =>
                (
                  <li className='tab' key={`${tabKey}'li'`}>
                    <a
                      key={tabKey}
                      href={`'#'${tabKey}`}
                      className={tabKey === activeTab && 'active'}
                      onClick={() => this.setState({ activeTab: tabKey })}>
                      {tabs[tabKey]}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        {/* For each tab, we generate a row */}
        {Object.keys(tabs).map(tabKey =>
          (<div className='row' id={tabKey} key={tabKey}>
            {/* We render masonry comp only if we are in current active tab key */}
            {activeTab === tabKey && massonryComp}
          </div>)
        )}
      </div>
    );
  }
}

export default Logos;
