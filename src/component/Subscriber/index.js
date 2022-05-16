import React from 'react'
import { Box, Typography, IconButton, InputAdornment } from '@mui/material'
import { useStyles } from '../../constant/customStyle'

const CustomSubscriberCard = ({ name, image }) => {
    const classes = useStyles()

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <img src={image} alt='' width={103} height={103} />
            <Typography sx={{ fontSize: 20, fontWeight: 600, fontFamily: 'poppins', color: '#fff', marginTop: '8px' }}>{name}</Typography>
        </Box>
    )
}

export default CustomSubscriberCard