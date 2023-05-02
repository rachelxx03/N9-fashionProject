
import NavigationBar from "./NavigationBar/navigationBar"
import Footer from "./NavigationBar/footer"
import {  useHistory, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";
import React from "react";
import { AppBar, Typography, Box, Grid } from '@mui/material';
import './App.css';
import MyRoutes from './route';
import Background from "./image/menu_background.png"
import GocNhin from "./image/goc_nhin.png"
import XuHuong from "./image/xu_huong.png"


import { useMediaQuery } from "react-responsive";




function App() {

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

  return (


    <div className="App">
        <NavigationBar />
        
   




      <Box
        style={{
          paddingTop: "1rem",
          paddingLeft: isTabletOrMobile ? "1rem" : "10rem",
          paddingRight: isTabletOrMobile ? "1rem" : "10rem",
        }}
      >

        <Box
          style={{
            position: "relative"
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "relative"


            }}
            src={Background} />
          <Box
            style={{
              position: "absolute",
              top: "10%",
              bottom: 0,
              left: "10%",
              right: 0,
              color: "white",
            }}

          >
            <div

              style={{
                fontWeight: "600",
                fontSize: "5rem",
                fontStyle: "italic"
              }}
            >N9 FASHION BLOG</div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "300",
                paddingTop: "20px"

              }}
            >Make your life be SHINE.<br />
              Collect items from all brands.</div>


          </Box>

        </Box>

        <Grid container
          style={{
            paddingTop: "10px"
          }}
        >
          <Grid md={6} xs={12}
            style={{ display: "relative" }}
          >
            <Box
              style={{
                position: "relative"
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "relative"
                }}
                src={XuHuong} />
              <Box
                style={{
                  position: "absolute",
                  top: "10%",
                  bottom: 0,
                  left: "10%",
                  right: 0,
                  color: "white",
                }}

              >
                <div
                  className="navop">
                  <a href="/N9-fashionProject/trend" style={{color:"white", textDecorationLine:"none",}}> XU HƯỚNG</a>
                  </div>



              </Box>

            </Box>

          </Grid>
          <Grid md={6} xs={12}>
            <Box
              style={{
                position: "relative"
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "relative"


                }}
                src={GocNhin} />
              <Box
                style={{
                  position: "absolute",
                  top: "10%",
                  bottom: 0,
                  left: "10%",
                  right: 0,
                  color: "white",
                }}

              >
                <div
                  className="navop">
                    <a href="/N9-fashionProject/outlook" style={{color:"white", textDecorationLine:"none",}}>GÓC NHÌN</a>
                    </div>



              </Box>

            </Box>
          </Grid>
        </Grid>







      </Box>
      <Footer />



    </div >
  );
}

export default App;
