import './App.css';
import React, { useState } from 'react';
import { Media } from './components/gallery'
import { Box, Grid, Typography } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from './components/Navbar';
import pic1 from "./components/model.png";


function App() {
  const [file, setFile] = useState(null);

  return (
    <>
    <div className="App">
      <Navbar />
    </div>
    <div>
      <Box id='Alkuun' display='flex' justifyContent='center' style={{paddingTop: "50px"}}>
        <img className='model' src={pic1} alt=""></img>
      </Box>
      <Grid display='flex' justifyContent='center' textAlign={'center'}>
        <span  className='header'>Kampaamo Ponmari</span>
      </Grid>
      <Grid display='flex' justifyContent='center' textAlign={'center'} style={{paddingTop: "10px"}}>
        <Box style={{margin: 'auto', marginTop: "20px", marginBottom: '50px', backgroundColor: '#e89cac', width: 'auto', maxWidth: '75%', borderRadius: '20px', padding: '20px'}}>
          <p className='intro'>Koko perheen kampaamopalvelut ammattitaidolla. <br />
            Tervetuloa kaiken ikäiset!<br /> 
            Meidät löytää Espoon Karakalliosta palvelutalo Hopeakotkan tiloista. <br /> 
            Ilmainen paikoitus talon päädyssä.</p>
        </Box>
      </Grid>

      <div className='container'>
      <Grid className='otsikko' display='flex' justifyContent='center' textAlign={'center'}>
        <span>Kuvagalleria</span>
      </Grid>

        <div className='media-container'>
          {
            Media.map((file, index) =>(
              <div className='media' key={index} onClick={() => setFile(file)}>
                {
                  file.type === 'image'
                  ? <img src={file.url} alt='' />
                  : <img src={file.url} alt='' />
                }
              </div>
            ))
          }
        </div>

        <div className='popup-media' style={{ display: file ? 'block' : 'none' }}>
              <span onClick={() => setFile(null)}>&times;</span>
              
              {
                file?.type === 'image'
                ? <img src={file?.url} alt='' /> 
                : <img src={file?.url} alt='' />
              }
        </div>
      </div>

        <div id="Hinnasto" style={{ margin: 'auto', marginTop: '50px', width: 'auto', maxWidth: '75%' }}>
                    <Accordion style={{ backgroundColor: '#e89cac', borderRadius: '15px' }}>
                        <AccordionSummary
                            expandIcon={''}>
                            <Typography><p className='otsikko'>Hinnasto</p></Typography>
                        </AccordionSummary>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#e89cac', borderRadius: '15px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}>
                            <Typography><p className='otsikko'>Leikkaukset</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Hiusten leikkaus</p>
                                <p className='hinnat'>25-40€</p>
                              </Box>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Otsahiukset</p>
                                <p className='hinnat'>10-15€</p>
                              </Box>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Konetyö</p>
                                <p className='hinnat'>20€</p>
                              </Box>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Parta</p>
                                <p className='hinnat'>10-15€</p>
                              </Box>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#e89cac', borderRadius: '15px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}>
                            <Typography><p className='otsikko'>Hiusten värikäsittelyt</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Värjäys tai raidoitus</p>
                                <p className='hinnat'>80-250€</p>
                              </Box>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Värjäys tai raidoitus + leikkaus</p>
                                <p className='hinnat'>110-280€</p>
                              </Box>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Permanentti</p>
                                <p className='hinnat'>80€</p>
                              </Box>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Permanentti + leikkaus</p>
                                <p className='hinnat'>110-160€</p>
                              </Box>
                              <Box display='flex' justifyContent='space-between'>
                                <p className='hinnat'>Permanentti + leikkaus + sävy</p>
                                <p className='hinnat'>150-200€</p>
                              </Box>
                            </Typography>
                        </AccordionDetails>
                      </Accordion>
        </div>

      <Grid id='Ajanvaraus'>
        <Box style={{margin: 'auto', marginTop: "50px", marginBottom: '20px', backgroundColor: '#e89cac', width: 'auto', maxWidth: '75%', borderRadius: '20px', padding: '20px'}}>
          <p className='osoite' id="ajanvaraus"><i class="fa-solid fa-mobile-screen-button"></i> Ajanvaraus</p>
          <p className='osoiterivi'><a href='tel:0404814688'>040 4814 688</a> (näpäytä numeroa soittaaksesi) <br />avoinna sopimuksen mukaan</p>
        </Box>
      </Grid>

      <Grid>
        <Box style={{margin: 'auto', marginTop: "20px", marginBottom: '50px', backgroundColor: '#e89cac', width: 'auto', maxWidth: '75%', borderRadius: '20px', padding: '20px'}}>
          <p className='osoite'><i class="fa-solid fa-location-dot"></i> Yhteystiedot</p>
          <p className='osoiterivi'>Palvelutalo Hopeakotka 
          <br />Kotkapolku 2
          <br />02620 Espoo
          </p>
        </Box>
      </Grid>
    </div>
    </>
  );
}

export default App;
