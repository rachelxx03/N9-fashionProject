import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  CardPic  from "../image/CARD_EX.png"


export default function ImgMediaCard() {
  return (
    <Card sx={{width: "100%",
    height: "100%", }}>
      <CardMedia
        component="img"
        alt="green iguana"
        // style={{width: "100%",
        // height: "100%"}}
        height="200"
        image={CardPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color:"#E74C8E"}}>Share</Button>
      </CardActions>
    </Card>
  );
}
