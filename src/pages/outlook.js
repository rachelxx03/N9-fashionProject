

import { AppBar, Typography, Box, Grid, Paper, styled } from '@mui/material';
import NavigationBar from "../NavigationBar/navigationBar";
import Card from "../reusableComponent/ui-card ";
import Footer from "../NavigationBar/footer";
import { useMediaQuery } from "react-responsive";
import Background from "../image/gocnhin.png"


import React, { useEffect, useState } from 'react';
import axios from 'axios';



function Outlook() {

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/content?catagory=1')
      .then(response => {
        setData(response.data);
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
                  {data.map(item => (
                  <Card key={item.id} item={item} />

            ))}
              {/* <Card />
          
              <Card />
              <Card /> */}
          </Grid>
        </Box>

      </Box>



      <Footer />


    </div >
  );
}

export default Outlook;
