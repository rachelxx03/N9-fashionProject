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



const Admin = () => {


    const [formData, setFormData] = useState({
        catagory: 0,
        title: '',
        subtitle: '',
        imag: '',
        mainContent: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name);
        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === "title") {
            console.log("heheheh")
            // setFormData({
            //     ...formData,
            //     [name]: parseInt(value),
            // });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        delete formData.undefined
        axios.post('http://127.0.0.1:8000/api/postContent', formData)
            .then(response => {
                console.log(response);
                console.log( formData)
                alert('thành công gửi đi');
                window.location.href = window.location.href; // Reload the current page
                // Do something with the response, like show a success message
            })
            .catch(error => {
                console.log(error);
                // Handle the error, like showing an error message
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
                                        value={formData.catagory || ''} // <-- change value prop here
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