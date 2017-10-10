import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

const SideBarItem = ({ isExact, linkTo, key, primaryText, onClick }) => {
  return (
    <NavLink
      activeClassName='active'
      exact={isExact}
      to={linkTo}
      key={key}
    >
      <ListItem
        primaryText={primaryText}
        onTouchTap={onClick}
        hoverColor='#eee'
      />
    </NavLink>
  )
}

export default SideBarItem
