import React from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState();





    return (
        <div>

            <AppBar sx={{ background: '#063970' }} position="sticky">
                <Toolbar >
                    <ScubaDivingIcon fontSize="large" />
                    <Typography >{'\u00A0'}{'\u00A0'} Diving App{'\u00A0'}{'\u00A0'}</Typography>
                    <Tabs sx={{ marginRight: 'auto', "& button:Mui-selected": { backgroundColor: "red" } }} textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'>



                        <Tab label="Live Boards" href="/liveBoardView" />
                        <Tab label="Diving Resorts" href="/resorts" />
                        <Tab label="Diving Packages" href="/packages" />
                        <Tab label="Snorkeling" href="/LiveBoardCusView" />



                    </Tabs>
                    <Button variant='contained' sx={{ marginLeft: 'auto' }} onClick={() => navigate('/signin')}>Login</Button>
                    <Button variant='contained' sx={{ marginLeft: '10px ' }} onClick={() => navigate('/signup')}>Register</Button>




                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header