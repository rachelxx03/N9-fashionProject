

import React from "react";
import { AppBar, Typography, Box, Grid, Paper, styled } from '@mui/material';
import NavigationBar from "../NavigationBar/navigationBar";
import Card from "../reusableComponent/ui-card ";
import Footer from "../NavigationBar/footer";
import { useMediaQuery } from "react-responsive";






function Trend() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });




  return (


    <div className="App">
      <NavigationBar />
      <Box style={{
        paddingTop: "1rem",
        paddingLeft: isTabletOrMobile ? "1rem" : "15rem",
        paddingRight: isTabletOrMobile ? "1rem" : "15rem",
      }}>
        <Box>

          <Typography gutterBottom variant="h3" style={{ fontWeight: 'bold' }}>
            XU HƯỚNG QUỐC TẾ
          </Typography>


          <Box sx={{ flexGrow: 1 }}>
            <Grid container
              style={{
                placeItems: "center"
              }}
            >
              <Grid style={{ padding: "1rem" }} md={4}>
                <Card />
              </Grid>
              <Grid style={{ padding: "1rem" }} md={4}>
                <Card />
              </Grid>
              <Grid style={{ padding: "1rem" }} md={4}>
                <Card />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
        style={{paddingTop:"2rem"}}
        >

          <Typography gutterBottom variant="h3" style={{ fontWeight: 'bold' }}>
            XU HƯỚNG TRONG NƯỚC
          </Typography>


          <Box sx={{ flexGrow: 1 }}>
            <Grid container
              style={{
                placeItems: "center"
              }}
            >
              <Grid style={{ padding: "1rem" }} md={4}>
                <Card />
              </Grid>
              <Grid style={{ padding: "1rem" }} md={4}>
                <Card />
              </Grid>
              <Grid style={{ padding: "1rem" }} md={4}>
                <Card />
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Box>



      <Footer />


    </div >
  );
}

export default Trend;
