import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import CardActionArea from '@material-ui/core/CardActionArea';


import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    
        root: {
          maxWidth: 300,
          margin:20,
          borderBlockColor:red,
          color:red,
        },
        bull:{
            color:red,
            maxWidth:10
        },
        avatar: {
            backgroundColor: blue[500],
          }
      });

export default function FinaceCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  
    return (
    
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              color="red"
              alt="Contemplative Reptile"
              height="140"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="subtitle2" color="secondary" align="center" display=" block">
                Finance Of Company.
              </Typography>
              
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="outlined"  href="#contained-buttons" size="small" color="primary">
            MORE DEATILES
            </Button>
          </CardActions>
        </Card>
      );
    }
    
    