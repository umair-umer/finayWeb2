import React from 'react'
import { Button, Box, Divider, Typography, Grid } from '@mui/material'
import Party from '../../assets/party.png'


const UpcomingEventsComponents = ({ name, price, country }) => {
    return (
        <Box>
            <img src={Party} alt='' />
            <Typography sx={{ fontFamily: 'inter', fontSize: '14px', fontWeight: 500, color: '#fff' }}>Event : {name} : {country}</Typography>
            <Typography sx={{ fontFamily: 'inter', fontSize: '14px', fontWeight: 500, color: '#fff' }}>${price}</Typography>
        </Box>
    )
}

export default UpcomingEventsComponents;
