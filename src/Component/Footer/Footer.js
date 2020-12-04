import React from 'react';
import './Footer.css';
import ava1 from '../Images/Avatar/image1.jpg';
import ava2 from '../Images/Avatar/image3.jpg';
import ava3 from '../Images/Avatar/image2.jpg';
import ava4 from '../Images/Avatar/image4.jpg';
import social1 from '../Images/Icons/facebook.png';
import social2 from '../Images/Icons/instagram.png'
import social3 from '../Images/Icons/linkedin.png';
import social4 from '../Images/Icons/twitter.png';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

function Footer() {

    const allIcons = [
        { image: ava1 },
        { image: ava2 },
        { image: ava3 },
        { image: ava4 },
    ];

    const allSocial = [
        { image: social1 },
        { image: social2 },
        { image: social3 },
        { image: social4 },
    ];

    return (
        <>
            <Grid container className="container-about">
                {/* 1st Row OUR SERVICES */}
                <Grid item xs={12} md={3}> </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2" className="footer-heading" >
                        Based in Pakistan, Available worldwide
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}> </Grid>

                {/* Memebers list area */}

                <Grid item xs={12} md={3}> </Grid>


                <Grid item xs={12} md={6}>
                    <Grid container>
                        {allIcons.map((Icons, index) => (
                            <>
                                <Grid item xs={12} md={3}>
                                    <ScrollAnimation animateIn="animate__headShake" animateOut="bounceOutLeft">
                                        <div className="avatar-box">
                                            <img className="icon-boxes" src={Icons.image} alt="icons" />
{/* 
                                            <br />
                                            <Typography variant="h6" component="h2" align="center" >
                                                {Icons.name}
                                            </Typography>
                                            <Typography variant="subtitle2" component="p" align="center" className='grayColor'>
                                                {Icons.tittle} <br /> <br />
                                            </Typography> */}
                                        </div>
                                    </ScrollAnimation>
                                </Grid>
                                {index === 3 ? <Grid item xs={12} md={12}> <br />  </Grid> : null}
                            </>

                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}> </Grid>

                {/* Social media Section */}

                <Grid item xs={12} md={5}> </Grid>

                <Grid item xs={12} md={2}>
                    <Grid container>
                        {allSocial.map((social, index) => (
                            <>
                                <Grid item xs={12} md={3}>
                                    <ScrollAnimation animateIn="animate__swing" animateOut="bounceOutLeft">
                                        <img className="social-boxes" src={social.image} alt="icons" />

                                    </ScrollAnimation>
                                    
                                </Grid>
                                {index === 3 ? <Grid item xs={12} md={12}> <br />  </Grid> : null}
                            </>

                        ))}
                                    
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}> </Grid>
                
                <h4 className="footer-end">
                    © Copywriter 2020 | NABIL 100 1859 0520 <br /> <br />
                </h4>
            </Grid>
            {/* <div className="container-about">
                <div className="footer-heading">Based in Pakistan, Available worldwide</div>
                <div className="footer-avatar">
                    <img src={avatar} alt="avatar" />
                </div>
            </div> */}
        </>
    );
}
export default Footer;