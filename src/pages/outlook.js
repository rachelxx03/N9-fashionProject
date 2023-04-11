

import React from "react";
import { AppBar, Typography, Box, Grid, Paper, styled } from '@mui/material';
import NavigationBar from "../NavigationBar/navigationBar";
import Card from "../reusableComponent/ui-card ";
import Footer from "../NavigationBar/footer";
import { useMediaQuery } from "react-responsive";
import Background from "../image/gocnhin.png"





function Outlook() {

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (


    <div className="App">
      <NavigationBar />
      <Box style={{
        paddingTop: "1rem",
        paddingLeft: isTabletOrMobile ? "1rem" : "15rem",
        paddingRight: isTabletOrMobile ? "1rem" : "15rem",
      }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "relative"


            }}
            src={Background} />
      
        <Box sx={{ flexGrow: 1 }}>
          <Grid container 
          style={{
            placeItems: "center"
          }}
          >
            <Grid style={{padding:"1rem"}} md={4}>
              <Card />
            </Grid>
            <Grid style={{padding:"1rem"}} md={4}>
              <Card />
            </Grid>
            <Grid  style={{padding:"1rem"}} md={4}>
              <Card />
            </Grid>
          </Grid>
        </Box>

      </Box>



      <Footer />


    </div >
  );
}

export default Outlook;
