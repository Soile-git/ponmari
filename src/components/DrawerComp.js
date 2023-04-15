import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const DrawerComp = ({links}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(false);
    }

    return(
        <>
            <Drawer PaperProps={{ sx:{backgroundColor:'#fcbad3'} }} open={open} onClose={() => setOpen(false)} >
                <List>
                    <ListItemButton component="a" href="#Ajanvaraus" onClick={handleClick} divider>
                        <ListItemIcon>
                            <ListItemText style={{ color: 'inherit'}}>Ajanvaraus</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton component="a" href="#Hinnasto" onClick={handleClick} divider>
                        <ListItemIcon>
                            <ListItemText style={{ color: 'inherit'}}>Hinnasto</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton component="a" href="#Alkuun" onClick={handleClick} divider>
                        <ListItemIcon>
                            <ListItemText style={{ color: 'inherit'}}>Sivun alkuun</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: 'auto', color: '#fcbad3'}} onClick={() => setOpen(!open)}>
                <MenuRoundedIcon />
            </IconButton>
        </>
    )
}


export default DrawerComp