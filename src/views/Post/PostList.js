import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Divider, Grid, TextField, IconButton, Button } from '@material-ui/core'
import { lighten, makeStyles } from '@material-ui/core/styles'

import TablePagination from '@material-ui/core/TablePagination'

import Paper from '@material-ui/core/Paper'
import '../style/table.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import VisibilityIcon from '@material-ui/icons/Visibility'
import CreateIcon from '@material-ui/icons/Create'

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

export default function PostList() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)

  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ display: 'flex' }}>
              <h4 style={{ color: 'grey', paddingLeft: '10px', width: '50%' }}>Post List</h4>
              <div style={{ textAlign: 'right', width: '50%', paddingRight: '10px' }}>
                <Button variant="contained" color="primary">
                  AddPost
                </Button>
              </div>
            </div>
            <br></br>
            <Divider />
            <div style={{ width: '90%', textAlign: 'right' }}>
              <TextField style={{ paddingRight: '10px' }} id="standard-basic" label="Search" />
            </div>
          </Grid>
          <Grid item xs={12} m={1} p={2}>
            <div style={{ padding: '15px' }}>
              <table className="GeneratedTable ">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'center' }} width="10%">
                      #
                    </th>
                    <th style={{ textAlign: 'center' }} width="30%">
                      Titel
                    </th>
                    <th style={{ textAlign: 'center' }} width="40%">
                      Content
                    </th>
                    <th style={{ textAlign: 'center' }} width="20%">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>
                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <IconButton>
                          <VisibilityIcon style={{ color: 'black' }} />
                        </IconButton>
                        <IconButton>
                          <CreateIcon style={{ color: 'blue' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteForeverIcon style={{ color: 'red' }} />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>2</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>
                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <IconButton>
                          <VisibilityIcon style={{ color: 'black' }} />
                        </IconButton>
                        <IconButton>
                          <CreateIcon style={{ color: 'blue' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteForeverIcon style={{ color: 'red' }} />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>
                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <IconButton>
                          <VisibilityIcon style={{ color: 'black' }} />
                        </IconButton>
                        <IconButton>
                          <CreateIcon style={{ color: 'blue' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteForeverIcon style={{ color: 'red' }} />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Grid>
        </Grid>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}
