import React, { useState, useEffect } from 'react';
import { Button, Box, Container, Grid, Typography, FormControl, MenuItem, Divider, Dialog, DialogContent, IconButton, Slider } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { mediaData,sortingData } from '../../constant/dropdown/category'
import { useStyles } from '../../constant/customStyle'
import Carousel, { consts } from 'react-elastic-carousel'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Profile from '../../assets/profile.png'
import Accessicon from '../../assets/Access.svg'
import wishlisticon from '../../assets/Wishlist.svg'
import PlayList from "../../assets//palylist.png"
import ExplorerCustomOnSaleCard from '../../component/ExplorerCard'
import HeaderComponent from '../../component/Header'
import SongPlayer from '../../component/SongPlayer'
import ChatComponent from '../../component/Chat'
import CloseIcon from '@mui/icons-material/Close'
import WhiteList from '../../assets/whitelist.png'
import { BsPlayCircle, BsFillSuitHeartFill } from "react-icons/bs"
import AuthorImage from '../../assets/author-image.png'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Cart from '../../assets/cart-heart.png'
import profile from '../../assets/profile.png'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Group from "../../assets//Group 65.png"

const ExplorerScreen = () => {
    const classes = useStyles()
    const [value, setValue] = useState("choose")
    const [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [valueSlider, setValueSlider] = React.useState(30)
    const [sortValue, setSortValue] = useState("sort")


    const blurStatus = () => {
        setOpen(!open)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSortChange = (event) => {
        setSortValue(event.target.value)
    }



    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 5 }
    ]

    const breakPoints1 = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
    ]

    const handleModalOpen = () => {
        setModalOpen(true)
        setOpen(true)
    }

    const handleModalClose = () => {
        setModalOpen(false)
        setOpen(false)
    }

    const handleValueChange = (event, newValue) => {
        setValueSlider(newValue);
    }


    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <KeyboardArrowLeftIcon sx={{ color: '#FF1C51', fontSize: '36px' }} /> : <KeyboardArrowRightIcon sx={{ color: '#FF1C51', fontSize: '36px' }} />
        return (
            <Button onClick={onClick} disabled={isEdge} sx={{ minWidth: '10px', padding: 0 }}>
                {pointer}
            </Button>
        )
    }

    useEffect(() => {
        document.title = "Explorer | Finay"
    }, [])

    return (
        <Box sx={{ position: 'relative' }} className={open ? classes.blur : ''}>
            <HeaderComponent  style={{position:'fixed'}}/>
            <Container maxWidth="lg" className={classes.exploreContainer} sx={{ marginBottom: '150px' }} >
            <Grid container spacing={2} className={classes.exploreSpaceSelect}>
                        <Grid item xs={12} sm={12} lg={10} md={10}>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    sx={{ fontFamily: 'inter', fontSize: '20px' }}
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
                                        fontFamily: 'inter',
                                        "&:hover": {
                                            "&& fieldset": {
                                                border: "0px solid transparent",
                                                padding: '0px 5px',
                                            }
                                        },
                                    }}
                                    MenuProps={{ classes: { paper: classes.select }, }}
                                >
                                    <MenuItem value={"choose"} disabled>Choose Media Type</MenuItem>
                                    {mediaData.map((data, index) => {
                                        return (
                                            <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={2} md={2}>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    sx={{ fontFamily: 'inter', fontSize: '20px' }}
                                    inputProps={{ classes: { icon: classes.icon } }}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={sortValue}
                                    onChange={handleSortChange}
                                    className='steper-select'
                                    sx={{
                                        background: 'transparent',
                                        border: '0px solid transparent !important',
                                        borderRadius: '10px !important',
                                        color: '#fff !important',
                                        fontSize: "20px !important",
                                        fontWeight: '500 !important',
                                        padding: '0px 5px',
                                        fontFamily: 'inter',
                                        "&:hover": {
                                            "&& fieldset": {
                                                border: "0px solid transparent",
                                                padding: '0px 5px',
                                            }
                                        },
                                    }}
                                    MenuProps={{ classes: { paper: classes.select }, }}
                                >
                                    <MenuItem value={"sort"} disabled>Sort by:</MenuItem>
                                    {sortingData.map((data, index) => {
                                        return (
                                            <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                <Box className={classes.exploreBox}>
                    {/* <Grid container spacing={2} className={classes.exploreSpaceSelect}>
                        <Grid item xs={12} sm={12} lg={10} md={10}>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    sx={{ fontFamily: 'inter', fontSize: '20px' }}
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
                                        fontFamily: 'inter',
                                        "&:hover": {
                                            "&& fieldset": {
                                                border: "0px solid transparent",
                                                padding: '0px 5px',
                                            }
                                        },
                                    }}
                                    MenuProps={{ classes: { paper: classes.select }, }}
                                >
                                    <MenuItem value={"choose"} disabled>Choose Media Type</MenuItem>
                                    {mediaData.map((data, index) => {
                                        return (
                                            <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={2} md={2}>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    sx={{ fontFamily: 'inter', fontSize: '20px' }}
                                    inputProps={{ classes: { icon: classes.icon } }}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={sortValue}
                                    onChange={handleSortChange}
                                    className='steper-select'
                                    sx={{
                                        background: 'transparent',
                                        border: '0px solid transparent !important',
                                        borderRadius: '10px !important',
                                        color: '#fff !important',
                                        fontSize: "20px !important",
                                        fontWeight: '500 !important',
                                        padding: '0px 5px',
                                        fontFamily: 'inter',
                                        "&:hover": {
                                            "&& fieldset": {
                                                border: "0px solid transparent",
                                                padding: '0px 5px',
                                            }
                                        },
                                    }}
                                    MenuProps={{ classes: { paper: classes.select }, }}
                                >
                                    <MenuItem value={"sort"} disabled>Sort by:</MenuItem>
                                    {sortingData.map((data, index) => {
                                        return (
                                            <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid> */}
                    <Grid container spacing={2} className={classes.explorerHeadingSection}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography className={classes.explorerHeading}>Top Artists</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box className={classes.explorerBottom}>
                        <Carousel itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints}
                            onResize={currentBreakPoint => console.log(currentBreakPoint)} enableMouseSwipe={false} pagination={false}>
                            {Array.from({ length: 41 }).map((item, index) => (
                                <Box sx={{
                                    backgroundColor: 'rgba(255,255,255,0.16)', padding: '30px 35px', borderRadius: '15px', cursor: 'pointer', '&:hover': {
                                        backgroundColor: 'rgba(25,25,25,0.35)'
                                    }
                                }} onClick={handleModalOpen}>
                                    <Box sx={{ width: '104px', position: 'relative' }}>
                                        <img src={Profile} alt='' className={classes.img} />
                                        <Box className={classes.online1} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <Typography className={classes.userName}>Black Glass</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Box sx={{ width: '8px', height: '8px', backgroundColor: '#FF1C51', borderRadius: '100%', marginRight: '5px' }}></Box>
                                            <Typography sx={{ fontSize: '12px', fontFamily: 'inter', color: '#FBF7F8', textTransform: 'capitalize' }}>1 new post</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>

                    <Grid container spacing={2} className={classes.explorerHeadingSection}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography className={classes.explorerHeading}>New Releases</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box className={classes.explorerBottom}>
                        <Carousel enableMouseSwipe={false} itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints1} itemPadding={[0, 0]} outerSpacing={-5}
                            onResize={currentBreakPoint => console.log(currentBreakPoint)} pagination={false}>
                            {Array.from({ length: 41 }).map((item, index) => (
                                <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} sx={{
                                    backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: 3, padding: '15px', cursor: 'pointer', '&:hover': {
                                        backgroundColor: 'rgba(25,25,25,0.35)'
                                    }
                                }} onClick={handleModalOpen}>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', marginBottom: '15px', columnGap: '10px' }}>

                                        {Array.from({ length: 4 }).map((item, index) => (
                                            <Box sx={{ width: '30px' }}>
                                                <img src={profile} style={{ width: '100%' }} />
                                            </Box>
                                        ))}

                                        <Box>
                                            <IconButton aria-label="settings" sx={{ paddingRight: 0 }}>
                                                <MoreVertIcon sx={{
                                                    color: "#F0F3F6 !important",
                                                    fontSize: "30px !important"
                                                }} />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} className={classes.img} sx={{ position: 'relative' }}>
                                        <img src={Group} alt='' className={classes.img} />
                                        <Box sx={{ position: 'absolute', bottom: '8px', left: '16px' }}>
                                            <Typography sx={{ color: '#fff', fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>Abstract smoke Red blue</Typography>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', columnGap: '100px' }}>
                                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                            <Typography sx={{ fontWeight: '900', color: '#fff' }}>$ 2.05</Typography>
                                        </Box>
                                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                            <IconButton aria-label="settings">
                                                <FavoriteIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                            <Typography sx={{ fontWeight: '900', color: '#fff' }}>22</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                    <Grid container spacing={2} className={classes.explorerHeadingSection}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography className={classes.explorerHeading}>Trending</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box className={classes.explorerBottom}>
                        <Carousel enableMouseSwipe={false} itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints1} itemPadding={[0, 0]} outerSpacing={-5}
                            onResize={currentBreakPoint => console.log(currentBreakPoint)} pagination={false}>
                            {Array.from({ length: 41 }).map((item, index) => (
                                <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} sx={{
                                    backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: 3, padding: '15px', cursor: 'pointer', '&:hover': {
                                        backgroundColor: 'rgba(25,25,25,0.35)'
                                    }
                                }} onClick={handleModalOpen}>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', marginBottom: '15px', columnGap: '10px' }}>

                                        {Array.from({ length: 4 }).map((item, index) => (
                                            <Box sx={{ width: '30px' }}>
                                                <img src={profile} style={{ width: '100%' }} />
                                            </Box>
                                        ))}

                                        <Box>
                                            <IconButton aria-label="settings" sx={{ paddingRight: 0 }}>
                                                <MoreVertIcon sx={{
                                                    color: "#F0F3F6 !important",
                                                    fontSize: "30px !important"
                                                }} />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} className={classes.img} sx={{ position: 'relative' }}>
                                        <img src={Group} alt='' className={classes.img} />
                                        <Box sx={{ position: 'absolute', bottom: '8px', left: '16px' }}>
                                            <Typography sx={{ color: '#fff', fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>Abstract smoke Red blue</Typography>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', columnGap: '100px' }}>
                                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                            <Typography sx={{ fontWeight: '900', color: '#fff' }}>$ 2.05</Typography>
                                        </Box>
                                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                            <IconButton aria-label="settings">
                                                <FavoriteIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                            <Typography sx={{ fontWeight: '900', color: '#fff' }}>22</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                    <Box className={classes.dividerClass}>
                        <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                    </Box>

                    <Grid container spacing={2} className={classes.explorerHeadingSection}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography className={classes.explorerHeading}>For You</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box className={classes.explorerBottom}>
                        <Carousel enableMouseSwipe={false} itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} breakPoints={breakPoints1} itemPadding={[0, 0]} outerSpacing={-5}
                            onResize={currentBreakPoint => console.log(currentBreakPoint)} pagination={false}>
                            {Array.from({ length: 41 }).map((item, index) => (
                                <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} sx={{
                                    backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: 3, padding: '15px', cursor: 'pointer', '&:hover': {
                                        backgroundColor: 'rgba(25,25,25,0.35)'
                                    }
                                }} onClick={handleModalOpen}>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', marginBottom: '15px', columnGap: '10px' }}>

                                        {Array.from({ length: 4 }).map((item, index) => (
                                            <Box sx={{ width: '30px' }}>
                                                <img src={profile} style={{ width: '100%' }} />
                                            </Box>
                                        ))}

                                        <Box>
                                            <IconButton aria-label="settings" sx={{ paddingRight: 0 }}>
                                                <MoreVertIcon sx={{
                                                    color: "#F0F3F6 !important",
                                                    fontSize: "30px !important"
                                                }} />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} className={classes.img} sx={{ position: 'relative' }}>
                                        <img src={Group} alt='' className={classes.img} />
                                        <Box sx={{ position: 'absolute', bottom: '8px', left: '16px' }}>
                                            <Typography sx={{ color: '#fff', fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>Abstract smoke Red blue</Typography>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', columnGap: '100px' }}>
                                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                            <Typography sx={{ fontWeight: '900', color: '#fff' }}>$ 2.05</Typography>
                                        </Box>
                                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                            <IconButton aria-label="settings">
                                                <FavoriteIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                            <Typography sx={{ fontWeight: '900', color: '#fff' }}>22</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                    </Box>
                    <Box className={classes.dividerClass}>
                        <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                    </Box>

                    <Grid container spacing={2} className={classes.explorerHeadingSection}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography className={classes.explorerHeading}>Playlists</Typography>
                            <Divider sx={{ background: '#FF1C51', height: 2, borderRadius: 20 }} />
                        </Grid>
                    </Grid>

                    <Box className={classes.playListSection}>
                        <Grid container spacing={2}>
                            {Array.from({ length: 6 }).map((item, index) => (
                                <Grid item xs={12} sm={12} lg={4} md={4}>
                                    <Box className={classes.playListBox}>
                                        <Box className={classes.playListFlex}>
                                            <Box className={classes.playlistImageBox}>
                                                <img src={PlayList} alt='' className={classes.img} />
                                            </Box>
                                            <Typography className={classes.playListTitle}>Games of throne</Typography>
                                            <Typography className={classes.playListDetails}>S03 e05</Typography>
                                        </Box>
                                        <Box className={[classes.playListFlex, classes.rightFlex]}>
                                            <Button variant="outlined" fullWidth className={classes.playListButtonSubscribe}>
                                            <img src={Accessicon} alt='' className={classes.accessimg} />Access</Button>
                                            <Button variant="outlined" fullWidth className={classes.playListButton}>
                                            <img src={wishlisticon} alt='' className={classes.accessimg} /> Wishlist</Button>
                                            <Box className={classes.playListUser}>
                                                <Box sx={{ width: '33px', marginRight: '8.5px' }}>
                                                    <img src={Profile} alt='' className={classes.img} />
                                                </Box>
                                                <Typography className={classes.playListUserName}>Black Glass</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
                <Box style={{ width: "auto", position: 'fixed', bottom: 200, left: 0, zIndex: 99 }}>
                    <ChatComponent blur={blurStatus} />
                </Box>
            </Container>
            <Box sx={{ marginTop: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SongPlayer blur={blurStatus} />
            </Box>
            <Dialog classes={{ paper: classes.paper }} open={modalOpen} onClose={handleModalClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth PaperProps={{ style: { borderRadius: 20, backgroundColor: '#1D1D1D', border: '3px solid #434343;', maxWidth: '971px' } }}>
                <DialogContent sx={{ padding: '40px' }}>
                    <Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ width: '201px', height: '201px', position: 'relative' }}>
                                <img src={WhiteList} style={{ width: '100%', borderRadius: '21px' }} />
                                <Box sx={{ position: 'absolute', bottom: '10px', textAlign: 'center', width: '100%', display: 'flex', left: '10px', alignItems: 'center' }}>
                                    <IconButton sx={{ backgroundColor: '#fff', padding: 0, marginRight: '10px' }}>
                                        <BsPlayCircle style={{ color: '#FF1C51', fontSize: '40px' }} />
                                    </IconButton>
                                    <Slider aria-label="video" value={valueSlider} sx={{ width: '60%' }} className={classes.removeThumb} />
                                </Box>
                            </Box>
                            <Box sx={{ marginLeft: '42px', display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ marginBottom: '10px' }}>
                                    <Typography sx={{ fontSize: '24px', fontWeight: '600', fontFamily: 'inter', color: '#fff' }}>Mountain Landscape</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '7px' }}>
                                    <Typography sx={{ fontSize: '20px', fontFamily: 'inter', color: '#fff' }}>Author</Typography>
                                    <Box sx={{ width: '44px', height: '44px', margin: '0px 13px 0px 27px' }}>
                                        <img src={AuthorImage} alt='' className={classes.img} style={{ borderRadius: '100px', border: '1px solid #fff' }} />
                                    </Box>
                                    <Typography sx={{ fontSize: '16px', fontFamily: 'inter', color: 'rgba(255,255,255,0.50)' }}>Musicians, Mix/Mastering engineers/Songwriters</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '7px' }}>
                                    <Box sx={{ marginRight: '16px' }}>
                                        <Typography sx={{ fontSize: '18px', fontFamily: 'inter', color: 'rgba(255,255,255,0.50)' }}>Format:</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: '22px', fontFamily: 'inter', color: '#fff' }}>mp3</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '7px' }}>
                                    <Box sx={{ marginRight: '16px' }}>
                                        <Typography sx={{ fontSize: '18px', fontFamily: 'inter', color: 'rgba(255,255,255,0.50)' }}>Size:</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: '22px', fontFamily: 'inter', color: '#fff' }}>10.54 Mb</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ margin: '32px 0' }}>
                            <Typography sx={{ fontSize: '17px', fontFamily: 'inter', color: 'rgba(255,255,255,0.50)' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Typography>
                            <Typography sx={{ fontSize: '17px', fontFamily: 'inter', color: 'rgba(255,255,255,0.50)' }}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Button variant="contained" sx={{
                                    backgroundColor: '#FF1C51', padding: '10px 30px', borderRadius: '30px', fontFamily: 'inter', textTransform: 'capitalize', fontSize: '20px', fontWeight: '400', boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                    },
                                }}>Add to Cart &nbsp; <AiOutlineShoppingCart /></Button>
                                <Button variant="contained" sx={{
                                    marginLeft: '20px',
                                    backgroundColor: '#FF1C51', padding: '10px 25px', borderRadius: '30px', fontFamily: 'inter', textTransform: 'capitalize', fontSize: '20px', fontWeight: '400', boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                    },
                                }}>Add to wishlist &nbsp; <AiOutlineShoppingCart /></Button>
                            </Box>
                            <Box>
                                <BsFillSuitHeartFill style={{ fontSize: '23px', color: '#FF1C51' }} />
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
                <IconButton className={classes.customizedButton}>
                    <CloseIcon fontSize={'large'} onClick={handleModalClose} />
                </IconButton>
            </Dialog>
        </Box>
    )
}

export default ExplorerScreen
