import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Box, Typography, Button, FormControl, Grid, MenuItem, InputLabel, IconButton, Switch } from '@mui/material'
import './steper.css';
import { useStyles } from '../../constant/customStyle'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { categoryData } from '../../constant/dropdown/category'
import { BootstrapInput } from '../../component/Textfield/Bootstrap'
import moment from 'moment'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IoMdAddCircle } from "react-icons/io"
import { HiMinusCircle } from "react-icons/hi"
import profile from '../../assets/profile.png'
import Group from "../../assets//Group 65.png"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'



const steps = [
    '',
    '',
    '',
    '',
    '',
]

const buttonStep = [
    {
        id: 1,
        name: 'Fixed Price'
    },
    {
        id: 2,
        name: 'Timed  Auction'
    },
    {
        id: 3,
        name: 'Ongoing Auction'
    },
    {
        id: 4,
        name: 'For Subscriber'
    }
]

const CustomStepper = () => {
    const classes = useStyles()

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [selectItem, setSelectedItem] = useState(1)
    const [inputList, setInputList] = useState([{ royalties: '', name: '' }])
    const [switchState, setSwitchState] = useState(false)

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddClick = () => {
        setInputList([...inputList, { royalties: '', name: '' }]);
    }

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleSwitchChange = (event) => {
        setSwitchState(!switchState)
    }

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChange = () => {

    }

    const SelectedItem = (id) => {
        console.log('id', id)
        setSelectedItem(id)
    }
    return (
        <>
            <React.Fragment>
                {activeStep + 1 === 1 ?
                    <Box>
                        <Grid container spacing={2} className={classes.gridStepersCreateSpacing}>
                            <Grid item xs={12} sm={12} lg={6} md={6}>
                                <Box display={'flex'} sx={{ borderBottom: '2px solid #FF1C51', paddingBottom: '5.5px', marginBottom: '13px' }}>
                                    <Typography sx={{ fontFamily: 'Glacial Indifference', fontSize: '25px', fontWeight: '900', marginRight: '10px', marginRight: '10px', color: '#fff' }}>Create</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={12} className={classes.gridStepersSpacingCreateBox}>
                            <Grid item xs={12} sm={12} lg={6} md={6}>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Box className={classes.selectEvent} onClick={handleNext}>
                                        <Typography className={classes.selectText}>Create Media</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={6} md={6}>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Box className={classes.selectEvent} onClick={handleNext}>
                                        <Typography className={classes.selectText}>Create Event</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    :
                    activeStep + 1 === 2 ?
                        <Box>
                            <Grid container spacing={2} className={classes.gridStepersSpacing}>
                                <Grid item xs={12} sm={12} lg={6} md={6}>
                                    <FormControl variant="standard" fullWidth>
                                        <Select
                                            sx={{ fontFamily: 'poppins', fontSize: '20px' }}
                                            inputProps={{ classes: { icon: classes.icon } }}
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={10}
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
                                            <MenuItem value={10}>Choose Media Type</MenuItem>
                                            {categoryData.map((data, index) => {
                                                return (
                                                    <MenuItem value={data.value} key={index++}>{data.name}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} className={classes.gridStepersSpacing}>
                                <Grid item xs={12} sm={12} lg={4} md={4}>
                                    <Box className={classes.subHeadingStepersSection}>
                                        <Typography className={classes.subHeadingStepers}>Type of scale</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className={classes.gridStepersSpacing}>
                                {buttonStep.map((text, index) => {
                                    return (
                                        <Grid item xs={12} sm={12} lg={3} md={3} sx={{ marginBottom: '76px' }}>
                                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                <Box className={[classes.selectType, selectItem === text.id ? classes.selectTypeActive : '']} onClick={() => SelectedItem(text.id)} key={text.id}>
                                                    <Typography className={classes.selectSecondText}>{text.name}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )
                                })}
                                {selectItem === 1 ?
                                    <Grid container spacing={2} sx={{ padding: '0px 40px', marginBottom: '70px' }}>
                                        <Grid item xs={12} sm={12} lg={5} md={5}>
                                            <FormControl variant="standard" fullWidth className='steper-label'>
                                                <InputLabel shrink htmlFor="bootstrap-input">
                                                    Instant Price
                                                </InputLabel>
                                                <BootstrapInput id="bootstrap-input" fullWidth placeholder='Enter the price of one piece' />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    : selectItem === 2 ?
                                        <Grid container spacing={4} sx={{ padding: '0px 40px', marginBottom: '70px' }}>
                                            <Grid item xs={12} sm={12} lg={3} md={3}>
                                                <FormControl variant="standard" fullWidth className='steper-label'>
                                                    <InputLabel shrink htmlFor="bootstrap-input">
                                                        Starting Date
                                                    </InputLabel>
                                                    <BootstrapInput type="datetime-local" size='small' fullWidth inputProps={{ min: moment(new Date).format("YYYY-MM-DD HH:mm").replace(' ', 'T') }} InputProps={{ style: { color: '#fff' }, }} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={12} lg={3} md={3}>
                                                <FormControl variant="standard" fullWidth className='steper-label'>
                                                    <InputLabel shrink htmlFor="bootstrap-input">
                                                        Expiration Date
                                                    </InputLabel>
                                                    <BootstrapInput type="datetime-local" size='small' fullWidth inputProps={{ min: moment(new Date).format("YYYY-MM-DD HH:mm").replace(' ', 'T') }} InputProps={{ style: { color: '#fff' } }} />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        :
                                        selectItem === 3 ?
                                            <Grid container spacing={2} sx={{ padding: '0px 40px', marginBottom: '70px' }}>
                                                <Grid item xs={12} sm={12} lg={5} md={5}>
                                                    <FormControl variant="standard" fullWidth className='steper-label'>
                                                        <InputLabel shrink htmlFor="bootstrap-input">
                                                            Minimum bid
                                                        </InputLabel>
                                                        <BootstrapInput id="bootstrap-input" fullWidth placeholder='Enter the Minimum bid' />
                                                    </FormControl>
                                                </Grid>
                                            </Grid> :
                                            null
                                }
                            </Grid>
                        </Box>
                        :
                        activeStep + 1 === 3 ?
                            <Box>
                                <Grid container spacing={2} className={classes.gridStepersSpacing}>
                                    <Grid item xs={12} sm={12} lg={4} md={4}>
                                        <Box className={classes.subHeadingStepersSection}>
                                            <Typography className={classes.subHeadingStepers}>Royalties</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={6} sx={{ padding: '0px 40px', marginBottom: '70px' }}>
                                    {inputList.map((x, i) => {
                                        return (
                                            <>
                                                <Grid item xs={12} sm={12} lg={6} md={6}>
                                                    <FormControl variant="standard" fullWidth className='steper-label'>
                                                        <InputLabel shrink htmlFor="bootstrap-input">
                                                            Name
                                                        </InputLabel>
                                                        <BootstrapInput id="bootstrap-input" fullWidth placeholder='E.g Redeemable' />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} lg={6} md={6}>
                                                    <Box className={classes.addNewFieldSection}>
                                                        <FormControl variant="standard" fullWidth className='steper-label'>
                                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                                Royalties
                                                            </InputLabel>
                                                            <BootstrapInput id="bootstrap-input" fullWidth placeholder='0.00' />
                                                        </FormControl>
                                                        {i === 0 ?
                                                            <IconButton aria-label="display more actions" edge="end" onClick={handleAddClick} className={classes.addFieldIconsButton}>
                                                                <IoMdAddCircle className={classes.addFieldIcons} />
                                                            </IconButton>
                                                            :
                                                            <IconButton aria-label="display more actions" edge="end" onClick={() => handleRemoveClick(i)} className={classes.addFieldIconsButton}>
                                                                <HiMinusCircle className={classes.addFieldIcons} />
                                                            </IconButton>}
                                                    </Box>
                                                </Grid>
                                            </>
                                        )
                                    })}

                                    <Grid item xs={12} sm={12} lg={6} md={6}>
                                        <FormControl variant="standard" fullWidth className='steper-label'>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                Description (Optional)
                                            </InputLabel>
                                            <BootstrapInput id="bootstrap-input" fullWidth placeholder='e.g. After purchasing...' />
                                        </FormControl>
                                    </Grid>
                                    {/* {inputList.map((x, i) => {
                                        return (
                                            <Grid item xs={12} sm={12} lg={6} md={6}>
                                                <Box className={classes.addNewFieldSection}>
                                                    <FormControl variant="standard" fullWidth className='steper-label'>
                                                        <InputLabel shrink htmlFor="bootstrap-input">
                                                            Royalties
                                                        </InputLabel>
                                                        <BootstrapInput id="bootstrap-input" fullWidth placeholder='0.00' />
                                                    </FormControl>
                                                    {i === 0 ?
                                                        <IconButton aria-label="display more actions" edge="end" onClick={handleAddClick} className={classes.addFieldIconsButton}>
                                                            <IoMdAddCircle className={classes.addFieldIcons} />
                                                        </IconButton>
                                                        :
                                                        <IconButton aria-label="display more actions" edge="end" onClick={() => handleRemoveClick(i)} className={classes.addFieldIconsButton}>
                                                            <HiMinusCircle className={classes.addFieldIcons} />
                                                        </IconButton>}
                                                </Box>
                                            </Grid>
                                        )
                                    })} */}

                                    <Grid item xs={12} sm={12} lg={6} md={6}>
                                        <FormControl variant="standard" fullWidth className='steper-label'>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                Properties (Optional)
                                            </InputLabel>
                                            <BootstrapInput id="bootstrap-input" fullWidth placeholder='e.g. size' />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                            :
                            activeStep + 1 === 4 ?
                                <Box>
                                    <Grid container spacing={2} className={classes.gridStepersSpacing}>
                                        <Grid item xs={12} sm={12} lg={4} md={4}>
                                            <Box className={classes.subHeadingStepersSection}>
                                                <Typography className={classes.subHeadingStepers}>Upload</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={8} className={classes.gridStepersSpacing}>
                                        <Grid item xs={12} sm={12} lg={6} md={6}>
                                            <Box className={classes.boxUpload}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography className={classes.uploadText}>Upload Original File</Typography>
                                                    <Typography className={classes.uploadDetails}>PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</Typography>
                                                </Box>
                                                <Box>
                                                    <Button variant="contained" component="label" sx={{
                                                        backgroundColor: '#FF1C51', padding: '4px 34px', borderRadius: '30px', fontFamily: 'poppins', textTransform: 'capitalize', fontSize: '18px', fontWeight: '500', boxShadow: 'none',
                                                        '&:hover': {
                                                            backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                                        }
                                                    }}>Upload<input type="file" hidden /></Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={6} md={6}>
                                            <Box className={classes.boxUpload}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography className={classes.uploadText}>Upload Sample File</Typography>
                                                    <Typography className={classes.uploadDetails}>PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</Typography>
                                                </Box>
                                                <Box>
                                                    <Button variant="contained" component="label" sx={{
                                                        backgroundColor: '#FF1C51', padding: '4px 34px', borderRadius: '30px', fontFamily: 'poppins', textTransform: 'capitalize', fontSize: '18px', fontWeight: '500', boxShadow: 'none',
                                                        '&:hover': {
                                                            backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                                        }
                                                    }}>Upload<input type="file" hidden /></Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={6} md={6}>
                                            <Box className={classes.boxUpload}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography className={classes.uploadText}>Add to collection</Typography>
                                                </Box>
                                                <Box>
                                                    <Button variant="contained" component="label" sx={{
                                                        backgroundColor: '#FF1C51', padding: '4px 34px', borderRadius: '30px', fontFamily: 'poppins', textTransform: 'capitalize', fontSize: '18px', fontWeight: '500', boxShadow: 'none',
                                                        '&:hover': {
                                                            backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                                        }
                                                    }}>Creat BPE 721</Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={6} md={6}>
                                            <Box className={classes.boxUpload}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography className={classes.uploadText}>Unlock Once Purchased</Typography>
                                                    <Typography className={classes.uploadDetails}>Content will be unlocked after
                                                        successful transaction</Typography>
                                                </Box>
                                                <Box>
                                                    <Switch checked={switchState} size={'small'} onChange={handleSwitchChange} name="jason"
                                                        classes={{
                                                            track: classes.switch_track,
                                                            switchBase: classes.switch_base,
                                                            colorPrimary: classes.switch_primary,
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={6} md={6}>
                                            <Box className={classes.boxUpload}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography className={classes.uploadText}>New Collection</Typography>
                                                </Box>
                                                <Box>
                                                    <Button variant="contained" component="label" sx={{
                                                        backgroundColor: '#FF1C51', padding: '4px 34px', borderRadius: '30px', fontFamily: 'poppins', textTransform: 'capitalize', fontSize: '18px', fontWeight: '500', boxShadow: 'none',
                                                        '&:hover': {
                                                            backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                                        }
                                                    }}>Upload<input type="file" hidden /></Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                :
                                <Box>
                                    <Grid container spacing={2} className={classes.gridStepersSpacing}>
                                        <Grid item xs={12} sm={12} lg={4} md={4}>
                                            <Box className={classes.subHeadingStepersSection}>
                                                <Typography className={classes.subHeadingStepers}>Add details</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} className={classes.gridStepersSpacing}>
                                        <Grid item xs={12} sm={12} lg={6} md={6}>
                                            <Grid container spacing={2} className={classes.gridStepersSpacing}>
                                                <Grid item xs={12} sm={12} lg={12} md={12} mb={5}>
                                                    <FormControl variant="standard" fullWidth className='steper-label'>
                                                        <InputLabel shrink htmlFor="bootstrap-input">
                                                            Name
                                                        </InputLabel>
                                                        <BootstrapInput id="bootstrap-input" fullWidth placeholder='Enter Album name' />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={12} lg={12} md={12}>
                                                    <FormControl variant="standard" fullWidth className='steper-label'>
                                                        <InputLabel shrink htmlFor="bootstrap-input">
                                                            Artist
                                                        </InputLabel>
                                                        <BootstrapInput id="bootstrap-input" fullWidth placeholder='Enter artist name' />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={6} md={6}>
                                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                <Box sx={{
                                                    width: '214px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(255 255 255 / 18%)', padding: '10px 10px',
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
                                                    <Box sx={{ position: 'relative', width: '191px' }}>
                                                        <img src={Group} alt='' className={classes.img} />
                                                        <Box sx={{ position: 'absolute', bottom: '20px', left: '5px' }}>
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
                                    </Grid>
                                </Box>
                }
                {activeStep > 0 &&
                    <Grid container spacing={2} sx={{ marginBottom: '80px' }}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Button variant="contained" sx={{
                                    backgroundColor: '#FF1C51', padding: '10px 60px', borderRadius: '30px', fontFamily: 'poppins', textTransform: 'capitalize', fontSize: '18px', fontWeight: '500', boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                    },
                                }} onClick={handleBack}>Previous</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Button variant="contained" sx={{
                                    backgroundColor: '#FF1C51', padding: '10px 60px', borderRadius: '30px', fontFamily: 'poppins', textTransform: 'capitalize', fontSize: '18px', fontWeight: '500', boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                    },
                                }} onClick={activeStep === steps.length - 1 ? handleReset : handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                            </Box>
                        </Grid>
                    </Grid>}
            </React.Fragment >
            <Stepper activeStep={activeStep} sx={{ zIndex: 1 }}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps} sx={{ zIndex: 99 }}>
                            <StepLabel {...labelProps}>{ }</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Box sx={{ position: 'relative', bottom: '15px', border: '1px solid #FF1C51' }} />
        </>
    )
}

export default CustomStepper
