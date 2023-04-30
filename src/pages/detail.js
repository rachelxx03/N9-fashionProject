

import { AppBar, Typography, Box, Grid, Paper, styled } from '@mui/material';
import NavigationBar from "../NavigationBar/navigationBar";
import Footer from "../NavigationBar/footer";
import { useMediaQuery } from "react-responsive";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';



function Detail() {

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
    const location = useLocation();
    const [id, setId] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('id');
        setId(id);
    }, [location.search]);
    let request = `http://localhost:8000/api/getDetail?id=${id}`;
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        axios.get(request)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [request]);
    
    useEffect(() => {
        console.log(data);
    }, [data]);




    return (


        <div className="App">
            <Box
                style={{
                    paddingTop: "1rem",
                    paddingLeft: isTabletOrMobile ? "1rem" : "10rem",
                    paddingRight: isTabletOrMobile ? "1rem" : "10rem",
                }}
            >
                <NavigationBar/>
                <div>
                    <Typography gutterBottom variant="h3" style={{ fontWeight: 'bold' }}>
                        {data.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" style={{ paddingBottom: "2rem" }}>
                        {data.subtitle}
                    </Typography>
                    <div style={{ textAlign: "center", paddingBottom:"2rem"}}>
                        <img src={data.imag} align="center" height="1000" />
                    </div>
                    <Typography gutterBottom variant="h6" style={{ paddingBottom: "2rem" }}>
                    <div>{data.mainContent}</div>
                    </Typography>


                </div>
            </Box>
            <Footer />
        </div >
    );
}

export default Detail;
