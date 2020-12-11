import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import { Avatar } from 'material-ui';
import Black from "./Black";
import BrowserService from "./BrowserService";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "white",
    color: "black",
  },
  drawer: {
    width: "56px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "56px",
    backgroundColor: "#793FF2",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <Avatar/> */}
          <Typography
            variant="h6"
            noWrap
            style={{
              marginLeft: "48em",
              display: "flex",
              paddingLeft: "2em",
              justifyContent: "space-between",
            }}
          >
            <Avatar />
            &nbsp;&nbsp;
            {BrowserService.getLocalStorageValue("user")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <Black />
        <Divider />
      </Drawer>
    </div>
  );
}
