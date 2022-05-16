import React from 'react';
import { Box, Typography, Divider } from '@mui/material'
import { useStyles } from '../constant/customStyle'
import Profile from '../assets/profile.png'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FeedBackImage from '../assets/feedbackimage.png'

const TabComponentFeed = () => {
    const classes = useStyles()

    return (
        <Box className={classes.tabFeedBox}>
            <Box className={classes.feedbackBox}>
                <Box className={classes.feedbackUserBox}>
                    <Box className={classes.feedbackUserImage}>
                        <img src={Profile} alt='' className={classes.img} />
                    </Box>
                    <Box>
                        <Typography className={classes.feedbackUserName}>Black Glass</Typography>
                        <Typography className={classes.feedbackUserTime}>2 hours ago</Typography>
                    </Box>
                </Box>
                <Box className={classes.feedbackSpaceBottom}>
                    <Typography className={classes.feedbackUserPost}>
                        If you were one of the millions of people caught up in ‘Powerball fever’ yesterday in the US, you can be forgiven for wanting a little slice of the $1.6 billion jackpot, even if the existence of such a large jackpot is utter insanity.
                    </Typography>
                </Box>
                <Divider sx={{ background: 'rgba(255,255,255,0.50)', height: 1, borderRadius: 20 }} />
                <Box className={classes.feedbackSocial}>
                    <Box className={classes.feedbackSocialDetails}>
                        <MessageIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                    <Box className={classes.feedbackSocialDetails}>
                        <ShareIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                    <Box className={classes.feedbackSocialDetails}>
                        <FavoriteIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.feedbackBox}>
                <Box className={classes.feedbackUserBox}>
                    <Box className={classes.feedbackUserImage}>
                        <img src={Profile} alt='' className={classes.img} />
                    </Box>
                    <Box>
                        <Typography className={classes.feedbackUserName}>Black Glass</Typography>
                        <Typography className={classes.feedbackUserTime}>2 hours ago</Typography>
                    </Box>
                </Box>
                <Box className={classes.feedbackSpaceBottom}>
                    <Box className={classes.img} >
                        <img src={FeedBackImage} alt='' className={classes.img} />
                    </Box>
                </Box>
                <Divider sx={{ background: 'rgba(255,255,255,0.50)', height: 1, borderRadius: 20 }} />
                <Box className={classes.feedbackSocial}>
                    <Box className={classes.feedbackSocialDetails}>
                        <MessageIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                    <Box className={classes.feedbackSocialDetails}>
                        <ShareIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                    <Box className={classes.feedbackSocialDetails}>
                        <FavoriteIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.feedbackBox}>
                <Box className={classes.feedbackUserBox}>
                    <Box className={classes.feedbackUserImage}>
                        <img src={Profile} alt='' className={classes.img} />
                    </Box>
                    <Box>
                        <Typography className={classes.feedbackUserName}>Black Glass</Typography>
                        <Typography className={classes.feedbackUserTime}>2 hours ago</Typography>
                    </Box>
                </Box>
                <Box className={classes.feedbackSpaceBottom}>
                    <Typography className={classes.feedbackUserPost}>
                        If you were one of the millions of people caught up in ‘Powerball fever’ yesterday in the US, you can be forgiven for wanting a little slice of the $1.6 billion jackpot, even if the existence of such a large jackpot is utter insanity.
                    </Typography>
                </Box>
                <Divider sx={{ background: 'rgba(255,255,255,0.50)', height: 1, borderRadius: 20 }} />
                <Box className={classes.feedbackSocial}>
                    <Box className={classes.feedbackSocialDetails}>
                        <MessageIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                    <Box className={classes.feedbackSocialDetails}>
                        <ShareIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                    <Box className={classes.feedbackSocialDetails}>
                        <FavoriteIcon className={classes.feedbackIcon} />
                        <Typography className={classes.feedbackText}>22</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TabComponentFeed
