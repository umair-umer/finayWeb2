import React, { useState, useEffect } from 'react'
import { Box, Container } from '@mui/material'
import { useStyles } from '../../constant/customStyle'
import HeaderComponent from '../../component/Header'
import SongPlayer from '../../component/SongPlayer'
import CustomStepper from '../../component/Stepper'
import ChatComponent from '../../component/Chat'

const Create = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const blurStatus = () => {
        setOpen(!open)
    }

    useEffect(() => {
        document.title = "Create | Finay"
    }, [])

    return (
        <Box sx={{ position: 'relative' }} className={open ? classes.blur : ''}>
            <HeaderComponent />
            <Container className={classes.exploreContainer} sx={{ marginBottom: '150px' }}>
                <Box className={classes.tabFeedBox}>
                    <CustomStepper />
                </Box>
            </Container>
            <Box style={{ width: "auto", position: 'fixed', bottom: 200, left:0, zIndex: 99 }}>
                <ChatComponent blur={blurStatus} />
            </Box>
            <Box sx={{ marginTop: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SongPlayer blur={blurStatus} />
            </Box>
        </Box>
    )
}

export default Create