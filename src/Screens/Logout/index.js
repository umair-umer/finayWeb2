import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, InputBase, Badge, MenuItem, Menu, Drawer, List, Divider, ListItem, ListItemText, Grid, FormControl, Dialog, DialogContent } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import { styled, alpha } from '@mui/material/styles'
import Logo from '../../assets/logo.png'
import { useStyles } from '../../constant/customStyle'
import { Link } from 'react-router-dom'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { categoryData } from '../../constant/dropdown/category'
import CustomSubscriberCard from '../../component/Subscriber'
import profile from '../../assets/profile.png'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Carousel, { consts } from 'react-elastic-carousel'
import CloseIcon from '@mui/icons-material/Close'
import CustomOnSaleCard from '../../component/OnSaleCard';
import { useNavigate } from 'react-router-dom'
import { HiOutlineDotsVertical } from "react-icons/hi";
import Store from '../../assets/store.svg'
import User from '../../assets/user.svg'

function Logout() {
    const classes = useStyles()
    let navigate = useNavigate()
    const menuId = 'primary-search-account-menu'

    const handleProfileRoute = () => {
        navigate(`/profile`)
    }

    const handleRouteTerms = () => {
        navigate('/terms')
    }

    useEffect(() => {
        document.title = "Finay"
    }, [])

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#1D1D1D", color: 'transparent', boxShadow: '0px 5px 24px -20px #ff1c51' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: 'auto', display: 'flex' }}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} onClick={handleRouteTerms} >
                            <HiOutlineDotsVertical style={{ color: '#FF1C51' }} />
                        </IconButton>
                        <Box sx={{ width: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={handleProfileRoute}>
                            <img src={Logo} alt='' className={classes.img} />
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'space-between', marginRight: '20px' } }}>
                        {/* onClick={toggleDrawer('right', true)} */}
                        <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" color="inherit" >
                            <MenuIcon sx={{ fontSize: '35px', color: '#707070' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ padding: '205px 135px', display: 'flex', columnGap: '80px' }}>
                <Box sx={{ display: 'flex', width: '50%' }}>
                    <Box sx={{ paddingRight: '10px', width: '40%', paddingTop: '30px' }}>
                        <Typography sx={{ fontSize: '49px', fontWeight: '600', fontFamily: 'GlacialIndifferenceRegular', color: '#fff' }} comonent={'span'}>Let’s </Typography>
                        <Typography sx={{ fontSize: '38px', fontWeight: '600', fontFamily: 'GlacialIndifferenceRegular', color: '#fff' }} comonent={'span'}>take it </Typography>
                        <Typography sx={{ fontSize: '38px', fontWeight: '600', fontFamily: 'GlacialIndifferenceRegular', color: '#fff' }} comonent={'span'}>from the </Typography>
                        <Typography sx={{ fontSize: '49px', fontWeight: '600', fontFamily: 'GlacialIndifferenceRegular', color: '#fff' }} comonent={'span'}>TOP</Typography>
                    </Box>
                    <Box sx={{ borderLeft: '2px solid #FF1C51', paddingLeft: '40px', width: '60%', paddingTop: '30px' }}>
                        <Typography sx={{ fontSize: '46px', fontWeight: '600', fontFamily: 'GlacialIndifferenceRegular', color: '#fff' }}>Create Collaborate Curate</Typography>
                        <Typography sx={{ fontSize: '14px', fontFamily: 'inter', color: '#fff' }}>Get closer to the community that inspires you</Typography>
                        <Button variant="contained" sx={{
                            marginTop: '23px',
                            backgroundColor: '#FF1C51', padding: '5px 50px', borderRadius: '30px', fontFamily: 'GlacialIndifferenceRegular', textTransform: 'capitalize', fontSize: '20px', fontWeight: '500', boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                            },
                        }}>Signup</Button>
                    </Box>
                </Box>
                <Box sx={{ width: '50%' }}>
                    <video controls="true" style={{ width: '100%', height: '100%' }}>
                        <source src="www.youtube.com/watch?v=IEDEtZ4UVtI" type="video/mp4" />
                    </video>
                </Box>
            </Box>
        </>
    );
}

export default Logout;
