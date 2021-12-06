import '../style/table.css'

import { Button, Col, Form, Row } from 'react-bootstrap'
import { Divider, Grid, IconButton, TextField } from '@material-ui/core'
import { Redirect, useHistory } from 'react-router-dom'
import {
  addUser,
  editUserAction,
  resetUserState,
  viewUserAction,
} from 'src/Redux/Actions/user.action'
import { lighten, makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CreateIcon from '@material-ui/icons/Create'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import TablePagination from '@material-ui/core/TablePagination'
import VisibilityIcon from '@material-ui/icons/Visibility'
import clsx from 'clsx'
import { convertBase64 } from '../../helper/base64Converter'
import { uploadIcardAPI } from 'src/api'
import { useEffect } from 'react'
import { useState } from 'react'

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

export default function UploadIcard() {
  const user = useSelector((state) => state.user)
  const classes = useStyles()
  const history = useHistory()

  const [iCardImage, setiCardImage] = useState()
  const [icard_id, setIcard_id] = useState()
  const url = window.location.href
  const getLastItem = (thePath) => thePath.substring(thePath.lastIndexOf('/') + 1)
  const uploadImage = async (e) => {
    console.log(e.target.files)
    const file = e.target.files[0]
    console.log(file)
    const base64 = await convertBase64(file)
    console.log(base64, 'bsae')
    setiCardImage(base64)
  }

  const dispatch = useDispatch()
  const icardFuncOnSubmit = async () => {
    const userIcardObj = {
      id: localStorage.getItem('userIdForIcard'),
      iCardImage,
      icard_id,
    }
    console.log('userIcardObj::', userIcardObj)
    try {
      const res = await uploadIcardAPI(userIcardObj)
      if (res.status == 200 && res.data.success == true) return history.push('/User/UserList')
      else return alert('somthing failed')
    } catch (error) {
      console.log(error)
    }
  }

  const submitfunc = (e) => {
    e.preventDefault()

    icardFuncOnSubmit()
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Form style={{ paddingLeft: '50px', paddingRight: '50px' }} onSubmit={submitfunc}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div style={{ display: 'flex' }}>
                <h4 style={{ color: 'grey', paddingLeft: '10px', width: '50%' }}>Upload Icard</h4>
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
                  <Form.Label style={{ color: '#4153a4' }}>Icard Number</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: '#eeeff7' }}
                    type="text"
                    placeholder="First Name"
                    value={icard_id}
                    onChange={(e) => setIcard_id(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-12">
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
              </Row>
              <Row className="mb-12">
                <Form.Group as={Col} controlId="formFile" className="mb-3">
                  <img
                    style={{ border: '1px solid red', borderRadius: '4%' }}
                    src={iCardImage}
                    height="400px"
                    width="400px"
                  />
                </Form.Group>
              </Row>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="danger" style={{ margin: '10px' }}>
                  clear
                </Button>
                <Button variant="success" type="submit" style={{ margin: '10px' }}>
                  Upload
                </Button>
              </div>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </div>
  )
}
