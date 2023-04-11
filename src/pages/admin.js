import { useState } from "react";
import NavigationBar from "../NavigationBar/navigationBar";
import Footer from "../NavigationBar/footer";
import React from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FileUpload from "react-mui-fileuploader";

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
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [filesToUpload, setFilesToUpload] = useState([])

    const handleFilesChange = (files) => {
      // Update chosen files
      setFilesToUpload([ ...files ])
    };
  
    const uploadFiles = () => {
      // Create a form and post it to server
      let formData = new FormData()
      filesToUpload.forEach((file) => formData.append("files", file))
  
      fetch("/file/upload", {
        method: "POST",
        body: formData
      })
    }


    return (
        <div className="App" style={{paddingTop:"2rem"}}>

            <Typography gutterBottom variant="h3" align="center" style={{ fontWeight: 'bold' }}>
                ĐĂNG BÀI VIẾT
            </Typography>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>

                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={12} item>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        NƠI ĐĂNG
                                    </Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}

                                    >
                                        <MenuItem value={10}>Xu hướng quốc tế</MenuItem>
                                        <MenuItem value={20}>Xu hướng trong nước</MenuItem>
                                        <MenuItem value={30}>Góc nhìn</MenuItem>
                                    </Select>
                                </Grid>


                                <Grid xs={12} sm={12} item>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        TÊN TÁC GIẢ
                                    </Typography>
                                    <TextField variant="outlined" fullWidth required />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        TIÊU ĐỀ
                                    </Typography>

                                    <TextField variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        TÓM TẮT NỘI DUNG
                                    </Typography>

                                    <TextField variant="outlined" fullWidth required />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        NỘI DUNG
                                    </Typography>
                                    <TextField multiline rows={8} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                                        ĐĂNG ẢNH
                                    </Typography>


                                    <FileUpload
                                        multiFile={true}
                                        onFilesChange={handleFilesChange}
                                        onContextReady={(context) => { }}
                                        required
                                    />



                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#E74C8E" }}  onClick={uploadFiles} >GỬI</Button>
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