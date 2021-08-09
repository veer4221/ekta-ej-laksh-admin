import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Box,
  Typography,
  Card,
  Table,
  TableHead,
  Button,
  TableRow,
  TableCell,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { viewUserAction, resetUserState } from 'src/Redux/Actions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

const ViewUser = () => {
  const history = useHistory()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const viewDealId = localStorage.getItem('viewDealId')
  const backToList = () => {
    window.localStorage.removeItem('viewDealId')
  }
  useEffect(() => {
    setData(user.getUserInfo)
  }, [user.getUserInfo])
  useEffect(() => {
    dispatch(viewUserAction(localStorage.getItem(`UserViewId`)))
  }, [])

  return (
    <>
      <Box pt={{ xs: 2, sm: 3, md: 4 }} px={{ xs: 2, sm: 3, md: 4 }}>
        <Box sx={{ mt: '10px' }}>
          <Typography color="textPrimary" variant="h5">
            View User Information
          </Typography>
        </Box>
      </Box>
      <Box p={{ xs: 2, sm: 3, md: 4 }}>
        <Card>
          <Grid container spacing={0} p={{ xs: 2, sm: 3, md: 4 }}>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                margin: '10px',
              }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: 'green', color: 'white' }}
                onClick={() => {
                  history.push('/User/UserList')
                }}
              >
                <ArrowBackIcon /> Back
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: 600, borderBottom: 'none', breakWord: 'break-word' }}
                      width="45%"
                    >
                      User First Name:
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', color: 'gray' }}
                      width="45%"
                    >
                      {data && data.firstName}
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', fontWeight: 600 }}
                      width="45%"
                    >
                      User Last Name:
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', color: 'gray' }}
                      width="45%"
                    >
                      {data && data.lastName}
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', fontWeight: 600 }}
                      width="45%"
                    >
                      Email:
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', color: 'gray' }}
                      width="45%"
                    >
                      {data && data.email}
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', fontWeight: 600 }}
                      width="45%"
                    >
                      MobileNumber:
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', color: 'gray' }}
                      width="45%"
                    >
                      {data && data.mobileNumber}
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', fontWeight: 600 }}
                      width="25%"
                    >
                      address
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', color: 'gray' }}
                      width="75%"
                    >
                      hmt ,idar ,sabarkantha ,etc,asdasd .,asd 383120
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', fontWeight: 600 }}
                      width="45%"
                    >
                      Role:
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', color: 'gray' }}
                      width="45%"
                    >
                      Admin
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  )
}

export default ViewUser
