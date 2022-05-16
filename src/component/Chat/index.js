import React, { useState, useRef, useEffect } from 'react'
import { Dialog, DialogContent, TextField, Box, IconButton, InputAdornment, FormControl, Typography, List, ListItem, ListItemText, InputBase } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message'
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FaShopify } from 'react-icons/fa'
import { useStyles } from '../../constant/customStyle'
import CloseIcon from '@mui/icons-material/Close'
import TabComponentCarts from '../../tabsCompoent/TabComponentCarts'
import TabComponentBidding from '../../tabsCompoent/TabComponentBidding'
import TabComponentWishList from '../../tabsCompoent/TabComponentWishList'
import TabComponentRecently from '../../tabsCompoent/TabComponentRecently'
import chatImage from '../../assets/chat-image-user.jpg'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import Sender from '../../assets/sender.png'
import CustomTabsComponent from '../../component/Tabs'
import { ChatTextField } from '../../component/Textfield/ChatTextField'
import { Email, Lock } from '@mui/icons-material'
import { BsEmojiSmile } from 'react-icons/bs'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import Picker from 'emoji-picker-react'
import SendIcon from '@mui/icons-material/Send'
import Shopify from '../../assets/icon-shopify.svg'
import CalendarComponent from '../Calendar'
import { GiShoppingBag } from "@react-icons/all-files/gi/GiShoppingBag";
import messicon from '../../assets/messicon.svg'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '25px',
    backgroundColor: 'rgba(255,255,255,0.12)',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: '10px',
    color: 'rgba(255,255,255,0.50)',
    border: '1px solid #fff',
    fontFamily: 'poppins !important',
    [theme.breakpoints.up('sm')]: {
        width: '100%',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        padding: '20px 10px 20px 20px',
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '20ch',
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

const tabs = [
    {
        name: 'Cart',
        value: '1'
    },
    {
        name: 'Bidding',
        value: '2'
    },
    {
        name: 'Wishlist',
        value: '3'
    },
    {
        name: 'Recently Purchased',
        value: '4'
    }
]

const ChatComponent = ({ blur, modal, calendarModal, chatModalState }) => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [chatOpen, setChatOpen] = useState(false)
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [chosenEmoji, setChosenEmoji] = useState(null)
    const [showIcons, setShowIcons] = useState(false)

    const scrollRef = useRef()

    const handleChatOpen = () => {
        blur(true)
        setChatOpen(true)
    }

    const handleChatClose = () => {
        setChatOpen(false)
        blur(false)
        chatModalState(false)
    }

    const handleCalendarOpen = () => {
        setCalendarOpen(true)
        blur(true)
    }

    const handleCalendarClose = () => {
        setCalendarOpen(false)
        blur(false)
        chatModalState(false)
    }

    const handleClickOpen = () => {
        blur(true)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        blur(false)
    }

    const modalStatus = () => {
        setOpen(false)
        blur(false)
    }

    const handleEmojiOpen = () => {
        setEmojiOpen(!emojiOpen)
    }

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    const tabsPanel = [
        {
            component: <TabComponentCarts modalState={modalStatus} />,
            value: '1'
        },
        {
            component: <TabComponentBidding modalState={modalStatus} />,
            value: '2'
        },
        {
            component: <TabComponentWishList modalState={modalStatus} />,
            value: '3'
        },
        {
            component: <TabComponentRecently modalState={modalStatus} />,
            value: '4'
        }
    ]

    const scroll = () => {

        return (
            // console.log('scrollRef', scrollRef.current.scrollIntoView({ behavior: 'smooth' }))
            scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
            // .scrollIntoView({ behavior: 'smooth' })
            // scrollRef.current?.scrollIntoView(alignToTop)
            // scrollRef.current?.scrollIntoView({beha})
        )
    }

    useEffect(() => {
        scroll()
    }, [])

    useEffect(() => {
        setChatOpen(modal)
    }, [modal])

    useEffect(() => {
        // setChatOpen(modal)
        console.log('calendarModal', calendarModal)
        setCalendarOpen(calendarModal)
    }, [calendarModal])

    // useEffect(() => {
    //     console.log('calendarModal', calendarModal, modal)
    //     setCalendarOpen(calendarModal)
    //     setChatOpen(false)
    // }, [calendarModal])



    return (
        <>
            <Box className='Arrow-icon-box' onClick={() => setShowIcons(!showIcons)}>
                <ArrowDownwardIcon className={`show-arrow ${showIcons ? "show-arrow-rotate" : null}`}  />
            </Box>



            <Box className={showIcons ? 'fixed-icons-show' : "fixed-icons-hide"} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>


                <Box className='toggle-icons'>
                    <Box className={classes.quickLinks1} onClick={handleChatOpen}>
                        <img src={messicon} className={classes.img} />
                    </Box>
                    {/* <MessageIcon onClick={handleChatOpen} className={classes.quickLinks} /> */}
                    <DateRangeIcon className={classes.quickLinks} onClick={handleCalendarOpen} />
                    {/* <GiShoppingBag className={classes.quickLinks}  onClick={handleClickOpen}  /> */}
                    <Box className={classes.quickLinks} onClick={handleClickOpen}>
                        <img src={Shopify} className={classes.img} />
                    </Box>
                </Box>


            </Box>


            <Dialog className='header-scroll' classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth PaperProps={{ style: { borderRadius: 20, backgroundColor: '#1D1D1D', border: '3px solid #434343;', maxWidth: 870 } }}>
                <DialogContent>
                    <CustomTabsComponent tabs={tabs} tabsPanel={tabsPanel} />
                </DialogContent>
                <IconButton className={classes.customizedButton} onClick={handleClose} >
                    <CloseIcon fontSize={'large'} />
                </IconButton>
            </Dialog>

            <Dialog classes={{ paper: classes.paper }} open={calendarOpen} onClose={handleCalendarClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth PaperProps={{ style: { borderRadius: '24px', backgroundColor: '#434343', maxWidth: 870 } }}>
                <DialogContent sx={{ padding: 0, borderRadius: '24px', border: '3px solid #434343' }}>
                    <Box>
                        <CalendarComponent />
                    </Box>
                </DialogContent>
                <IconButton className={classes.customizedButton} onClick={handleCalendarClose}>
                    <CloseIcon fontSize={'large'} />
                </IconButton>
            </Dialog>

            <Dialog className='header-scroll' classes={{ paper: [classes.paper1] }} open={chatOpen} maxWidth={'lg'} onClose={handleChatClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullWidth PaperProps={{ style: { borderRadius: 20, backgroundColor: '#1D1D1D', border: '3px solid #434343;' } }}>
                <DialogContent className={classes.removePaddingChat}>
                    <Box className={classes.leftChat}>
                        <Box sx={{ padding: '10px 10px' }}>
                            <Search sx={{ border: "1px solid #FFFFFF 0.5" }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', }}>
                                    <SearchIconWrapper>
                                        <SearchIcon sx={{ color: '#FFFFFF , 0.1 ' }} />
                                    </SearchIconWrapper>
                                </Box>
                                <StyledInputBase
                                    placeholder="Search.."
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ paddingLeft: 0, color: "#FFFFFF, 0.5" }}
                                />
                            </Search>
                        </Box>
                        {Array.from({ length: 44 }).map((item, index) => (
                            <Box className={classes.chatUserSection}>
                                <Box className={classes.imgBox}>
                                    <img src={chatImage} alt={''} className={classes.chatImg} />
                                </Box>
                                <Box className={classes.chatFlex}>
                                    <Box className={classes.parentChat}>
                                        <Typography className={classes.chatUserName}>Lena Gonzales</Typography>
                                        <Typography className={classes.chatUserTime}>12:33</Typography>
                                    </Box>
                                    <Typography className={classes.chatUserChat}>Lena Gonzales Lena Gonzales Lena Gonzales Lena Gonzales Lena Gonzales Lena Gonzales Lena Gonzales Lena Gonzales Lena Gonzales</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.rightChat} >
                        <Box className={classes.reciverBox}>
                            <Box className={classes.messageBox}>
                                <Box className={classes.userChatResponse}>
                                    <Typography className={classes.reciverMessageTime}>12:31</Typography>
                                    <Typography className={classes.reciverMessage}>It is a long established fact that a reader will be distracted by the readable  content of a page when looking at its layout. .</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.senderBox}>
                            <Box className={classes.senderBoxImage}>
                                <img src={Sender} alt={''} className={classes.senderImage} />
                            </Box>
                            <Box className={classes.messageBox}>
                                <Typography className={classes.senderName}>Esther Howard</Typography>
                                <Box className={classes.userChatResponse}>
                                    <Typography className={classes.senderMessage}>It is a long established fact that a reader will be distracted by the readable  content of a page when looking at its layout. .</Typography>
                                    <Typography className={classes.senderMessageTime}>12:31</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.reciverBox}>
                            <Box className={classes.messageBox}>
                                <Box className={classes.userChatResponse}>
                                    <Typography className={classes.reciverMessageTime}>12:31</Typography>
                                    <Typography className={classes.reciverMessage}>It is a long established fact that a reader will be distracted by the readable  content of a page when looking at its layout. .</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.senderBox}>
                            <Box className={classes.senderBoxImage}>
                                <img src={Sender} alt={''} className={classes.senderImage} />
                            </Box>
                            <Box className={classes.messageBox}>
                                <Typography className={classes.senderName}>Esther Howard</Typography>
                                <Box className={classes.userChatResponse}>
                                    <Typography className={classes.senderMessage}>It is a long established fact that a reader will be distracted by the readable  content of a page when looking at its layout. .</Typography>
                                    <Typography className={classes.senderMessageTime}>12:31</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.reciverBox}>
                            <Box className={classes.messageBox}>
                                <Box className={classes.userChatResponse}>
                                    <Typography className={classes.reciverMessageTime}>12:31</Typography>
                                    <Typography className={classes.reciverMessage}>It is a long established fact that a reader will be distracted by the readable  content of a page when looking at its layout. .</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.senderBox} ref={scrollRef}>
                            <Box className={classes.senderBoxImage}>
                                <img src={Sender} alt={''} className={classes.senderImage} />
                            </Box>
                            <Box className={classes.messageBox}>
                                <Typography className={classes.senderName}>Esther Howard</Typography>
                                <Box className={classes.userChatResponse}>
                                    <Typography className={classes.senderMessage}>It is a long established fact that a reader will be distracted by the readable  content of a page when looking at its layout. .</Typography>
                                    <Typography className={classes.senderMessageTime}>12:31</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.messageSendTextFieldBox}>
                            <Box className={classes.messageTextFieldBox}>
                                <ChatTextField className={classes.newsLetterInput} type="email" name="email" autoComplete="email"
                                    InputProps={{
                                        classes: {
                                            input: classes.multilineColor
                                        },
                                        startAdornment: <InputAdornment position="start" sx={{ cursor: 'pointer' }} onClick={handleEmojiOpen}><BsEmojiSmile /></InputAdornment>,
                                        endAdornment: <InputAdornment position="start">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <AttachFileIcon sx={{ color: '#fff', cursor: 'pointer' }} />
                                                <input type="file" style={{ position: 'absolute', width: '100%', opacity: 0 }} />
                                            </IconButton>
                                            {/* <AttachFileIcon><input type="file" hidden style={{ position: 'relative' }} /></AttachFileIcon> */}
                                        </InputAdornment>
                                    }} />
                            </Box>
                            <Box className={classes.messageSendBox}>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <SendIcon sx={{ color: '#FF1C51' }} />
                                </IconButton>
                            </Box>
                        </Box>
                        {emojiOpen ? <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%', marginTop: '5px' }}></Picker> : null}
                    </Box>
                </DialogContent>
                <IconButton className={classes.customizedButton} onClick={handleChatClose} >
                    <CloseIcon fontSize={'large'} />
                </IconButton>
            </Dialog>
        </>

    )
}

export default ChatComponent
