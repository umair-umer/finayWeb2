import React, { useState } from 'react';
import {Container, AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Drawer, Button, List, Divider, ListItem, ListItemText, Grid, FormControl, Dialog, DialogContent } from '@mui/material'
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
import { mediaData } from '../../constant/dropdown/category'
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

const pages = [
    {
        id: 1,
        name: 'Explore',
        link: 'Explore'
    },
    {
        id: 2,
        name: 'Community',
        link: 'community'
    },
    {
        id: 3,
        name: 'Create',
        link: 'create'
    }
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '25px',
    backgroundColor: '#fff',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    color: '#000',
    [theme.breakpoints.up('sm')]: {
        width: '100%',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        padding: '20px 10px 20px 20px',
        transition: theme.transitions.create('width'),
        // width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '90%',
        },
    },
}));

const SearchIconWrapper = styled('span')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%'
}));

const Header = ({ blur }) => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const [value, setValue] = useState("choose")
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
    ];

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    }

    let navigate = useNavigate()


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleClickOpen = () => {
        setOpen(true)
        blur(true)
    }

    const handleClose = () => {
        setOpen(false)
        blur(false)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleProfileRoute = () => {
        navigate(`/profile`)
    }

    const handleSettingRoute = () => {
        navigate(`/settings`)
    }

    const handleLogoutRoute = () => {
        navigate(`/logout`)
    }

    const handleRouteTerms = () => {
        navigate('/terms')
    }

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <KeyboardArrowLeftIcon sx={{ color: '#FF1C51', fontSize: '36px' }} /> : <KeyboardArrowRightIcon sx={{ color: '#FF1C51', fontSize: '36px' }} />
        return (
            <Button onClick={onClick} disabled={isEdge} sx={{ minWidth: '10px', padding: 0 }}>
                {pointer}
            </Button>
        )
    }

    const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose} >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // )

    const mobileMenuId = 'primary-search-account-menu-mobile';
    // const renderMobileMenu = (
    //     <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose} >
    //         <MenuItem>
    //             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
    //                 <Badge badgeContent={4} color="error">
    //                     <MailIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Messages</p>
    //         </MenuItem>
    //         <MenuItem>
    //             <IconButton size="large"  aria-label="show 17 new notifications" color="inherit" >
    //                 <Badge badgeContent={17} color="error">
    //                     <NotificationsIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Notifications</p>
    //         </MenuItem>
    //         <MenuItem onClick={handleProfileMenuOpen}>
    //             <IconButton size="large"  aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit" >
    //                 <AccountCircle />
    //             </IconButton>
    //             <p>Profile</p>
    //         </MenuItem>
    //     </Menu>
    // )

    const list = (anchor) => (
        <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" >
            <Box sx={{ padding: '10px 10px' }}>
                {/* <Search>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: '#8D8D8D' }} />
                        </SearchIconWrapper>
                    </Box>
                    <StyledInputBase placeholder="Search Collection" inputProps={{ 'aria-label': 'search' }} sx={{ paddingLeft: 0 }} />
                </Search> */}
            </Box>
            <List>
                {pages.map((page) => (
                    <ListItem button >
                        <Link to={`/${page.link}`} style={{ textDecoration: 'none' }}>
                            <ListItemText primary={<Typography sx={{ display: 'inline', fontSize: '20px', color: '#fff', textTransform: 'capitalize', fontFamily: 'poppins' }} component="span" variant="body2" color="text.primary" >
                                {page.name}
                            </Typography>} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1,position:'sticky',top:'0px',zIndex:'1' }} className={open ? classes.blur : ''}>
          
            <AppBar position="static" sx={{ backgroundColor: "#1D1D1D", color: 'transparent', boxShadow: '0px 5px 24px -20px #ff1c51' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: 'auto', display: 'flex' }}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer"  onClick={handleRouteTerms} >
                            <HiOutlineDotsVertical style={{ color: '#FF1C51',fontSize:'39px' }} />
                        </IconButton>
                        <Box sx={{ width: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={handleProfileRoute}>
                            <img src={Logo} alt='' className={classes.img} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '53%',borderBottom:'2px solid #FF1C51' }}>
                        <Search sx={{ backgroundColor :"transparent ", }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <SearchIconWrapper>
                                    <SearchIcon sx={{ color: '#FF1C51' }} />
                                </SearchIconWrapper>
                            </Box>
                            <StyledInputBase placeholder="Search Collection" inputProps={{ 'aria-label': 'search' }} sx={{ width: '100%',color:"#FFFFFF "}} />
                        </Search>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex', width: '18%', justifyContent: 'space-between',marginRight:'5%' } }}>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit" sx={{padding:'0px'}}>
                            {/* <Badge badgeContent={17} color="error"> */}
                            <NotificationsIcon className={classes.img} sx={{ color: '#FF1C51', fontSize: '43px;' }} />
                            {/* </Badge> */}
                        </IconButton>
                        <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleClickOpen} color="inherit" >
                            <Box sx={{ width: '35.64px', height: '33.76px' }}>
                                <img src={Store} alt={''} className={classes.img} />
                            </Box>
                        </IconButton>
                        <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleMenu} color="inherit" >
                            <Box sx={{ width: '31px', height: '31px' }}>
                                <img src={User} alt={''} className={classes.img} />
                            </Box>
                        </IconButton>
                        <IconButton sx={{marginLeft:'15px'}} size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={toggleDrawer('right', true)} color="inherit" >
                            <MenuIcon sx={{ fontSize: '35px', color: '#707070' }} />
                        </IconButton>
                        <Menu className={classes.menu} id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem onClick={handleProfileRoute}>Profile</MenuItem>
                            <MenuItem className="menuItem" onClick={handleSettingRoute}>Settings</MenuItem>
                            <MenuItem className="menuItem" onClick={handleLogoutRoute}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit" >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        
            {/* {renderMobileMenu}
            {renderMenu} */}
            {/* <Button onClick={toggleDrawer('right', true)}>DANIYAL</Button> */}
            <Drawer anchor={'right'} open={state['right']} classes={{ paper: classes.drawerPaper }} onClose={toggleDrawer('right', false)} >
                {list('right')}
            </Drawer>

            <Dialog className='header-scroll' classes={{ paper: classes.paper }} open={open} maxWidth={'lg'} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth PaperProps={{ style: { borderRadius: 20, backgroundColor: '#1D1D1D', border: '2px solid #707070' } }}>
                <DialogContent>
                    <Grid container spacing={2} sx={{ padding: '0px 40px', marginBottom: 5 }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    sx={{ fontFamily: 'poppins', fontSize: '20px' }}
                                    inputProps={{ classes: { icon: classes.icon } }}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={value}
                                    onChange={handleChange}
                                    className='steper-select'
                                    sx={{
                                        background: 'transparent',
                                        border: '0px solid transparent !important',
                                        borderRadius: '10px !important',
                                        color: '#fff !important',
                                        fontSize: "20px !important",
                                        fontWeight: '500 !important',
                                        padding: '0px 5px',
                                        fontFamily: 'poppins',
                                        "&:hover": {
                                            "&& fieldset": {
                                                border: "0px solid transparent",
                                                padding: '0px 5px',
                                            }
                                        },
                                    }}
                                    MenuProps={{ classes: { paper: classes.select }, }}
                                >
                                  <MenuItem value={"choose"}>Choose Media Type</MenuItem>
                                    {mediaData.map((data, index) => {
                                        return (
                                            <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ marginBottom: 1, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography sx={{ fontFamily: 'poppins', color: '#fff', fontSize: 20, marginBottom: 0.5, fontWeight: 600 }}>Subscribers</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ marginTop: 1, marginBottom: 5, padding: '0px 20px' }}>
                        {Array.from({ length: 5 }).map((item, index) => (
                            <Grid item xs={4} sm={4} lg={2} md={2} sx={{ marginBottom: 1, }}>
                                <CustomSubscriberCard name={'Black Glass'} image={profile} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2} sx={{ marginBottom: 1, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography sx={{ fontFamily: 'poppins', color: '#fff', fontSize: 20, marginBottom: 0.5, fontWeight: 600 }}>On-Sale</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                        <Carousel itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints} itemPadding={[0, 20]} outerSpacing={-15}
                            onResize={currentBreakPoint => console.log(currentBreakPoint)} pagination={false}>
                            {Array.from({ length: 41 }).map((item, index) => (
                                <CustomOnSaleCard />
                            ))}
                        </Carousel>
                    </Box>
                    <Grid container spacing={2} sx={{ marginBottom: 1, marginTop: 5, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1, }}>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: '20px' }} />
                    <Grid container spacing={2} sx={{ marginBottom: 1, marginTop: 5, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography sx={{ fontFamily: 'poppins', color: '#fff', fontSize: 20, marginBottom: 0.5, fontWeight: 600 }}>Bidding</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                        <Carousel itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints} itemPadding={[0, 20]} outerSpacing={-15}
                            onResize={currentBreakPoint => console.log(currentBreakPoint)} renderPagination={({ pages, activePage, onClick }) => {
                                return (
                                    <Box direction="row">
                                        {pages.map(page => {
                                            const isActivePage = activePage === page
                                            return (
                                                <KeyboardArrowLeftIcon
                                                    key={page}
                                                    onClick={() => onClick(page)}
                                                    active={isActivePage}
                                                    sx={{ display: 'none' }}
                                                />
                                            )
                                        })}
                                    </Box>
                                )
                            }}>
                            {Array.from({ length: 41 }).map((item, index) => (
                                <CustomOnSaleCard />
                            ))}
                        </Carousel>
                    </Box>

                    <Grid container spacing={2} sx={{ marginBottom: 5, marginTop: 5, padding: '0px 40px' }}>
                        <Grid item xs={12} sm={12} lg={12} md={12} sx={{ marginBottom: 1, }}>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <IconButton className={classes.customizedButton}>
                    <CloseIcon fontSize={'large'} onClick={handleClose} />
                </IconButton>
            </Dialog>
        </Box>
      
    )
}

export default Header