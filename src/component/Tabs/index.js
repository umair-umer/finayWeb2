import React from 'react'
import { Tab, Box } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useStyles } from '../../constant/customStyle'

const CustomTabs = ({ tabs, tabsPanel }) => {
    const classes = useStyles()
    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box sx={{ width: '100%', padding: '0px 0px', borderRadius: 14 }}>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" className={classes.tabs} classes={{ indicator: classes.indicator }} >
                    {tabs.map((tab, index) => {
                        return (
                            <Tab label={tab.name} value={tab.value} className={classes.label} key={index} />
                        )
                    })}
                </TabList>
                {tabsPanel.map((tab, index) => {
                    return (
                        <TabPanel value={tab.value} className={classes.tabsPanel} key={index}>{tab.component}</TabPanel>
                    )
                })}
            </TabContext>
        </Box>
    )
}

export default CustomTabs
