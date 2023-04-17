

import { AppBar, Typography, Box, Grid, Paper, styled } from '@mui/material';
import NavigationBar from "../NavigationBar/navigationBar";
import Card from "../reusableComponent/ui-card ";
import Footer from "../NavigationBar/footer";
import { useMediaQuery } from "react-responsive";


import React, { useEffect, useState } from 'react';
import axios from 'axios';




function Test() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/content?catagory=3')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (


    <div className="App">
        hehe
         {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
        </div>
      ))}
        
        
    

    </div >
  );
}

export default Test;
