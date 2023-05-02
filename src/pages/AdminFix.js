import { useState } from "react";
import NavigationBar from "../NavigationBar/navigationBar";
import Footer from "../NavigationBar/footer";
import React from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import {
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    MenuItem
} from '@mui/material';
import { useMediaQuery } from "react-responsive";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



const Admin = () => {

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
    const location = useLocation();
    const [id, setId] = useState('');
    const [formData, setFormData] = useState({
        catagory: 0,
        title: '',
        subtitle: '',
        imag: '',
        mainContent: '',
    });

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
            console.log(response.data.catagory);

            setFormData({

              catagory: response.data.catagory, // fixed typo here
              title: response.data.title,
              subtitle: response.data.subtitle,
              imag: response.data.imag,
              mainContent: response.data.mainContent,
            });
          })
          .catch(error => {
            console.log(error);
          });
      }, [request]);
      

    useEffect(() => {
        console.log(data);
    }, [data,formData]);





    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        delete formData.undefined
        console.log(formData);

        axios.put('http://localhost:8000/api/update/' + id, formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });

    };





    return (
        <div className="App" style={{ paddingTop: "2rem" }}>

            <Typography gutterBottom variant="h3" align="center" style={{ fontWeight: 'bold' }}>
                ĐĂNG BÀI VIẾT
            </Typography>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={12} item>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        NƠI ĐĂNG
                                    </Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="catagory"
                                        value={formData.catagory } // <-- change value prop here
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem value={2} fullWidth>Xu hướng quốc tế</MenuItem>
                                        <MenuItem value={3} fullWidth>Xu hướng trong nước</MenuItem>
                                        <MenuItem value={1} fullWidth>Góc nhìn</MenuItem>
                                    </Select>
                                </Grid>



                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        TIÊU ĐỀ
                                    </Typography>

                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        TÓM TẮT NỘI DUNG
                                    </Typography>

                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="subtitle"
                                        value={formData.subtitle}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        NỘI DUNG
                                    </Typography>
                                    <TextField
                                        multiline
                                        rows={8}
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="mainContent"
                                        value={formData.mainContent}
                                        onChange={handleInputChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        ĐĂNG URL ẢNH
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="imag"
                                        value={formData.imag}
                                        onChange={handleInputChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#E74C8E" }}  >GỬI</Button>
                                </Grid>



                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>

        </div>
    );
}

export default Admin;