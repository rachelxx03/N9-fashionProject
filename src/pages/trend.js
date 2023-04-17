

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Typography, Box, Grid, Paper, styled } from '@mui/material';
import NavigationBar from "../NavigationBar/navigationBar";
import Card from "../reusableComponent/ui-card ";
import Footer from "../NavigationBar/footer";
import { useMediaQuery } from "react-responsive";
function Trend() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
 
  const [dataT1, setDataT1] = useState([]);
  const [dataT2, setDataT2] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8000/api/content?catagory=2')
      .then(response => {
        setDataT1(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  useEffect(() => {
    axios.get('http://localhost:8000/api/content?catagory=3')
      .then(response => {
        setDataT2(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


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
              {dataT1.map(item => (
                <Card key={item.id} item={item} />

              ))}
            </Grid>
          </Box>
        </Box>

        <Box
          style={{ paddingTop: "2rem" }}
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
              {dataT2.map(item => (
                <Card key={item.id} item={item} />

              ))}
              
              
            </Grid>
          </Box>
        </Box>

      </Box>



      <Footer />


    </div >
  );
}

export default Trend;
