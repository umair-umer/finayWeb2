import React, { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography, List, ListItem, ListItemText } from '@mui/material'
import { useStyles } from '../../constant/customStyle'
import HeaderComponent from '../../component/Header'
import SongPlayer from '../../component/SongPlayer'
import ChatComponent from '../../component/Chat'


const generalLinks = [
    {
        key: 1,
        name: 'About',
    },
    {
        key: 2,
        name: 'Blog',
    },
    {
        key: 3,
        name: 'Jobs'
    }
]

const supportLinks = [
    {
        key: 4,
        name: 'Getting Started',
    },
    {
        key: 5,
        name: 'Purchase Support',
    },
    {
        key: 6,
        name: 'Contact'
    },
    {
        key: 7,
        name: 'FAQS'
    }
]

const legalLinks = [
    {
        key: 8,
        name: 'Terms of Service',
    },
    {
        key: 9,
        name: 'Community Guidelines',
    },
    {
        key: 10,
        name: 'Privacy Notice'
    },
    {
        key: 11,
        name: 'Privacy Choices',
    },
    {
        key: 12,
        name: 'CA Privacy Disclosure',
    },
    {
        key: 13,
        name: 'DMCA Guidelines'
    },
    {
        key: 14,
        name: 'Trademark Policy',
    },
    {
        key: 15,
        name: 'Trademark Guldelines',
    },
    {
        key: 16,
        name: 'Terms of Sale'
    },
    {
        key: 17,
        name: 'Cooke Notice',
    },
    {
        key: 18,
        name: 'Terms & Conditions',
    },
    {
        key: 19,
        name: 'Code of Conduct'
    },
    {
        key: 20,
        name: 'Accessiblity',
    },
    {
        key: 21,
        name: 'Blog',
    },
    {
        key: 22,
        name: 'Transparency Report'
    },
]

const TermsScreen = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(1)
    const [value, setValue] = useState('Terms of Service')
    const [chatStatus, setChatStatus] = useState(false)
    const [calendarStatus, setCalendarStatus] = useState(false)

    const handleSelectedItem = (index, title) => {
        setSelectedIndex(index)
        setValue(title)
    }

    const modalStatus = () => {
        setChatStatus(false)
        setCalendarStatus(false)
    }

    const blurStatus = () => {
        setOpen(!open)
    }

    useEffect(() => {
        document.title = `${value} | Finay`
    }, [value])

    return (
        <Box className={open ? classes.blur : ''}>
            <HeaderComponent />
            <Container maxWidth="lg" sx={{ position: 'relative' }} className={classes.termsContainer}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={3}>
                        <Typography className={classes.generalHeading}>General</Typography>
                        <List sx={{ marginBottom: '58px' }}>
                            {generalLinks.map((link, index) => {
                                return (
                                    <ListItem disablePadding key={index} onClick={() => handleSelectedItem(link.key, link.name)} sx={{ cursor: 'pointer' }}>
                                        <ListItemText primary={<Typography className={classes.link}>{link.name}</Typography>} className={classes.link} />
                                    </ListItem>
                                )
                            })}
                        </List>
                        <Typography className={classes.generalHeading}>Legal</Typography>
                        <List sx={{ marginBottom: '58px' }}>
                            {legalLinks.map((link, index) => {
                                return (
                                    <ListItem disablePadding key={index} onClick={() => handleSelectedItem(link.key, link.name)} sx={{ cursor: 'pointer' }}>
                                        <ListItemText primary={<Typography className={classes.link}>{link.name}</Typography>} className={classes.link} />
                                    </ListItem>
                                )
                            })}
                        </List>
                        <Typography className={classes.generalHeading}>Support</Typography>
                        <List sx={{ marginBottom: '58px' }}>
                            {supportLinks.map((link, index) => {
                                return (
                                    <ListItem disablePadding key={index} onClick={() => handleSelectedItem(link.key, link.name)} sx={{ cursor: 'pointer' }}>
                                        <ListItemText primary={<Typography className={classes.link}>{link.name}</Typography>} className={classes.link} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={9} sx={{ marginBottom: '100px' }}>
                        <Box className={classes.termsDescription}>
                            <Typography className={classes.termsTitle}>{value}</Typography>
                            <Typography className={classes.termsDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Typography className={classes.termsDetails}>Important Terms</Typography>
                            <Typography className={classes.termsDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Typography className={classes.termsDetails}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Typography className={classes.termsDetails}>Your Permission to Use the Forum</Typography>
                            <Typography className={classes.termsDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Typography className={classes.termsDetails}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Typography className={classes.termsDetails}>Conditions for Use of the Forum</Typography>
                            <Typography className={classes.termsDetails}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</Typography>
                            <Typography className={classes.termsDetails}>Important Terms</Typography>
                            <Typography className={classes.termsDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Typography className={classes.termsDetails}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Typography className={classes.termsDetails}>Your Permission to Use the Forum</Typography>
                            <Typography className={classes.termsDetails}>Important Terms</Typography>
                            <Typography className={classes.termsDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Typography className={classes.termsDetails}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Typography className={classes.termsDetails}>Your Permission to Use the Forum</Typography>
                            <Typography className={classes.termsDetails}>Important Terms</Typography>
                            <Typography className={classes.termsDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Typography className={classes.termsDetails}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Typography className={classes.termsDetails}>Your Permission to Use the Forum</Typography>
                            <Typography className={classes.termsDetails}>Important Terms</Typography>
                            <Typography className={classes.termsDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Typography className={classes.termsDetails}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Typography className={classes.termsDetails}>Your Permission to Use the Forum</Typography>
                            <Typography className={classes.termsDetails}>Important Terms</Typography>
                            <Typography className={classes.termsDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Typography className={classes.termsDetails}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                            <Typography className={classes.termsDetails}>Your Permission to Use the Forum</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box style={{ width: "auto", position: 'fixed', bottom: 200, left:0, zIndex: 99 }}>
                    <ChatComponent blur={blurStatus} modal={chatStatus} calendarModal={calendarStatus} chatModalState={modalStatus} />
                </Box>
            </Container>
            <Box sx={{ marginTop: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SongPlayer blur={blurStatus} />
            </Box>
        </Box>
    )
}

export default TermsScreen
