import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { AppBreadcrumb } from './index'

import { AppHeaderDropdown } from './header/index'
import { IconButton } from '@material-ui/core'
import { signout } from 'src/Redux/Actions'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const logout = () => {
    dispatch(signout())
  }

  return (
    <CHeader position="sticky" className="mb-4 text-right">
      <CContainer fluid>
        <CHeaderToggler
          className="ms-md-3 d-lg-none"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon name="cil-menu" size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon name="logo" height="48" alt="Logo" />
        </CHeaderBrand>
        {/* <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem>
        </CHeaderNav> */}
        {/* <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon name="cil-bell" size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon name="cil-list" size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon name="cil-envelope-open" size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav> */}
        <CHeaderNav className="ms-3 text-right">{/* <AppHeaderDropdown /> */}</CHeaderNav>
        <p style={{ textAlign: 'Right' }}>
          hii..<b>VeerPatel</b>
          <AccountBoxIcon style={{ color: 'gray', fontSize: 40 }} />
          <IconButton>
            <ExitToAppIcon onClick={logout} />
          </IconButton>
        </p>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid> */}
      {/* <AppBreadcrumb /> */}
      {/* </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
