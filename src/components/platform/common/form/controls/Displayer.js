import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Theme from '../../theme/Theme';
import { ThemeProvider } from '@material-ui/styles';


const Displayer=(props)=> {

    const { value } = props;    
    return (
        <ThemeProvider theme={Theme}>
        <div style={{padding:"9.5px 10.5px"}}>
        <p>{props.value}</p>
        </div>
        
        </ThemeProvider>
    )
}

export default Displayer;
