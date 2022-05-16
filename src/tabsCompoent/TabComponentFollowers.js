import React from 'react';
import { Box, Typography, Divider } from '@mui/material'
import Profile from '../assets/profile.png'
import { useStyles } from '../constant/customStyle'

const TabComponentFollowers = () => {
    const classes = useStyles()

    return (
        <Box className={classes.tabFeedBox}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {Array.from({ length: 7 }).map((item, index) => (
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '150px', alignItems: 'center', marginBottom: '30px' }}>
                        <Box sx={{ width: '104px', position: 'relative' }}>
                            <img src={Profile} alt='' className={classes.img} />
                            <Box className={classes.online1} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography className={classes.userName}>Black Glass</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ width: '8px', height: '8px', backgroundColor: '#FF1C51', borderRadius: '100%', marginRight: '5px' }}></Box>
                                <Typography sx={{ fontSize: '12px', fontFamily: 'poppins', color: '#FBF7F8', textTransform: 'capitalize' }}>1 new post</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

        </Box>
    )
}

export default TabComponentFollowers;
