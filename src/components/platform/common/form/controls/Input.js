import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Theme from '../../theme/Theme';
import { ThemeProvider } from '@material-ui/styles';

const styles = theme => ({
    input: {
      height: 40,
      marginRight:40
    },
    button: {
      height: 40
    }
  });

 const Input=withStyles(styles)((props)=> {

    const { name, label, defaultValue,error=null, onChange,forwardedRef,disable,classes } = props;    
    
    return (
        <ThemeProvider theme={Theme}>
        <TextField
            disabled={disable}
            variant="outlined"
            label={label}
            name={name}
            defaultValue={defaultValue}
            type="text"
            InputProps={{
                className: classes.input
              }}
            inputRef={forwardedRef}
            {...(error && {error:true,helperText:error})}
        >
        </TextField>
        </ThemeProvider>
    );
 }
 );
 export default Input;


