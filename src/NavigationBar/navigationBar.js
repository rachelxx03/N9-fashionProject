
import n9Logo from "../image/n9Logo.png"
import { AppBar, Typography, Toolbar, Button, TextField, InputAdornment } from '@mui/material';
import React from "react";
import '../App.css';
import NavLink from '../route';
import { useState, useEffect } from 'react';


import { Link, useLocation, useNavigate } from 'react-router-dom';




const links = [
    { navId: "menu", name: 'TRANG CHỦ', url: '/N9-fashionProject' },
    { navId: "xuhuong", name: 'XU HƯỚNG', url: '/N9-fashionProject/trend' },
    { navId: "gocnhin", name: 'GÓC NHÌN', url: '/N9-fashionProject/outlook' },
    { navId: "lienhe", name: 'LIÊN HỆ / ĐÓNG GÓP', url: '/N9-fashionProject/contact' },
];


function NavigationBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState('TRANG CHỦ');


    const handleLinkClick = (link) => {
        setSelectedLink(link);
        navigate(link.url);
    };









    return (




        <AppBar
            position="sticky"
            style={{
                background: "white",
                padding: "1.5rem",
                display: "inline-block",
                position: "none",
                boxShadow: "none",
                paddingBottom: "3rem"
            }}
        >
            <Toolbar>

                <img
                    src={n9Logo}
                    width="50rem"
                    style={{ marginLeft: "2rem" }}
                />

                <ul
                    style={{
                        marginLeft: "auto",
                        marginRight: 0,


                    }}
                >
                    {links.map((link, index) => (
                        <li key={index}
                            style={{
                                display: "inline",
                                marginRight: "2rem"
                            }}
                        >
                            <Link
                                className={`navigation ${selectedLink === link.name ? 'active' : ''}`}
                                to={link.url}
                                style={{
                                    fontSize: '1.3rem',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}

                                onClick={() => handleLinkClick(link.name)}
                            >
                                {link.name}

                            </Link>




                        </li>
                    ))}
                    <TextField variant="outlined"
                        width="100px"
                        required
                        name="author"
                        // value={formData.author}
                        // onChange={handleInputChange} 
                        />
                </ul>

            </Toolbar>
            <NavLink />


        </AppBar>


    );
}

export default NavigationBar;