import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Divider, Grid, TextField, IconButton } from '@material-ui/core'
import { lighten, makeStyles } from '@material-ui/core/styles'

import TablePagination from '@material-ui/core/TablePagination'

import Paper from '@material-ui/core/Paper'
import '../style/table.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import VisibilityIcon from '@material-ui/icons/Visibility'
import CreateIcon from '@material-ui/icons/Create'
import { Form, Button, Row, Col } from 'react-bootstrap'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addUser,
  resetUserState,
  viewUserAction,
  editUserAction,
} from 'src/Redux/Actions/user.action'
import { Redirect, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { convertBase64 } from '../../helper/base64Converter'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

export default function AddBusiness() {
  const user = useSelector((state) => state.user)
  const history = useHistory()
  const [addForm, setAddForm] = useState(true)
  const [firstName, setFirstName] = useState()
  const [image, setImage] = useState()
  const [lastName, setLastName] = useState()
  const [redirectTo, setRedirectTo] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [mobileNumber, setMobileNumber] = useState()
  const [address, setAddress] = useState()
  const classes = useStyles()
  const url = window.location.href
  const getLastItem = (thePath) => thePath.substring(thePath.lastIndexOf('/') + 1)
  const uploadImage = async (e) => {
    console.log(e.target.files)
    const file = e.target.files[0]
    console.log(file)
    const base64 = await convertBase64(file)
    console.log(base64, 'bsae')
    setImage(base64)
  }

  const dispatch = useDispatch()
  const addUserFuncOnSubmit = () => {
    const user = {
      // business_title,
      // business_Name,
      // business_email,
      // business_category,
      // address,
      // business_description,
      // business_contect_numbe,
    }
    if (addForm) {
      user.password = password
      dispatch(addUser(user))
    } else {
      alert(true)
    }
  }
  const editUserFuncOnSubmit = () => {
    alert('edit')
    const editUser = {
      firstName,
      lastName,
      id: localStorage.getItem(`UserEditId`),
      email,
      mobileNumber,
      address,
    }
    dispatch(editUserAction(editUser))
  }
  const submitfunc = (e) => {
    e.preventDefault()
    if (addForm) {
      addUserFuncOnSubmit()
    } else {
      editUserFuncOnSubmit()
    }
  }

  const setValueFunc = () => {
    setFirstName(user.getUserInfo.firstName)
    setLastName(user.getUserInfo.lastName)
    setEmail(user.getUserInfo.email)
    setMobileNumber(user.getUserInfo.mobileNumber)
  }
  useEffect(() => {
    if (url.substring(url.lastIndexOf('/') + 1) == `EditUser`) {
      setValueFunc()
    }
  }, [user.getUserInfo])
  useEffect(() => {
    if (url.substring(url.lastIndexOf('/') + 1) == `EditUser`) {
      setAddForm(false)
      dispatch(viewUserAction(localStorage.getItem(`UserEditId`)))
    }
  }, [])
  useEffect(() => {
    console.log('user', user)
    if (user.message) {
      setRedirectTo(true)
    }
    if (user.error) {
      alert(user.error)
    }
  }, [user])
  if (redirectTo) {
    dispatch(resetUserState())
    history.push('/User/UserList')
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Form style={{ paddingLeft: '50px', paddingRight: '50px' }} onSubmit={submitfunc}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div style={{ display: 'flex' }}>
                <h4 style={{ color: 'grey', paddingLeft: '10px', width: '50%' }}>
                  {addForm ? `Add Business` : `Edit Business`}
                </h4>
                <div style={{ textAlign: 'right', width: '50%', paddingRight: '10px' }}>
                  <Button
                    variant="success"
                    onClick={() => {
                      history.push('/User/UserList')
                    }}
                  >
                    <ArrowBackIcon />
                    Back
                  </Button>
                </div>
              </div>
              <br></br>
              <Divider />
              <div style={{ width: '90%', textAlign: 'right' }}>
                {/* <TextField style={{ paddingRight: '10px' }} id="standard-basic" label="Search" /> */}
              </div>
            </Grid>
            <Grid item xs={12}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label style={{ color: '#4153a4' }}>First Name</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: '#eeeff7' }}
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label style={{ color: '#4153a4' }}>Last Name</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: '#eeeff7' }}
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label style={{ color: '#4153a4' }}>Email</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: '#eeeff7' }}
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                {addForm ? (
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label style={{ color: '#4153a4' }}>Password</Form.Label>
                    <Form.Control
                      style={{ backgroundColor: '#eeeff7' }}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  ``
                )}
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{ color: '#4153a4' }}>Address</Form.Label>
                <Form.Control
                  style={{ backgroundColor: '#eeeff7' }}
                  placeholder="1234 Main St"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: '#4153a4' }}>MobileNumber</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: '#eeeff7' }}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label style={{ color: '#4153a4' }}>Role</Form.Label>
                  <Form.Select style={{ backgroundColor: '#eeeff7' }} defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                    <option>admin</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              {addForm ? (
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formFile" className="mb-3">
                    <Form.Label style={{ color: '#4153a4' }}>Upload Identity Proof</Form.Label>
                    <Form.Control
                      style={{ backgroundColor: '#eeeff7' }}
                      type="file"
                      onChange={(e) => {
                        uploadImage(e)
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formFile" className="mb-3">
                    <img
                      style={{ border: '1px solid red', borderRadius: '4%' }}
                      src={image}
                      height="100px"
                      width="100px"
                    />
                  </Form.Group>
                </Row>
              ) : (
                ``
              )}
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="danger" style={{ margin: '10px' }}>
                  clear
                </Button>
                <Button variant="success" type="submit" style={{ margin: '10px' }}>
                  {addForm ? `create` : `update`}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </div>
  )
}
