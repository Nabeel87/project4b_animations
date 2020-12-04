import React, { useState } from 'react';
import './ThePeople.css';
import ava1 from '../Images/Avatar/image1.jpg';
import ava2 from '../Images/Avatar/image3.jpg';
import ava3 from '../Images/Avatar/image2.jpg';
import ava4 from '../Images/Avatar/image4.jpg';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
// import Typing from 'react-typing-animation';


function ThePeople() {
    const allIcons = [
        { name: 'Alex Wen', tittle: 'Ceo', image: ava1 },
        { name: 'R. Stephen', tittle: 'Admin Support', image: ava2 },
        { name: 'Jhon Mic', tittle: 'Sales', image: ava3 },
        { name: 'Lucy Rich', tittle: 'Marketing', image: ava4 },
    ];

    const [appState, changeState] = useState({
        activeObject: { id: 1, text: "Click on image to switch detail" },
        objects: [
            { id: 1, text: "He is Ceo Of our Company." },
            { id: 2, text: "This person belong to our admin supprt" },
            { id: 3, text: "All Sales manage by Jhon" },
            { id: 4, text: "Lucy focus on Marketing...." },
        ]
    });

   
    function toggleActive(index) {
        changeState({ ...appState, activeObject: appState.objects[index] });
    }

    function toggleActiveStyles(index) {
        if (appState.objects[index] === appState.activeObject) {

            return "box active";
        } else {

            // console.log("false")
            return "box inactive";
        }
    }

    return (
        <>
            <Grid container className="container-thepeople">

                <Grid item xs={12} md={3}> </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className="title-thepeople" variant="h4" component="h2" align="center">
                        Click on image to switch detail
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}> </Grid>



                <Grid item xs={12} md={1}> </Grid>
                <Grid item xs={12} md={10}>
                    <Grid container>
                        {allIcons.map((Icons, index) => (
                            <>
                                <Grid item xs={12} md={3} key={index}
                                    className={toggleActiveStyles(index)} onClick={
                                        () => {
                                            toggleActive(index);
                                        }
                                    }>
                                    <ScrollAnimation animateIn="animate__pulse" animateOut="bounceOutLeft">

                                        <div className="avatar-box">
                                            <img className="icon-boxes" src={Icons.image} alt="icons" />

                                            <br />
                                            <Typography variant="h6" component="h2" align="center" >
                                                {Icons.name}
                                            </Typography>
                                            <Typography variant="subtitle2" component="p" align="center" className='grayColor'>
                                                {Icons.tittle} <br /> <br />
                                            </Typography>
                                        </div>
                                    </ScrollAnimation>



                                </Grid>
                                {index === 3 ? <Grid item xs={12} md={12}> <br />  </Grid> : null}
                            </>

                        ))}

                        {/* <Typing speed={-500} loop={true}>
                            <span>{appState.activeObject.text}</span>
                            
                        </Typing> */}


                    </Grid>
                </Grid>
                <Grid item xs={12} md={1}> </Grid>


                <Grid item xs={12} md={3}> </Grid>
                <Grid item xs={12} md={6} className="detail-container">
                    <p className="line-1 anim-typewriter">
                        {appState.activeObject.text}
                    </p>
                </Grid>
                <Grid item xs={12} md={3}> </Grid>

            </Grid>
        </>
    );
}

export default ThePeople;