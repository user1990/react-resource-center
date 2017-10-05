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
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title={
            <Link to='/'>
              <img src={fusLogo} alt='Franciscan University Logo' />
            </Link>
          }
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
            {map(links, ({ isExact, linkTo, text }, key) => (
              <SideBarItem
                isExact={isExact}
                linkTo={linkTo}
                primaryText={text}
                onClick={this.handleClose}
                key={key}
              />
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
