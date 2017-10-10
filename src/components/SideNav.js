import _ from 'lodash'
import React, { Component } from 'react';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
import { List } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SideBarItem from './SideBarItem';
import fusLogo from '../img/fus-logo.svg';
import links from '../data/linksData';

class SideNav extends Component {
  state = { open: false }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <AppBar
          title={
            <Link to='/'>
              <img src={fusLogo} alt='Franciscan University Logo' />
            </Link>
          }
          className='app-bar'
          iconElementRight={
            <h1 className='hide-on-small-only'>Resource Center</h1>
          }
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
          style={{ backgroundColor: '#fff', color: '#21412a' }}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
            {_.map(links, ({ isExact, linkTo, text }, key) => {
              return (
                <SideBarItem
                  isExact={isExact}
                  linkTo={linkTo}
                  primaryText={text}
                  onClick={this.handleClose}
                  key={key}
                />
              );
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
