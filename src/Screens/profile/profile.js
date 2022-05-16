import React, { useState, useEffect } from 'react'
import './profile.css'
import Cover from '../../assets/cover.png'
import Profile from '../../assets/profile.png'
import ChatIcon from '@mui/icons-material/Chat';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr';
import SettingsIcon from '@mui/icons-material/Settings';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CustomTabsComponent from '../../component/Tabs'
import { useStyles } from '../../constant/customStyle'
import EditIcon from '@mui/icons-material/Edit';
import { Button, Box, IconButton, Container, Grid, Typography } from '@mui/material'
import TabComponentAbout from '../../tabsCompoent/TabComponentAbout'
import TabComponentMedia from '../../tabsCompoent/TabComponentMedia'
import { HiLink } from 'react-icons/hi'
import HeaderComponent from '../../component/Header'
import SongPlayer from '../../component/SongPlayer'
import ChatComponent from '../../component/Chat'
import { useNavigate, Link } from 'react-router-dom'

const profileTabs = [
  {
    name: 'About',
    value: '1'
  },
  {
    name: 'Media',
    value: '2'
  },
  // {
  // name: <Button sx={{backgroundColor:"#FF1C51",
  // borderRadius:"25px",
  // padding:"7px 11px 7px 11px !important",
  // fontFamily:"GlacialIndifferenceRegular !important",
  // fontSize:"15px !important",

  //  ':hover':{backgroundColor:"#FF1C51"},}} >Advanced Setting</Button>,
  // value: '3',
  // },

]

