import React,{useState,useEffect} from 'react';
import styles from './Header.module.css';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import { Avatar,IconButton  } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));
  
const Header=()=>{
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);




    const [brand,setBrand]=useState(null);
    const getBrand=async ()=>{
        try{
          const brand_=await axios.get("http://localhost:8000/branding/getBrand?id=1");
          setBrand(brand_.data.data);
        }
        catch(err){
          console.log("Header-->",err);
        }
      }
    useEffect(()=>{
        getBrand();
    },[])
    return (
        <div className={styles['appheader']}>
            <div className={styles["appheader__left"]}>
                <div className={styles.appheader__companyname}>
                    <p>{brand?brand.name:"Company"}</p>
                </div>
                {/* <Navbar/> */}
            </div>
            <div className={styles["appheader__right"]}>
            <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Avatar/>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}><NavLink to='/profile'>Profile</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
                {/* <IconButton><NavLink to = '/profile'></NavLink></IconButton> */}
                
            </div>
        </div>
    )
}

export default Header;

