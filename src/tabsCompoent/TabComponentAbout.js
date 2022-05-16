import React from 'react'
import { Box, Typography, IconButton, Button } from '@mui/material'
import { useStyles } from '../constant/customStyle'
import EditIcon from '@mui/icons-material/Edit'
import UpcomingEvents from '../component/UpcomingEvents'
import Carousel, { consts } from 'react-elastic-carousel'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'



const TabComponentAbout = () => {
    const classes = useStyles()

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2 }
    ]

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <KeyboardArrowLeftIcon sx={{ color: '#FF1C51', fontSize: '36px' }} /> : <KeyboardArrowRightIcon sx={{ color: '#FF1C51', fontSize: '36px' }} />
        return (
            <Button onClick={onClick} disabled={isEdge} sx={{ minWidth: '20px', padding: 0 }}>
                {pointer}
            </Button>
        )
    }
    return (
        <Box sx={{ borderRadius: '15px', backgroundColor: '#7070704a', paddingBottom: '60px' }}>
            <Box sx={{ padding: '31px 36px' }}>
                <Box display={'flex'} sx={{ borderBottom: '2px solid #FF1C51', paddingBottom: '5.5px', width: '70%', marginBottom: '13px' }}>
                    <Typography sx={{ fontFamily: 'GlacialIndifferenceRegular', fontSize: '20px', fontWeight: '600', marginRight: '10px', marginRight: '10px' }}>Bio</Typography>
                    <IconButton>
                        <EditIcon className={classes.editIconProfile} />
                    </IconButton>
                </Box>
                <Box display={'flex'} sx={{ marginBottom: '28px' }}>
                    <Typography sx={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
                </Box>
                <Box display={'flex'} sx={{ borderBottom: '2px solid #FF1C51', paddingBottom: '5.5px', width: '70%', marginBottom: '13px' }}>
                    <Typography sx={{ fontFamily: 'GlacialIndifferenceRegular', fontSize: '20px', fontWeight: '600', marginRight: '10px' }}>Experience</Typography>
                    <IconButton>
                        <EditIcon className={classes.editIconProfile} />
                    </IconButton>
                </Box>
                <Box display={'flex'} sx={{ marginBottom: '28px' }}>
                    <Typography sx={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Box>
                <Box display={'flex'} sx={{ borderBottom: '2px solid #FF1C51', paddingBottom: '5.5px', width: '70%', marginBottom: '13px' }}>
                    <Typography sx={{ fontFamily: 'GlacialIndifferenceRegular', fontSize: '20px', fontWeight: '600', marginRight: '10px' }}>Education</Typography>
                    <IconButton>
                        <EditIcon className={classes.editIconProfile} />
                    </IconButton>
                </Box>
                <Box display={'flex'} sx={{ marginBottom: '28px' }}>
                    <Typography sx={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
                </Box>
                <Box display={'flex'} sx={{ borderBottom: '2px solid #FF1C51', paddingBottom: '5.5px', width: '70%', marginBottom: '13px' }}>
                    <Typography sx={{ fontFamily: 'GlacialIndifferenceRegular', fontSize: '20px', fontWeight: '600', marginRight: '10px' }}>Contact</Typography>
                    <IconButton>
                        <EditIcon className={classes.editIconProfile} />
                    </IconButton>
                </Box>
                <Box display={'flex'} sx={{ marginBottom: '28px' }}>
                    <Typography sx={{ fontFamily: 'inter', fontSize: '14px', fontWeight: '400' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} marginBottom={2}>
                    <Box display={'flex'} sx={{ borderBottom: '2px solid #FF1C51', paddingBottom: '5.5px', width: '70%', marginBottom: '13px' }}>
                        <Typography sx={{ fontFamily: 'GlacialIndifferenceRegular', fontSize: '20px', fontWeight: '600', marginRight: '10px' }}>Upcoming events</Typography>
                        <IconButton>
                            <EditIcon className={classes.editIconProfile} />
                        </IconButton>
                    </Box>
                    {/* <Box sx={{ width: '30%', marginBottom: '13px', display: 'flex', alignItems: 'center', marginBottom: '-25px' }}>
                        <IconButton sx={{padding:'0px'}}>
                            <Button className={classes.advanceSettingBtn} >Advanced Setting</Button>
                        </IconButton>
                    </Box> */}
                </Box>
            </Box>
            <Box sx={{ padding: '0px 20px' }}>
                <Carousel itemsToScroll={1} enableMouseSwipe={false} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints} outerSpacing={-10}
                    onResize={currentBreakPoint => console.log(currentBreakPoint)} pagination={false}>
                    {Array.from({ length: 4 }).map((item, index) => (
                        <UpcomingEvents name={'Concert Location'} country={'UK'} price={15} />
                    ))}
                </Carousel>
            </Box>
        </Box>
    )
}

export default TabComponentAbout;
