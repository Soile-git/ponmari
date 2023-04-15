import React from 'react';
import '../App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AppBar, Box, Grid, Tab, Tabs, Toolbar, useMediaQuery } from "@mui/material";
import { useState } from "react";
import ponmari from "../components/ponmari.png";
import DrawerComp from './DrawerComp';
import { useTheme } from '@emotion/react';


const Navbar = ({links}) => {
    const theme = useTheme();
    const isMatch = useMediaQuery('(max-width:600px)');
    const [value, setValue] = useState();

    return (
        <AppBar sx={{ background:'#313131', maxHeight: { xs: 50, md: 70 } }}>
            <Toolbar>
            {isMatch ? 
                <>
                    
                    <Box component="img" src={ponmari} alt="" sx={{ display: 'flex', width: "auto", maxHeight: { xs: 30, md: 60 }, marginTop: { xs: '2px', md: '4px' } }} />
                    <Box ><a className='logotext' href='/'>Ponmari</a> </Box>
                    <DrawerComp/>
                </>
                 : 
                <Grid container display='flex' justifyContent='center'>
                    <Grid item xs={0}>
                    </Grid>
                    <Grid display='flex' justifyContent='center' item xs={10}>
                        <Tabs 
                        indicatorColor="secondary" 
                        textColor="inherit" 
                        value={value} 
                        onChange={(e, val) => setValue(val)}
                        >
                            <Tab sx={{ display: {xs: 'none', md: 'flex'} }} label="Ajanvaraus" href='#Ajanvaraus' />
                            <Box component="img" src={ponmari} alt="" sx={{ display: 'flex', width: "auto", maxHeight: { xs: 30, md: 60 }, marginTop: { xs: '2px', md: '4px' } }} />
                            <Box><a className='logotext' href='#Alkuun'>Ponmari</a></Box>
                            <Tab sx={{ display: {xs: 'none', md: 'flex'} }} label="Hinnasto" href='#Hinnasto' />
                        </Tabs>
                    </Grid>
                    <Grid item xs={0}>
                    </Grid>
                </Grid>
            }
            </Toolbar>
        </AppBar>

      );
    }
    

export default Navbar;

