import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {MenuItem, Menu, Button, Toolbar, Typography, IconButton, AppBar, Avatar,CssBaseline,List,Divider,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import UlakApp from '../asset/ulakapp.png'
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "1em"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "1em",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row"
  },
  leftTitle: {
    display: "flex",
    flexDirection: "row"
  },
  middle: {
    display: 'flex',
    wrap: 'wrap'
  }
}));

const useStylesDrawer = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const drawerWidth = 250;


function HeaderBar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleBarMenu = () => {
    setOpenDrawer(() => !openDrawer)
  }

  const classer = useStylesDrawer();
  const theme = useTheme();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={handleBarMenu} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h7" className={classes.title}> 
          <Button href="/">
            <div className={classes.leftTitle}>
              <Avatar src={UlakApp} />
              <p style={{color: "white"}}> UlakApp </p>
            </div>
            </Button>
          </Typography>
          <Typography variant="h7" className={classes.title}>
            <div className={classes.middle}>

              <Button color="inherit" href="/">
                Home    
              </Button>

              <Button color="inherit" href="/about">
                About
              </Button>

              <Button color="inherit" href="/contact">
                Contact
              </Button>
            
            </div>
          </Typography>

          <Button color="inherit" href="/login">
            Login
          </Button>

          <Button color="inherit" href="/register">
            Register
          </Button>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>

            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classer.root}>
    <CssBaseline />
    <Drawer
      className={classer.drawer}
      variant="persistent"
      anchor="left"
      open={openDrawer}
      classes={{
        paper: classer.drawerPaper,
      }}
    >
      <div className={classer.drawerHeader}>
        <IconButton onClick={handleBarMenu}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  </div>
    </div>
  );
}

export default HeaderBar;