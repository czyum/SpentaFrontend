import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import styles from './Tile.module.css';
import { Link } from "react-router-dom";

const Tile = (props) => {
  return (
    <Card className={styles['tile']}>
      <CardActionArea href={props.to?props.to:""}>
        <div className={styles['tile__content']}>
          <div className={styles['tile__title']}>
            <p>{props.title} </p>
          </div>
          <div className={styles['tile__icon']}>{props.icon}</div>
        </div>a
      </CardActionArea>
    </Card>
  );
};

export default Tile;
