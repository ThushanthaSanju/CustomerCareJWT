import MenuIcon from '@mui/icons-material/Menu';
import { colors, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const PAGES = ["Live Boards", "Diving Resorts", "Diving Packages", "Snorkeling", "Register", "Login"]

const DrawerComp = () => {
    const [drawer, setdrawer] = useState(false)
    return (
        <div>
            <Drawer open={drawer} onClose={() => setdrawer(false)}>

                <List >
                    {
                        PAGES.map((page, index) => (
                            <ListItemButton key={index} onClick={() => setdrawer(false)}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>

            </Drawer>

            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setdrawer(!drawer)} >
                <MenuIcon />
            </IconButton>
        </div>
    )
}

export default DrawerComp