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
import { viewUserAction, resetUserState, viewPostAction } from 'src/Redux/Actions'

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

const ViewPost = () => {
  const history = useHistory()
  const user = useSelector((state) => state.user)
  const post = useSelector((state) => state.post)
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const viewDealId = localStorage.getItem('PostViewId')
  const backToList = () => {
    window.localStorage.removeItem('viewDealId')
  }
  useEffect(() => {
    setData(post.getPostInfo)
  }, [post.getPostInfo])
  useEffect(() => {
    dispatch(viewPostAction(localStorage.getItem(`PostViewId`)))
  }, [])

  return (
    <>
      <Box pt={{ xs: 2, sm: 3, md: 4 }} px={{ xs: 2, sm: 3, md: 4 }}>
        <Box sx={{ mt: '10px' }}>
          <Typography color="textPrimary" variant="h5">
            View Post Information
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
                  history.push('/Post/PostList')
                }}
              >
                <ArrowBackIcon /> Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <hr></hr>
              <h3 style={{ textAlign: 'center' }}>Post Image</h3>
              <hr></hr>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
            >
              <img
                src={`https://ekta-ej-laksh-image.s3.us-east-2.amazonaws.com/${data && data.image}`}
                alt="doc image"
                width="400px"
                height="400px"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <hr></hr>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: 600, borderBottom: 'none', breakWord: 'break-word' }}
                      width="45%"
                    >
                      Post Title:
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', color: 'gray' }}
                      width="45%"
                    >
                      {data && data.title}
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Grid>

            <Grid item xs={12} sm={12}>
              <hr></hr>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', fontWeight: 600 }}
                      width="45%"
                    >
                      Post Content
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: 'none', breakWord: 'break-word', color: 'gray' }}
                      width="45%"
                    >
                      {data && data.content}
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

export default ViewPost
