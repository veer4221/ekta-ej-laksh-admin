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

export default function Achievement() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ display: 'flex' }}>
              <h4 style={{ color: 'grey', paddingLeft: '10px', width: '50%' }}>Achievement</h4>
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
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: '#4153a4' }}>Love-Jihad Case</Form.Label>
                  <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: '#4153a4' }}>Ghar Vapsi Case</Form.Label>
                  <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: '#4153a4' }}>Gau Raksh Case</Form.Label>
                  <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: '#4153a4' }}>Rojgar Case</Form.Label>
                  <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: '#4153a4' }}>GauSeva Case</Form.Label>
                  <Form.Control style={{ backgroundColor: '#eeeff7' }} type="number" />
                </Form.Group>
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
