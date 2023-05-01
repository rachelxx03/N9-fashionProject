import { useState } from "react";
import NavigationBar from "../NavigationBar/navigationBar";
import Footer from "../NavigationBar/footer";
import React from "react";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';

import axios from 'axios';


const Create = () => {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    content: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/posts', formData)
    .then(response => {
        console.log(response);
        console.log(formData)
        // Do something with the response, like show a success message
      })
      .catch(error => {
        console.log(error);
        // Handle the error, like showing an error message
      });
  };


  return (
    <div className="App">
      <NavigationBar />

      <Typography gutterBottom variant="h3" align="center" style={{ fontWeight: 'bold' }}>
        ĐÓNG GÓP BÀI VIẾT
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>

                <Grid xs={12} sm={12} item>
                  <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
                    TÊN TÁC GIẢ
                  </Typography>
                  <TextField variant="outlined"
                    fullWidth
                    required
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange} />
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
                    NỘI DUNG
                  </Typography>
                  <TextField
                    multiline
                    rows={8}
                    variant="outlined"
                    fullWidth
                    required
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#E74C8E" }} onClick={alert('Success!!')}>GỬI</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Footer />

    </div>
  );
}

export default Create;