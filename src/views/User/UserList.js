import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Divider, Grid, TextField, IconButton, Button } from '@material-ui/core'
import { lighten, makeStyles } from '@material-ui/core/styles'

import TablePagination from '@material-ui/core/TablePagination'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import Paper from '@material-ui/core/Paper'
import Pagination from '@material-ui/lab/Pagination'
import '../style/table.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import VisibilityIcon from '@material-ui/icons/Visibility'
import CreateIcon from '@material-ui/icons/Create'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAction, getUserListAction, resetUserState } from 'src/Redux/Actions'
import { DeleteAlert } from '../../sweetAlerts/alerts'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'

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
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const [page, setPage] = React.useState(1)

  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const [open, setOpen] = React.useState(false)

  const [count, setCount] = React.useState()
  const [reloadAgain, setReloadAgain] = React.useState(new Date())
  const [userRows, setUserRows] = React.useState()
  const [keyword, setKeyword] = React.useState('')

  const handleChange = (event) => {
    setRowsPerPage(event.target.value)
    setPage(1)
  }
  const removeUserFunc = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire('Deleted!', `user is deleted`, 'success')
          dispatch(deleteUserAction(id))
          dispatch(resetUserState())
          setReloadAgain(new Date())
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Cancelled', `User Not Deleted`, 'error')
        }
      })

    //
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    console.log(user.getAllProduct)
    setCount(Math.floor(user.getAllProduct.count / rowsPerPage + 1))
    setUserRows(user.getAllProduct.rows)
  }, [user.getAllProduct])
  useEffect(() => {
    dispatch(getUserListAction(page, rowsPerPage, keyword))
  }, [page, rowsPerPage, keyword, reloadAgain])
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div style={{ display: 'flex' }}>
              <h4 style={{ color: 'grey', paddingLeft: '10px', width: '50%' }}>User List</h4>
              <div style={{ textAlign: 'right', width: '50%', paddingRight: '10px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log(`clicked`)
                    history.push(`/User/AddUser`)
                  }}
                >
                  Create User
                </Button>
              </div>
            </div>
            <br></br>
            <Divider />
            <div style={{ width: '90%', textAlign: 'right' }}>
              <TextField
                style={{ paddingRight: '10px' }}
                id="standard-basic"
                label="Search"
                onChange={(e) => setKeyword(e.target.value)}
              />
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
                      Name
                    </th>
                    <th style={{ textAlign: 'center' }} width="20%">
                      Email
                    </th>
                    <th style={{ textAlign: 'center' }} width="20%">
                      Mobile
                    </th>
                    <th style={{ textAlign: 'center' }} width="20%">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userRows &&
                    userRows.slice(0, rowsPerPage).map((data, index) => {
                      return (
                        <>
                          <tr key={`${index}`}>
                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                            <td>
                              {data.firstname}&nbsp; {data.lastname}
                            </td>
                            <td>{data.email}</td>
                            <td>{data.mobileNumber}</td>
                            <td>
                              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <IconButton
                                  onClick={(e) => {
                                    localStorage.setItem('UserViewId', data.id)
                                    history.push('/User/ViewUser')
                                  }}
                                >
                                  <VisibilityIcon style={{ color: 'black' }} />
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    localStorage.setItem('UserEditId', data.id)
                                    history.push('/User/EditUser')
                                  }}
                                >
                                  <CreateIcon style={{ color: 'blue' }} />
                                </IconButton>
                                <IconButton onClick={(e) => removeUserFunc(data.id)}>
                                  <DeleteForeverIcon style={{ color: 'red' }} />
                                </IconButton>
                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </Grid>
          <Grid item xs={6} m={1} p={2} style={{ margin: '10px' }}>
            <FormControl
              style={{ minWidth: 250, marginBottom: '15px' }}
              className={classes.formControl}
            >
              <InputLabel id="demo-controlled-open-select-label">Limit</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={rowsPerPage}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
              </Select>
            </FormControl>
            <Pagination
              count={count}
              variant="outlined"
              color="primary"
              shape="rounded"
              onChange={(e, value) => setPage(value)}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
