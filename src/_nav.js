import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'
import ImageIcon from '@material-ui/icons/Image'

const _nav = [
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'User',
    to: '/to',
    icon: <CIcon name="cil-user" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Add User',
        to: '/User/AddUser',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'User List',
        to: '/User/UserList',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Post',
    to: '/to',
    icon: <CIcon name="cil-user" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Add Post',
        to: '/Post/AddPost',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Post List',
        to: '/Post/PostList',
      },
    ],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Acheivemnts',
    to: '/Achievemtns',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Business',
    to: '/to',
    icon: <CIcon name="cil-user" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Add Business',
        to: '/business/Addbusiness',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Business List',
        to: '/business',
      },
    ],
  },
]

export default _nav