function ProfileScreen() {
  const [open, setOpen] = useState(false)
  const [chatStatus, setChatStatus] = useState(false)
  const [calendarStatus, setCalendarStatus] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [commentMore, setCommentMore] = useState(false)


  const tabsPanelProfile = [
    {
      component: <TabComponentAbout />,
      value: '1'
    },
    {
      component: <TabComponentMedia />,
      value: '2'
    },

  ]
  const classes = useStyles()
  let navigate = useNavigate()

  const handleSettingRoute = () => {
    navigate(`/settings`)
  }

  const blurStatus = () => {
    setOpen(!open)
  }

  const chatOpen = () => {
    setChatStatus(true)
    setCalendarStatus(false)
    setOpen(true)
  }

  const modalStatus = () => {
    setChatStatus(false)
    setCalendarStatus(false)
  }

  const calendarModalOpen = () => {
    setCalendarStatus(true)
    setChatStatus(false)
    setOpen(true)
  }

  useEffect(() => {
    document.title = "Profile | Finay"
  }, [])


  return (
    <Box className={open ? classes.blur : ''}>
      <HeaderComponent blur={blurStatus} />
      {/* <ResponsiveAppBar /> */}
      <Box>
        <img src={Cover} style={{ width: "100%" }} />
      </Box>
      <Box>
        <Container maxWidth="xl" sx={{ position: 'relative' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.topBannerButton}>
                <Button variant="contained" className={classes.topButtonSection}>Backstage Pass</Button>
                <Box className={classes.iconButton1}>
                  <GrFacebookOption className={classes.socialIcons} />
                </Box>
                <Box className={classes.iconButton1}>
                  <GrInstagram className={classes.socialIcons} />
                </Box>
                <Box className={classes.iconButton1}>
                  <GrTwitter className={classes.socialIcons} />
                </Box>
                <Link to="/settings">
                  <Box className={classes.iconButton1} >
                    <SettingsIcon className={classes.socialIcons} />
                  </Box>
                </Link>
                {/* <Box className={classes.editIconButton}>
                  <EditIcon className={classes.editIcons} onClick={handleSettingRoute} />
                </Box> */}
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box className={classes.topBannerButton} sx={{justifyContent:'flex-end'}}>
                <Box sx={{marginTop:'7px'}} className={classes.iconButton1}>
                  <AddAPhotoIcon className={classes.socialIcons} />
                </Box>
              </Box>

            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} className={classes.top}>
              <Box className={classes.profile}>
                <img src={Profile} className={classes.avatar} />
                <Box className={classes.online} />
                <IconButton className={classes.editAvatar}>
                  {/* <EditIcon className={classes.editIcons}>DANIYAL</EditIcon> */}
                  <EditIcon className={classes.editIcons} />
                  {/* <input type="file" /s> */}
                </IconButton>
                {/* <input type="file"  /> */}
              </Box>
              <Box className={classes.avatarTitle}>
                <Typography className={classes.name}>Jane Doe</Typography>
                <IconButton>
                  <EditIcon className={classes.editIconProfile} />
                </IconButton>
              </Box>
              <Box className={classes.hobbies}>
                <Typography className={classes.hobbiesText}>Teacher, Guitarist, Producer</Typography>
              </Box>
              <Box className={classes.followerSection}>
                <Typography className={classes.followers}>2,300 Supporters</Typography>
                <Typography className={classes.followers}>834 Supporting </Typography>
              </Box>
              <Box className={classes.followersButtonSection}>
                <Button variant="contained" className={classes.buttonFollow}>Support</Button>
              </Box>
              <Box className={classes.followButton}>
                <IconButton onClick={chatOpen}>
                  <ChatIcon className={classes.socialButtons} />
                </IconButton>
                <IconButton onClick={calendarModalOpen}>
                  <DateRangeIcon className={classes.socialButtons} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTabsComponent tabs={profileTabs} tabsPanel={tabsPanelProfile} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box className={classes.gridFollowers}>
                <Box className={classes.followsSection}>
                  <Typography className={classes.titleFollower}>Supporters</Typography>
                </Box>
                <Box className={classes.groupFollowers}>
                  {Array.from({ length: 9 }).map((item, index) => (
                    <Box className={classes.followersProfile}>
                      <img src={Profile} className={classes.img} />
                      <Typography className={classes.followerName}>Black Glass</Typography>
                    </Box>
                  ))}
                  {showMore ?
                    <>
                      {Array.from({ length: 6 }).map((item, index) => (
                        <Box className={classes.followersProfile}>
                          <img src={Profile} className={classes.img} />
                          <Typography className={classes.followerName}>Black Glass</Typography>
                        </Box>
                      ))}
                    </>
                    :
                    null
                  }
                </Box>
                <Box className={classes.seeAllSection}>
                  <Button fullWidth variant="text" className={classes.seeAll} onClick={() => setShowMore(!showMore)}>{showMore ? "See Less" : "See all"}</Button>
                </Box>
              </Box>
              <Box className={classes.space} />
              <Box className={classes.commentGrid}>
                <Box className={classes.paddingSpace}>
                  <Box className={classes.userDetails}>
                    <Box className={classes.userImageSpace}>
                      <img src={Profile} alt='' className={classes.userImage} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                      <Typography className={classes.userName}>Black Glass</Typography>
                      <Typography className={classes.userTime}>2 hours ago</Typography>
                    </Box>
                  </Box>

                  <Box className={classes.userTextBox}>
                    <Typography className={classes.userText}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                  </Box>

                  <Box className={classes.songSection}>
                    <Box className={classes.songLinkSection}>
                      <HiLink className={classes.linkIcon} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                      <Typography className={classes.songName}>Kendrick Lamar - money tree.mp3</Typography>
                      <Typography className={classes.songSize}>2.80 mb</Typography>
                    </Box>
                  </Box>

                  <Box className={classes.commentButtonBox}>
                    <Button variant="contained" fullWidth={true} className={classes.commentButton} onClick={() => setCommentMore(!commentMore)}>{commentMore ? 'view 3 more comments' : 'hide 3 last comments'}</Button>
                  </Box>

                  {Array.from({ length: 4 }).map((item, index) => (
                    <Box className={classes.followerCommentBox} key={index}>
                      <Box className={classes.userImageSpace}>
                        <img src={Profile} alt='' className={classes.userImage} />
                      </Box>
                      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                        <Box display={'flex'} >
                          <Typography className={[classes.songName, classes.spaceRight]}>Alexey Rybin</Typography>
                          <Typography className={[classes.songSize, classes.spaceTop]}>5:54 pm</Typography>
                        </Box>
                        <Typography className={classes.followerComment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                      </Box>
                    </Box>
                  ))}

                  {commentMore ?
                    <>
                      {Array.from({ length: 3 }).map((item, index) => (
                        <Box className={classes.followerCommentBox} key={index}>
                          <Box className={classes.userImageSpace}>
                            <img src={Profile} alt='' className={classes.userImage} />
                          </Box>
                          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                            <Box display={'flex'} >
                              <Typography className={[classes.songName, classes.spaceRight]}>Alexey Rybin</Typography>
                              <Typography className={[classes.songSize, classes.spaceTop]}>5:54 pm</Typography>
                            </Box>
                            <Typography className={classes.followerComment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                          </Box>
                        </Box>
                      ))}
                    </>
                    : null}
                </Box>
                <Box sx={{ width: '100%', backgroundColor: '#484848', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
                  <Box sx={{ padding: '44.4px 33px 19px' }}>
                    <Box display={'flex'} sx={{ marginBottom: '14px' }}>
                      <Box sx={{ width: '49px', height: '49px', marginRight: '10px' }}>
                        <img src={Profile} alt='' className={classes.img} />
                      </Box>
                      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                        <textarea style={{ width: '210px', backgroundColor: '#A4A4A4', color: '#fff', border: "none", outline: "none", resize: 'none', borderRadius: '10px', padding: '5px 10px 5px 5px' }} id="story" name="story"
                          rows="5">
                        </textarea>
                      </Box>
                    </Box>
                    <Box sx={{ width: '100%', marginBottom: '24px' }}>
                      <Button variant="contained" fullWidth={true} className={classes.postCommentButton}>Post A Comment</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box style={{ width: "auto", position: 'fixed', bottom: 200, left:0, zIndex: 99 }}>
            <ChatComponent blur={blurStatus} modal={chatStatus} calendarModal={calendarStatus} chatModalState={modalStatus} />
           
          </Box>
          <Box sx={{ marginTop: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SongPlayer blur={blurStatus} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}


export default ProfileScreen;