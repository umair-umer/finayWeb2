import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material'
import { useStyles } from '../../constant/customStyle'
import CustomTabsComponent from '../../component/Tabs'
import TabComponentFeed from '../../tabsCompoent/TabComponentFeed'
import TabComponentFollowers from '../../tabsCompoent/TabComponentFollowers'
import TabComponentConnect from '../../tabsCompoent/TabComponentConnect'
import HeaderComponent from '../../component/Header'
import SongPlayer from '../../component/SongPlayer'
import ChatComponent from '../../component/Chat'

const communityTabs = [
    {
        name: 'Feed',
        value: '1'
    },
    {
        name: 'Followers',
        value: '2'
    },
    {
        name: 'Connect',
        value: '3'
    },
]



const CommunityScreen = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const blurStatus = () => {
        setOpen(!open)
    }

    const tabsPanelCommunity = [
        {
            component: <TabComponentFeed />,
            value: '1'
        },
        {
            component: <TabComponentFollowers />,
            value: '2'
        },
        {
            component: <TabComponentConnect />,
            value: '3'
        },
    ]

    useEffect(() => {
        document.title = "Profile | Community"
      }, [])

    return (
        <Box sx={{ position: 'relative' }} className={open ? classes.blur : ''}>
            <HeaderComponent />
            <Container maxWidth="md" className={classes.exploreContainer} sx={{ marginBottom: '150px', padding: '0px 60px !important' }}>
                <CustomTabsComponent tabs={communityTabs} tabsPanel={tabsPanelCommunity} />
            </Container>
            <Box style={{ width: "auto", position: 'fixed', bottom: 200, left: 0, zIndex: 99 }}>
                <ChatComponent blur={blurStatus} />
            </Box>
            <Box sx={{ marginTop: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SongPlayer blur={blurStatus} />
            </Box>
        </Box>
    )
}

export default CommunityScreen
