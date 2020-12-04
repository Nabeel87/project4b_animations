import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { useScrollYPosition } from 'react-use-scroll-position';
// import useWebAnimations from '@wellyshen/use-web-animations';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 'auto',

    },
    rainbowAnimationDiv: {
        marginLeft: 'auto',
    },
    title: {
        flexGrow: 1,
    },
    bgColorTransparent: {
        backgroundColor: "transparent",
    },
    bgColorBlack: {
        backgroundColor: "#272A33",
        transition: 'background-color 1s ease-out',
    },
}));

function Header() {


    const scrollY = useScrollYPosition();

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>

                {/* elevation={0} its use for removing nav bar border */}
                <AppBar position="fixed" className={scrollY >= 100 ? classes.bgColorBlack : classes.bgColorTransparent}>

                    <Toolbar>

                        <div className="center-content">
                            <div className={classes.rainbowAnimationDiv} >
                                <span className="rainbow-animation rainbow-char1">N</span>
                                <span className="rainbow-animation rainbow-char2">A</span>
                                <span className="rainbow-animation rainbow-char3">B</span>
                                <span className="rainbow-animation rainbow-char4">I</span>
                                <span className="rainbow-animation rainbow-char5">L</span>
                                <span className="rainbow-animation rainbow-char6"> </span>
                                <span className="rainbow-animation rainbow-char7">T</span>
                                <span className="rainbow-animation rainbow-char8">A</span>
                                <span className="rainbow-animation rainbow-char9">S</span>
                                <span className="rainbow-animation rainbow-char10">K</span>
                                <span className="rainbow-animation rainbow-char11"> </span>
                                <span className="rainbow-animation rainbow-char12">▾</span>
                            </div>
                            <div className="div-expand">
{/* 
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
                            </div>
                        </div>


                        <IconButton className={classes.menuButton} color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Header;