import { useState } from "react";
import NavigationBar from "../NavigationBar/navigationBar";
import Footer from "../NavigationBar/footer";
import React from "react";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';



const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return (
    <div className="App">
      <NavigationBar />

      <Typography gutterBottom variant="h3" align="center" style={{ fontWeight: 'bold' }}>
        ĐÓNG GÓP BÀI VIẾT
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            
            <form>
              <Grid container spacing={1}>
                
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
                  NỘI DUNG
                </Typography>
                  <TextField  multiline rows={8} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary"   style={{backgroundColor:"#E74C8E"}} >GỬI</Button>
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