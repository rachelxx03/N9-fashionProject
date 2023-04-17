import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardPic from "../image/CARD_EX.png";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';



export default function ImgMediaCard(props) {
  const { item } = props;

  return (
    <Grid style={{ padding: "1rem" }} md={4}>

      <Card sx={{
        width: "100%",
        height: "100%",
      }}>
        <CardMedia
          component="img"
          alt="green iguana"
          // style={{width: "100%",
          // height: "100%"}}
          height="200"
          src={item.imag}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Link size="small" style={{ color: "#E74C8E" }}>read more</Link> */}

          <Link
            to={`/N9-fashionProject/detail?id=${item.id}`}
            style={{
              color: "#E74C8E"
            }}
          >
            read more

          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
