
import React, { useState } from 'react';
import PauseRounded from '@mui/icons-material/PauseRounded';
import { MdArrowLeft, MdArrowRight, MdOutlineRepeat, MdOutlineMenu } from "react-icons/md";
import { ImShuffle } from "react-icons/im";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MenuIcon from '@mui/icons-material/Menu';
import { Dialog, DialogContent, Button, Box, IconButton, Typography, Slider, FormControl, Grid, MenuItem, InputBase } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useStyles } from '../../constant/customStyle'
import { mediaData } from '../../constant/dropdown/category'
import Select, { SelectChangeEvent } from '@mui/material/Select'


import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import profile from '../../assets/profile.png'
import Group from "../../assets//Group 65.png"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { display, style } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '5px',
    background: 'rgb(251 247 248 / 18%)',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
        width: '100%',
    },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: '20px 8px 20px 0px',
        paddingLeft: '20px',
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '90',
        },
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


export default function SongPlayer({ blur }) {
    const classes = useStyles();
    const [value, setValue] = React.useState("choose");
    const [open, setOpen] = useState(false)
    const [play, setPlay] = useState(false)
    const [position, setPosition] = React.useState(32)
    const [showSound, setShowSound] = React.useState(false)


    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const duration = 200; // seconds
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }

    const handleClickOpen = () => {
        setOpen(true)
        blur(true)
    }

    const handleClose = () => {
        setOpen(false)
        blur(false)
    }

    const handlePlay = () => {
        setPlay(!play)
    }

    const handlePrev = () => {
        console.log('back')
    }

    const handleForward = () => {
        console.log('forward')
    }

    return (
        <>

            <div className='hovermain'>
                <span className='hellospan'> <PlayArrowIcon className={classes.play_arrow}/></span>

                <Grid container className={`${classes.mucicontainer} main_music`} >

                    <Grid className="meriClass" lg={1} xs={12} item >
                        <Box className={classes.songDetailBox}>
                            <Typography className={classes.songDetail} >Song Title</Typography>
                            <Typography className={classes.songDetail}>Artist</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={11} xs={12} marginLeft={"-47px"}>
                        <Box className={classes.funtionsButton}>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <MdArrowLeft className={classes.mdarrow} onClick={handlePrev} />
                            </IconButton>
                            <Box onClick={handlePlay} sx={{ cursor: 'pointer', width: '50px', height: '50px', borderRadius: '100%', backgroundColor: '#FF1C51', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px -15px' }}>
                                {play ? <PauseRounded sx={{ fontSize: '40px' }} /> : <PlayArrowIcon sx={{ fontSize: '40px' }} />}
                            </Box>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <MdArrowRight className={classes.mdarrow} onClick={handleForward} />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item lg={1} xs={12}>
                        <Box className={classes.duration} > {formatDuration(position)} / -{formatDuration(duration - position)}</Box>
                    </Grid>
                    <Grid item lg={8} xs={12} display='flex' justifyContent="center">
                        <Box sx={{ width: '90%' }}>
                            <Slider
                                value={position}
                                min={0}
                                step={1}
                                max={duration}
                                onChange={(_, value) => setPosition(value)}
                                className={classes.cutomSlider}

                            />
                        </Box>
                    </Grid>
                    <Grid item lg={3} xs={12}>

                        <Box className={classes.iconsbox} >
                            <Box sx={{ display: 'flex', width: '40%' }} onMouseEnter={() => setShowSound(true)} onMouseLeave={() => setShowSound(false)}>
                                <VolumeUpIcon className={classes.songIcon} />
                                <Box className={classes.slidersbox} style={{ display: `${showSound ? "block" : "none"}`, marginLeft: '10px', marginRight: '10px', width: '70%' }}>
                                    <Slider className={classes.cutomSlider} />
                                </Box>
                            </Box>

                            <Box sx={{ width: '175px', display: 'flex', justifyContent: 'space-between' }}>
                                <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton} onClick={handleClickOpen}>
                                    <MenuIcon className={classes.songIcon} />
                                </IconButton>
                                {play?
                                <>
                                <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
                                    <ImShuffle className={classes.songIcon} />
                                </IconButton>
                                <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
                                    <MdOutlineRepeat className={classes.songIcon} />
                                </IconButton></>:null}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Dialog className='header-scroll' classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth PaperProps={{ style: { borderRadius: 20, backgroundColor: '#1D1D1D', border: '2px solid #707070', maxWidth: 974 } }}>
                <DialogContent>
                    <Box sx={{ padding: '70px 55px' }}>
                        <Grid container spacing={2} sx={{ marginBottom: '43px' }}>
                            <Grid item xs={12} sm={12} lg={6} md={6}>
                                <Search>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}>
                                        <SearchIconWrapper>
                                            <SearchIcon sx={{ color: '#FF1C51' }} />
                                        </SearchIconWrapper>
                                    </Box>
                                    <StyledInputBase
                                        placeholder="Search Collection"
                                        inputProps={{ 'aria-label': 'search' }}
                                        sx={{ paddingLeft: 0, width: '90%' }}
                                    />
                                </Search>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={3} md={3}>
                                <FormControl variant="standard" fullWidth sx={{ width: '150px' }}>
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
                            <Grid item xs={12} sm={12} lg={3} md={3}>
                                <FormControl variant="standard" fullWidth sx={{ width: '150px' }}>
                                    <Select
                                        sx={{ fontFamily: 'poppins', fontSize: '20px' }}
                                        inputProps={{ classes: { icon: classes.icon } }}
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={"category"}
                                        // onChange={handleChange}
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
                                    > <MenuItem value={"category"}>Category</MenuItem>

                                        {/* {categoryData.map((data, index) => {
                                return (
                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                )
                            })} */}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={6} sx={{ marginBottom: '43px' }}>
                            {Array.from({ length: 12 }).map((item, index) => (
                                <Grid item xs={12} sm={12} lg={3} md={3}>
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                        <Box sx={{
                                            width: '196px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(255 255 255 / 18%)', padding: '10px 10px',
                                            borderRadius: '15px',
                                            alignItems: 'center',
                                        }}>
                                            <Box className={classes.topImages}>
                                                {Array.from({ length: 4 }).map((item, index) => (
                                                    <Box className={classes.imagesGrid}>
                                                        <img src={profile} className={classes.img} />
                                                    </Box>
                                                ))}
                                                <Box>
                                                    <IconButton aria-label="settings" className={classes.removePadding}>
                                                        <MoreVertIcon className={classes.moreVertIconSize} />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                            <Box sx={{ position: 'relative', width: '175px' }}>
                                                <img src={Group} alt='' className={classes.img} />
                                                <Box sx={{ position: 'absolute', bottom: '20px', left: '5px', width: '85%' }}>
                                                    <Typography sx={{ color: '#fff', fontSize: '13px', fontFamily: 'poppins', fontWeight: '500' }}>Abstract smoke Red blue</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                                margin: '0 20px'
                                            }}>
                                                <Typography sx={{ fontWeight: '900', color: '#fff', fontSize: '13px' }}>$ 2.05</Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <FavoriteIcon sx={{ fontSize: '13px', marginRight: '5px', color: '#fff' }} />
                                                    <Typography sx={{ fontWeight: '900', color: '#fff', fontSize: '13px' }}>22</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </DialogContent>
                <IconButton className={classes.customizedButton}>
                    <CloseIcon fontSize={'large'} onClick={handleClose} />
                </IconButton>
            </Dialog>

        </>
    )
}
