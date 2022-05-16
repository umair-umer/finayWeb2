import React from 'react'
import { Button, Box, Divider, Typography, Grid } from '@mui/material'
import CutomCartCard from '../component/CartsCard'
import { useStyles } from '../constant/customStyle'
import imageAuthor from '../assets/author.png'

const TabComponentCarts = ({ modalState }) => {
  const classes = useStyles()
  const onClose = () => {
    console.log('on Close')
    modalState(false)
  }
  return (
    <Grid container spacing={2} sx={{ marginTop: 1 }}>
      {Array.from({ length: 3 }).map((item, index) => (
        <Grid item xs={12} md={12} key={index}>
          <CutomCartCard image={imageAuthor} author={'Author'} description={'Mountain Landscape'} />
        </Grid>
      ))}
      <Grid item xs={12} md={12}>
        <Box sx={{ marginTop: 10 }}>
          <Divider sx={{ background: '#FFFFFF', height: 1, }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box display={'flex'} justifyContent={'space-between'} sx={{ marginTop: 3 }} >
          <Typography className={classes.dilogLabel}>Total</Typography>
          <Typography className={classes.dilogLabel}>$ 8.52</Typography>
        </Box>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={4} md={4}>
          <Button variant="contained" size="large" className={classes.checkButton}>Checkout </Button>
        </Grid>
        {/* <Grid item xs={4} md={4}>
          <Button variant="text" className={classes.closeButton} onClick={onClose}>Close</Button>
        </Grid> */}
      </Grid>
      {/* <Box sx={{ marginBottom: 3, marginTop: 5 }}>
        <Button variant="contained" size="large" className={classes.checkButton}>Check</Button>
        <Button variant="text" className={classes.closeButton} sx={{ marginLeft: 5 }} onClick={onClose}>Close</Button>
      </Box> */}
    </Grid>
  )
}
export default TabComponentCarts
