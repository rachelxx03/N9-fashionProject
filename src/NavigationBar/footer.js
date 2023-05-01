
import n9Logo from "../image/n9Logo.png"
import Instagram from "../image/Instagram.png"
import Phone from "../image/phone.png"
import Email from "../image/email.png"

import WhiteInstagram from "../image/whiteInstagram.png"
import WhiteFacebook from "../image/whitefacebook.png"
import WhiteTwitter from "../image/whiteTwitter.png"



import { AppBar, Typography, Toolbar, Box, Grid, IconButton } from '@mui/material';
import React from "react";
import { margin } from "@mui/system";
import { Link,useNavigate } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';




function NavigationBar() {
    const links = [
        { navId: "menu", name: 'TRANG CHỦ', url: '/N9-fashionProject' },
        { navId: "xuhuong", name: 'XU HƯỚNG', url: '/N9-fashionProject/trend' },
        { navId: "gocnhin", name: 'GÓC NHÌN', url: '/N9-fashionProject/outlook' },
        { navId: "lienhe", name: 'LIÊN HỆ / ĐÓNG GÓP', url: '/N9-fashionProject/contact' },
    ];

    const [selectedLink, setSelectedLink] = useState('TRANG CHỦ');
    const navigate = useNavigate();
    const handleLinkClick = (link) => {
        setSelectedLink(link);
        navigate(link.url);
    };
    const linksContacts = [
        { picture: Instagram, content: '@N9blogfashion' },
        { picture: Phone, content: '+1667 987 662' },
        { picture: Email, content: 'N9blogforwork@gmail.com' },


    ];

    const linksSocialMedia = [
        { name: WhiteInstagram, url: '/' },
        { name: WhiteFacebook, url: '/about' },
        { name: WhiteTwitter, url: '/contact' },


    ];

    return (
        <Box
            style={{
                borderTop: "1px ",
                paddingTop:"5rem"
            }}
        >
            <AppBar
                position="sticky"
                style={{
                    outline: "1px solid black",

                    background: "white",
                    padding: "1rem",
                    position: "none",
                    alignItems: 'center',
                }}
            >
                <Toolbar>
                    <div
                        style={{
                            fontSize: "400", color: "black"
                        }}
                    >
                        CONTACT US
                    </div>

                    <IconButton size="large" >
                            <img src={Instagram} />
                    </IconButton>  
                    <div className="contacts" >@N9blogfashion</div>   

                    <IconButton size="large">
                            <img src={Phone} />
                    </IconButton>  
                    <div className="contacts" >+1667 987 662</div>      

                    <IconButton size="large">
                            <img src={Email} />
                    </IconButton>  
                    <div  className="contacts">N9blogforwork@gmail.com</div>                
          
                </Toolbar>
            </AppBar>
            <AppBar
                position="sticky"
                style={{
                    background: "black",
                    position: "none",
                    paddingLeft: "14.5rem",
                    paddingRight: "13rem",

                    paddingBottom: "4rem",
                    paddingTop: "4rem",
                    display: "inline-block"



                }}
            >


                <Box>
                </Box>
                <Grid container>
                    <Grid md={6}>
                        <ul
                            style={{

                                listStyleType: "none",
                                margin: 0,
                                padding: 0,


                            }}
                        >
                            {links.map((link, index) => (
                                <li key={index}
                                    style={{
                                        marginRight: "2rem"
                                    }}
                                >
                                    <Link
                                className={`navigation ${selectedLink === link.name ? 'active' : ''}`}
                                to={link.url}
                                style={{
                                    fontSize: '1.3rem',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    backgroundColor:'black',
                                }}

                                onClick={() => handleLinkClick(link.name)}
                            >
                                {link.name}

                            </Link>

                                </li>
                            ))}
                        </ul>

                    </Grid>
                    <Grid md={6}
                        style={{
                            marginLeft: "auto",
                            marginRight: 0
                        }}>
                        <div

                        >





                            <Box
                                style={{
                                    marginLeft: "auto",
                                    marginRight: 0
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "1.3rem",
                                        fontWeight: "bold",
                                        paddingBottom: "1rem",
                                        textAlign: "right",
                                        marginRight: "1.8rem"


                                    }}
                                >SOCIAL MEDIA</div>
                                <div
                                    style={{
                                        float: "right"
                                    }}
                                >

                                    {linksSocialMedia.map((link, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                display: "inline",
                                                marginRight: "1.8rem"
                                            }}
                                        >
                                            <img src={link.name}></img>
                                        </li>
                                    ))}
                                </div>

                            </Box>

                        </div>


                    </Grid>


                </Grid>










            </AppBar>

        </Box >

    );
}

export default NavigationBar;