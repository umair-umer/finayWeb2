import React from 'react'
import { Button, Box, Grid, IconButton } from '@mui/material'
import CustomWishListCard from '../component/WishListCard'
import { useStyles } from '../constant/customStyle'
import imageAuthor from '../assets/Rectangle12.png'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { CssButton } from '../component/Button'

const TabComponentWishList = ({ modalState }) => {
    const classes = useStyles()

    const onClose = () => {
        modalState(false)
    }

    return (
        <>
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
                {Array.from({ length: 4 }).map((item, index) => (
                    <Grid item xs={12} md={3} key={index}>
                        <CustomWishListCard author='Author' description='Mountain Landscape' image={imageAuthor} />
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={{ marginTop: 2 }}>
                            <CssButton sx={{width:'115px',height:'45px'}} variant="contained" className={classes.bidButton}> Bid Now </CssButton>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <DeleteOutlineIcon sx={{ color: '#FF1C51' }} />
                            </IconButton>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ marginBottom: 5, marginTop: 5 }}>
                <Button variant="text" className={classes.closeButton} onClick={onClose}>Close</Button>
            </Box>
        </>
    )
}

export default TabComponentWishList