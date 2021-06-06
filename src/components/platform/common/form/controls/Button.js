import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import Theme from '../../theme/Theme';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    },
    label: {
        textTransform: 'none'
    },

    ".MuiSvgIcon-root":{
    fontSize: "3rem",
    color:"#004E7C"
  }
  
}))

export default function Button(props) {

    const { text, size, color, onClick, ...other } = props
    const classes = useStyles();

    return (
        <ThemeProvider theme={Theme}>
        <MuiButton
            variant="contained"
            size="small"
            onClick={onClick}
            color="primary"
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
        </ThemeProvider>
    )
}
