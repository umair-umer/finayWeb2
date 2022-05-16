import React, { useState } from 'react'
import { Box, Typography, IconButton, Button, FormControl, MenuItem, Grid } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { mediaData } from '../constant/dropdown/category'
import { useStyles } from '../constant/customStyle'
import profile from '../assets/profile.png'
import Group from "../assets//Group 65.png"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'

const TabComponentMedia = () => {
    const [value, setValue] = useState("choose")
    const classes = useStyles()

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Box sx={{ borderRadius: '15px', backgroundColor: '#7070704a', paddingBottom: '60px', padding: '30px 0px 10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '70px', marginRight: '25px', marginLeft: '25px' }}>
                <Box display={'flex'} sx={{ borderBottom: '2px solid #FF1C51', width: '50%', marginBottom: '13px' }}>
                    <Typography sx={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '600', marginRight: '10px', marginRight: '10px' }}>Jane's Media</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'flex-end'} sx={{ paddingBottom: '5.5px', width: '50%', marginBottom: '13px', display: 'flex', justifyContent: 'flex-end' }}>
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
                            <MenuItem value={"choose"} disabled>Choose Media Type</MenuItem>
                            {mediaData.map((data, index) => {
                                return (
                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box className='' sx={{padding:'0px 5px'}}>
                <Box className={`grid-media-scroll ${classes.profileGrid}`} sx={{padding:'0px 15px',maxHeight:'800px',overflowY:'auto'}}>
                    {Array.from({ length: 12 }).map((item, index) => (
                        <Box className={classes.profileGrid25}>
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
                            <Box sx={{ position: 'relative' }}>
                                <img src={Group} alt='' className={classes.img} />
                                <Box sx={{ position: 'absolute', bottom: '8px', left: '5px' }}>
                                    <Typography sx={{ color: '#fff', fontSize: '13px', fontFamily: 'poppins', fontWeight: '500' }}>Abstract smoke Red blue</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.profileCardBottom}>
                                <Typography sx={{ fontWeight: '900', color: '#fff', fontSize: '12px' }}>$ 2.05</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FavoriteIcon sx={{ fontSize: '14px', marginRight: '5px' }} />
                                    <Typography sx={{ fontWeight: '900', color: '#fff', fontSize: '12px' }}>22</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default TabComponentMedia;
