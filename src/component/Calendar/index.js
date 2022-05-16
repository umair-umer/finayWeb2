import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import './calendar.css'
import buildCalendar from './build'
import { Box, Typography, IconButton, TextField, Button } from '@mui/material'
import { BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs'
import { AiOutlineUnorderedList, AiOutlineEdit } from 'react-icons/ai'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Carousel, { consts } from 'react-elastic-carousel'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const monthsName = [
    {
        id: 1,
        name: "January"
    },
    {
        id: 2,
        name: "February"
    },
    {
        id: 3,
        name: "March",
    },
    {
        id: 4,
        name: "April"
    }, {
        id: 5,
        name: "May"
    },
    {
        id: 6,
        name: "June"
    },
    {
        id: 7,
        name: "July",
    },
    {
        id: 8,
        name: "August",
    },
    {
        id: 9,
        name: "September"
    },
    {
        id: 10,
        name: "October",
    },
    {
        id: 11,
        name: "November"
    },
    {
        id: 12,
        name: "December"
    }
]

const time = [
    {
        id: 1,
        event: '',
        add: true
    },
    {
        id: 2,
        event: '',
        add: false
    },
    {
        id: 3,
        event: '',
        add: false
    },
    {
        id: 4,
        event: '',
        add: false
    },
    {
        id: 5,
        event: '',
        add: false
    },
    {
        id: 6,
        event: '',
        add: false
    },
    {
        id: 7,
        event: '',
        add: false
    },
    {
        id: 8,
        event: '',
        add: false
    },
    {
        id: 9,
        event: '',
        add: false
    },
    {
        id: 10,
        event: '',
        add: false
    },
    {
        id: 11,
        event: '',
        add: false
    },
    {
        id: 12,
        event: '',
        add: false
    },
    {
        id: 13,
        event: '',
        add: false
    },
    {
        id: 14,
        event: '',
        add: false
    },
    {
        id: 15,
        event: '',
        add: false
    },
    {
        id: 16,
        event: '',
        add: false
    },
    {
        id: 17,
        event: '',
        add: false
    },
    {
        id: 18,
        event: '',
        add: false
    },
    {
        id: 19,
        event: '',
        add: false
    },
    {
        id: 20,
        event: 'Publish the song',
        add: false
    },
    {
        id: 21,
        event: 'Publish the song',
        add: false
    },
    {
        id: 22,
        event: 'Publish the song',
        add: false
    },
    {
        id: 23,
        event: 'Publish the song',
        add: false
    },
    {
        id: 24,
        event: '',
        add: false
    },
]

const CalendarComponent = () => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())
    const [year, setYear] = useState(moment().year())
    const [month, setMonth] = useState(moment(value).format('MMMM'))
    const [view, setView] = useState(false)
    const [downArrow, setDownArrow] = useState(false)
    const [upArrow, setUpArrow] = useState(false)

    const carouselRef = useRef(null);
    const breakPoints = [
        { width: 1, itemsToShow: 6 },
        { width: 550, itemsToShow: 6, itemsToScroll: 1 },
        { width: 768, itemsToShow: 6 },
        { width: 1200, itemsToShow: 6 }
    ]

    const isSelected = (day) => {
        return value.isSame(day, "day")
    }

    const beforeToday = (day) => {
        return day.isBefore(new Date(), "day")
    }

    const beforeMonth = (day) => {
        return day.isBefore(new Date(), "month")
    }

    const afterMonth = (day) => {
        return day.isAfter(new Date(), "month")
    }

    const isToday = (day) => {
        return day.isSame(new Date(), "day")
    }

    const dayStyles = (day) => {
        if (beforeMonth(day)) {
            return "before"
        }
        if (afterMonth(day)) {
            return "before"
        }
        if (isSelected(day)) {
            return "selected"
        }
        if (isToday(day)) {
            return "today"
        }
        return ""
    }

    const currMonthName = () => {
        return value.format("MMMM")
    }

    const currYear = () => {
        return value.format("YYYY")
    }

    const prevMonth = () => {
        setDownArrow(false)
        let newMonth = value.subtract(1, "month").format("MMMM")
        if (parseInt(moment().month(newMonth).format("M")) === 1) {
            setUpArrow(true)
        }
        setMonth(newMonth)
        return month
    }

    const nextMonth = () => {
        setUpArrow(false)
        let newMonth = value.add(1, "month").format("MMMM")
        if (parseInt(moment().month(newMonth).format("M")) === 12) {
            setDownArrow(true)
        }
        setMonth(newMonth)
        return month
    }

    const handleYearIncrement = () => {
        let newYear = value.add(1, "year").format("YYYY")
        setYear(newYear)
    }

    const handleYearDecrement = () => {
        let newYear = value.subtract(1, "year").format("YYYY")
        setYear(newYear)
    }

    const handleViewChange = () => {
        setView(!view)
    }

    const addEventCalendar = (id) => {
        time.map((value, key) => {
            if (value.id === id) {
                value.add = true
            }
        })
    }

    const myArrow = ({ type, onClick, isEdge }) => {
        return (
            <>
                {type === consts.PREV ?
                    !upArrow ?
                        <Box onClick={prevMonth}>
                            <Button disabled={upArrow} onClick={onClick} sx={{ minWidth: '10px', padding: 0, height: '10px', top: '-32px', left: '0px', position: 'absolute', display: 'block', width: '100%', textAlign: 'center' }}>
                                <BsChevronCompactUp style={{ color: '#fff', fontSize: '18px' }} />
                            </Button>
                        </Box>
                        : null
                    :
                    !downArrow ?
                        <Box onClick={nextMonth}>
                            <Button disabled={downArrow} onClick={onClick} sx={{ minWidth: '10px', padding: 0, height: '10px', bottom: '-15px', left: '0px', position: 'absolute', display: 'block', width: '100%', textAlign: 'center' }}>
                                <BsChevronCompactDown style={{ color: '#fff', fontSize: '18px' }} />
                            </Button>
                        </Box>
                        :
                        null
                }
            </>
        )
    }

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value, month, time])



    return (
        <>
            <Box className='calendar-container'>
                <Box className='months-container'>
                    <Box className='calendar-name'>Calendar</Box>
                    <Box className='year-container'>
                        <BsChevronCompactLeft onClick={handleYearDecrement} />
                        <Typography noWrap component="span"> {year}</Typography>
                        <BsChevronCompactRight onClick={handleYearIncrement} />
                    </Box>
                    <Carousel disableArrowsOnEnd={false} breakPoints={breakPoints} ref={carouselRef} verticalMode={true} itemsToScroll={1} enableAutoPlay={false} renderArrow={myArrow} pagination={false} enableMouseSwipe={false} className={'ddd'} showEmptySlots={false} >
                        {monthsName.map((monthName) => (
                            <Box className={`month-name ${monthName.name === month ? 'selected-month' : ''}`}>
                                {monthName.name}
                            </Box>
                        ))}
                    </Carousel>
                </Box>
                <Box className="date-container">
                    <Box className="date-box">
                        <Typography
                            noWrap
                            component="span"
                            className="today-date"
                        >
                            {moment(value).format('MMMM')} {moment(value).format('D')}, {moment(value).format('dddd')}
                        </Typography>
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleViewChange} className={`${view ? 'selected-button-icon' : 'selected-button-icon-transparent'}`}>
                            <AiOutlineUnorderedList className={`icon-list ${view ? 'icon-list-select' : ''}`} />
                        </IconButton>
                    </Box>
                    <Box className="week-box">
                        {
                            ["su", "mo", "tu", "we", "th", "fr", "sa"].map((d) => (
                                <Box className="week">
                                    {d}
                                </Box>
                            ))
                        }
                    </Box>
                    <Box className="calendar-body">
                        {calendar.map((week) => (
                            <Box className={`${view ? 'event-body' : ''}`}>
                                {
                                    week.map((day) => (
                                        <Box className='day' onClick={() => setValue(day)}>
                                            <Box className={`date-select ${dayStyles(day)} `}>
                                                {
                                                    day.format("D").toString()
                                                }
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                        ))}
                    </Box>
                    {view ?
                        <Box className={'event'}>
                            {time.map((tim, index) => (
                                <Box className='event-list'>
                                    {tim.add ?
                                        <>
                                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Typography className='event-time' sx={{ marginRight: '10px' }}>{tim.id < 10 ? ('0' + tim.id) : tim.id == 24 ? '00' : tim.id}:00</Typography>
                                                <TextField size={'medium'} fullWidth claassName='event-field' />
                                            </Box>
                                            <Button variant="contained" component="label" sx={{
                                                backgroundColor: '#FF1C51', padding: '3px 12px', borderRadius: '30px', fontFamily: 'inter', textTransform: 'capitalize', fontSize: '12px', boxShadow: 'none',
                                                marginBottom: '3px',
                                                '&:hover': {
                                                    backgroundColor: '#FF1C51 !important', boxShadow: 'none',
                                                }
                                            }}>Save</Button>
                                        </> :
                                        tim.event !== '' ?
                                            <>
                                                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                                    <Typography className='event-time' sx={{ marginRight: '10px' }}>{tim.id < 10 ? ('0' + tim.id) : tim.id == 24 ? '00' : tim.id}:00</Typography>
                                                    <Typography className='event-time'>{tim.event}</Typography>
                                                </Box>
                                                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => { addEventCalendar(tim.id) }}>
                                                    <AiOutlineEdit className='add-event' />
                                                </IconButton>
                                            </>
                                            :
                                            <>
                                                <Typography className='event-time'>{tim.id < 10 ? ('0' + tim.id) : tim.id == 24 ? '00' : tim.id}:00</Typography>
                                                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => { addEventCalendar(tim.id) }}>
                                                    <AddCircleOutlineIcon className='add-event' />
                                                </IconButton>
                                            </>
                                    }
                                </Box>
                            ))}
                        </Box>
                        :
                        null
                    }
                </Box>
            </Box>
        </>
    )
}

export default CalendarComponent
