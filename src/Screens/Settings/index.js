import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Button, InputLabel, FormControl, MenuItem, IconButton, Switch } from '@mui/material'
import { useStyles } from '../../constant/customStyle'
import HeaderComponent from '../../component/Header'
import SongPlayer from '../../component/SongPlayer'
import ChatComponent from '../../component/Chat'
import Paypal from '../../assets/paypal.svg'
import Coinbase from '../../assets/coinbase.svg'
import Torus from '../../assets/torus.svg'
import WalletConnect from '../../assets/walletconnect.svg'
import { SettingsInput } from '../../component/Textfield/SettingTextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { categoryData, categoryData1 } from '../../constant/dropdown/category'
import { GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr'

const SettingScreen = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(1)
    const [switchState, setSwitchState] = useState(false)
    const [followState, setFollowState] = useState(false)
    const [reivewState, setReviewState] = useState(false)
    const [locationState, setLocationState] = useState(false)
    const [notificationState, setNotificationState] = useState(false)

    const [postValue, setPostValue] = useState(1)
    const [mediaValue, setMediaValue] = useState(2)
    const [friendListValue, setFriendListValue] = useState(3)
    const [followerListvalue, setFollowerListValue] = useState(4)
    const [contactInfoValue, setContactInfoValue] = useState(5)



    const blurStatus = () => {
        setOpen(!open)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handlePostChange = (event) => {
        setPostValue(event.target.value)
    }

    const handleMediaChange = (event) => {
        setMediaValue(event.target.value)
    }

    const handleFriendListChange = (event) => {
        setFriendListValue(event.target.value)
    }

    const handleFollowerListChange = (event) => {
        setFollowerListValue(event.target.value)
    }

    const handleContactInfoChange = (event) => {
        setContactInfoValue(event.target.value)
    }

    const handleSwitchChange = (event) => {
        setSwitchState(!switchState)
    }
    const handleFollowRequestChange = (event) => {
        setFollowState(!followState)
    }
    const handleReviewTagChange = (event) => {
        setReviewState(!reivewState)
    }
    const handleEnableLocationChange = (event) => {
        setLocationState(!locationState)
    }
    const handleEmailNotificationChange = (event) => {
        setNotificationState(!notificationState)
    }

    useEffect(() => {
        document.title = "Settings | Finay"
    }, [])

    return (
        <Box sx={{ position: 'relative' }} className={open ? classes.blur : ''}>
            <HeaderComponent />
            <Container maxWidth="md" className={classes.exploreContainer} sx={{ marginBottom: '150px' }}>
                <Box className={classes.exploreBox}>
                    <Grid container spacing={2} className={classes.settingTitleBox}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography className={classes.settingTitle}>Settings</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.settingTitleBox}>
                        <Grid item xs={12} sm={12} lg={5} md={5}>
                            <Box className={classes.boxBorder}>
                                <Typography className={classes.subHeadingSetting}>Payment Gateways</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} className={classes.settingTitleBox}>
                        <Grid item xs={12} sm={12} lg={3} md={3}>
                            <Box className={classes.paymentBox}>
                                <Box className={classes.paypalBox}>
                                    <img src={Paypal} alt='' className={classes.img} />
                                </Box>
                                <Box sx={{ marginBottom: '19.6px' }}>
                                    <Typography sx={{ fontFamily: 'poppins', fontSize: '25px', fontWeight: '500', color: '#fff', textAlign: 'center' }}>Paypal</Typography>
                                </Box>
                                <Button variant="contained" className={classes.connect}>Connect</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={3} md={3}>
                            <Box className={classes.paymentBox}>
                                <Box sx={{ width: '107px', height: '108px', marginBottom: '16px' }}>
                                    <img src={Coinbase} alt='' className={classes.img} />
                                </Box>
                                <Box sx={{ marginBottom: '19.6px' }}>
                                    <Typography sx={{ fontFamily: 'poppins', fontSize: '25px', fontWeight: '500', color: '#fff', textAlign: 'center' }}>Coinbase</Typography>
                                </Box>
                                <Button variant="contained" className={classes.connected}>Connected</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={3} md={3}>
                            <Box className={classes.paymentBox}>
                                <Box sx={{ width: '84px', height: '90px', marginBottom: '35px' }}>
                                    <img src={Torus} alt='' className={classes.img} />
                                </Box>
                                <Box sx={{ marginBottom: '19.6px' }}>
                                    <Typography sx={{ fontFamily: 'poppins', fontSize: '25px', fontWeight: '500', color: '#fff', textAlign: 'center' }}>Torus</Typography>
                                </Box>
                                <Button variant="contained" className={classes.connected}>Connected</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={3} md={3}>
                            <Box className={classes.paymentBox}>
                                <Box sx={{ width: '128px', height: '77px', marginBottom: '10px' }}>
                                    <img src={WalletConnect} alt='' className={classes.img} />
                                </Box>
                                <Box sx={{ marginBottom: '19.6px' }}>
                                    <Typography sx={{ fontFamily: 'poppins', fontSize: '25px', fontWeight: '500', color: '#fff', textAlign: 'center' }}>Wallet Connect</Typography>
                                </Box>
                                <Button variant="contained" className={classes.connect}>Connect</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.settingTitleBox}>
                        <Grid item xs={12} sm={12} lg={5} md={5}>
                            <Box className={classes.boxBorder}>
                                <Typography className={classes.subHeadingSetting}>Username/Login</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex' }} className={classes.settingTitleBox}>
                        <Box sx={{ display: 'flex', width: '40%', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '19px' }}>
                                <Box sx={{ width: '50%' }}>
                                    <InputLabel htmlFor="idGender" className={classes.settingLabel}>Username: </InputLabel>
                                </Box>
                                <SettingsInput size={'medium'} sx={{ width: '50%' }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '19px' }}>
                                <Box sx={{ width: '50%' }}>
                                    <InputLabel htmlFor="idGender" className={classes.settingLabel}>Password: </InputLabel>
                                </Box>
                                <SettingsInput size={'medium'} sx={{ width: '50%' }} />
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '19px' }}>
                                <Box sx={{ width: '50%' }}>
                                    <InputLabel htmlFor="idGender" className={classes.settingLabel}>Phone: </InputLabel>
                                </Box>
                                <SettingsInput size={'medium'} sx={{ width: '50%' }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '53px' }}>
                                <InputLabel htmlFor="idGender" className={classes.settingLabel}>Two Factor Authentic: Disable </InputLabel>
                            </Box>

                        </Box>
                        <Box sx={{ display: 'flex', width: '14.5%', marginRight: '64.7px', marginLeft: '64.7px' }}>
                            <Box sx={{ display: 'flex', width: '40%', flexDirection: 'column' }}>
                                <Box sx={{ marginRight: '36px', marginBottom: '15px' }}>
                                    <Button variant="contained" className={classes.connect}>Follow</Button>
                                </Box>
                                <Box sx={{ marginRight: '36px', marginBottom: '15px' }}>
                                    <Button variant="contained" className={classes.connect}>Follow</Button>
                                </Box>
                                <Box sx={{ marginRight: '36px', marginBottom: '15px' }}>
                                    <Button variant="contained" className={classes.connect}>Follow</Button>
                                </Box>
                                <Box sx={{ marginRight: '36px', marginBottom: '15px' }}>
                                    <Button variant="contained" className={classes.connect}>Set up</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', width: '20%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ marginRight: '36px', marginBottom: '19px' }}>
                                    <Box sx={{ marginRight: '36px', display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ marginRight: '10px' }}>
                                            <InputLabel htmlFor="idGender" className={classes.settingLabel}>Online Status : </InputLabel>
                                        </Box>
                                        <FormControl variant="standard" fullWidth sx={{ width: '136px' }}>
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

                                                {categoryData.map((data, index) => {
                                                    return (
                                                        <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ marginTop: '29px', display: 'flex', alignItems: 'center' }}>
                                        <InputLabel htmlFor="idGender" className={classes.connectedSocials}>Connected Socials :</InputLabel>
                                    </Box>
                                    <Box sx={{ marginTop: '29px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '216px' }}>
                                        <IconButton className={classes.iconButton2}>
                                            <GrFacebookOption className={classes.socialIcons} />
                                        </IconButton>
                                        <IconButton className={classes.iconButton2}>
                                            <GrInstagram className={classes.socialIcons} />
                                        </IconButton>
                                        <IconButton className={classes.iconButton2}>
                                            <GrTwitter className={classes.socialIcons} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Grid container spacing={2} className={classes.settingTitleBox}>
                        <Grid item xs={12} sm={12} lg={5} md={5}>
                            <Box className={classes.boxBorder}>
                                <Typography className={classes.subHeadingSetting}>Permission :</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box className={classes.settingTitleBox}>
                       
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <Box sx={{ width: '40%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Follow by request:</Typography>
                                    <Switch checked={followState} onChange={handleFollowRequestChange} name="jason"
                                        classes={{
                                            track: classes.switch_track,
                                            switchBase: classes.switch_base,
                                            colorPrimary: classes.switch_primary,
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Review tagged posts:</Typography>
                                    <Switch checked={reivewState} onChange={handleReviewTagChange} name="jason"
                                        classes={{
                                            track: classes.switch_track,
                                            switchBase: classes.switch_base,
                                            colorPrimary: classes.switch_primary,
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Review tagged posts:</Typography>
                                    <Switch checked={switchState} onChange={handleSwitchChange} name="jason"
                                        classes={{
                                            track: classes.switch_track,
                                            switchBase: classes.switch_base,
                                            colorPrimary: classes.switch_primary,
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Enable Location:</Typography>
                                    <Switch checked={locationState} onChange={handleEnableLocationChange} name="jason"
                                        classes={{
                                            track: classes.switch_track,
                                            switchBase: classes.switch_base,
                                            colorPrimary: classes.switch_primary,
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Email Notifications:</Typography>
                                    <Switch checked={notificationState} onChange={handleEmailNotificationChange} name="jason"
                                        classes={{
                                            track: classes.switch_track,
                                            switchBase: classes.switch_base,
                                            colorPrimary: classes.switch_primary,
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ width: '50%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Who can see your post? :</Typography>
                                    <FormControl variant="standard" fullWidth sx={{ width: '136px' }}>
                                        <Select
                                            sx={{ fontFamily: 'poppins', fontSize: '20px' }}
                                            inputProps={{ classes: { icon: classes.icon } }}
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={postValue}
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

                                            {categoryData1.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Who can see your media? :</Typography>
                                    <FormControl variant="standard" fullWidth sx={{ width: '136px' }}>
                                        <Select
                                            sx={{ fontFamily: 'poppins', fontSize: '20px' }}
                                            inputProps={{ classes: { icon: classes.icon } }}
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={mediaValue}
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

                                            {categoryData1.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Who can see your friends list? :</Typography>
                                    <FormControl variant="standard" fullWidth sx={{ width: '136px' }}>
                                        <Select
                                            sx={{ fontFamily: 'poppins', fontSize: '20px' }}
                                            inputProps={{ classes: { icon: classes.icon } }}
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={friendListValue}
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

                                            {categoryData1.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Who can see your follower list? :</Typography>
                                    <FormControl variant="standard" fullWidth sx={{ width: '136px' }}>
                                        <Select
                                            sx={{ fontFamily: 'poppins', fontSize: '20px' }}
                                            inputProps={{ classes: { icon: classes.icon } }}
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={followerListvalue}
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

                                            {categoryData1.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '20px', color: '#fff' }}>Who can see your contact info? :</Typography>
                                    <FormControl variant="standard" fullWidth sx={{ width: '136px' }}>
                                        <Select
                                            sx={{ fontFamily: 'poppins', fontSize: '20px' }}
                                            inputProps={{ classes: { icon: classes.icon } }}
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={contactInfoValue}
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

                                            {categoryData1.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            {/* <Box sx={{ width: '10%' }} /> */}

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Button variant="text" sx={{ color: '#FF1C51', fontSize: '20px', textTransform: 'inherit', borderBottom: '2px solid #FF1C51', borderRadius: '0', paddingBottom: '5px' }}>Deactivate your account</Button>
                        </Box>
                        <Box sx={{ marginTop: '25px' }}>
                            <Button className={classes.blockuserButton} >Blocked Users</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box style={{ width: "auto", position: 'fixed', bottom: 200, left: 0, zIndex: 99 }}>
                <ChatComponent blur={blurStatus} />
            </Box>
            <Box sx={{ margin: " 0 0 0 154px" }}>

                <SongPlayer blur={blurStatus} />
            </Box>
        </Box>
    )
}

export default SettingScreen
