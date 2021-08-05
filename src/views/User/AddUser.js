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

export default function AddUser() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ display: 'flex' }}>
              <h4 style={{ color: 'grey', paddingLeft: '10px', width: '50%' }}>Create User</h4>
              <div style={{ textAlign: 'right', width: '50%', paddingRight: '10px' }}>
                <Button variant="success">
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
            <Form style={{ paddingLeft: '50px', paddingRight: '50px' }}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label style={{ color: '#4153a4' }}>First Name</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: '#eeeff7' }}
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label style={{ color: '#4153a4' }}>Last Name</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: '#eeeff7' }}
                    type="text"
                    placeholder="Last Name"
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
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label style={{ color: '#4153a4' }}>Password</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: '#eeeff7' }}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{ color: '#4153a4' }}>Address</Form.Label>
                <Form.Control style={{ backgroundColor: '#eeeff7' }} placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label style={{ color: '#4153a4' }}>Address 2</Form.Label>
                <Form.Control
                  style={{ backgroundColor: '#eeeff7' }}
                  placeholder="Apartment, studio, or floor"
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: '#4153a4' }}>MobileNumber</Form.Label>
                  <Form.Control style={{ backgroundColor: '#eeeff7' }} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label style={{ color: '#4153a4' }}>Role</Form.Label>
                  <Form.Select style={{ backgroundColor: '#eeeff7' }} defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                    <option>admin</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formFile" className="mb-3">
                  <Form.Label style={{ color: '#4153a4' }}>Upload Identity Proof</Form.Label>
                  <Form.Control style={{ backgroundColor: '#eeeff7' }} type="file" />
                </Form.Group>
                {/* <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label style={{ color: '#4153a4' }}>Zip</Form.Label>
                  <Form.Control /> */}
                {/* </Form.Group> */}
              </Row>
            </Form>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="danger" style={{ margin: '10px' }}>
                clear
              </Button>
              <Button variant="success" style={{ margin: '10px' }}>
                Create
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
