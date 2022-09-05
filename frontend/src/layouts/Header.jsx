import React from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import { useState } from 'react';
import DrawerComp from './DrawerComp';

const PAGES = ["Live Boards", "Diving Resorts", "Diving Packages", "Snorkeling"]

const Header = () => {
    const [value, setValue] = useState();

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <div>

            <AppBar sx={{ background: '#063970' }} position="sticky">
                <Toolbar >
                    <ScubaDivingIcon fontSize="large" />
                    {isMatch ? (<>
                        <Typography >{'\u00A0'}{'\u00A0'} Diving App{'\u00A0'}{'\u00A0'}</Typography> <DrawerComp /></>) : (
                        <>  <Tabs sx={{ marginRight: 'auto' }} textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'>
                            {
                                PAGES.map((page, index) => (
                                    <Tab key={index} label={page} />
                                ))
                            }

                        </Tabs>
                            <Button variant='contained' sx={{ marginLeft: 'auto' }}>Login</Button>
                            <Button variant='contained' sx={{ marginLeft: '10px ' }} >Register</Button>
                        </>
                    )}




                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header