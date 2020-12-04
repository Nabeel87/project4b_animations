import React from 'react';
import './Services.css';
import strategy from '../Images/Icons/strategy.svg';
import branding from '../Images/Icons/branding.svg';
import development from '../Images/Icons/development.svg';
import webDesign from '../Images/Icons/webdesign.svg';
import socail from '../Images/Icons/social.svg';
import ECommerce from '../Images/Icons/ecommerce.svg';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

function Services() {
    const allService = [
        { heading: 'Strategy', imgSrc: strategy, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { heading: 'Branding', imgSrc: branding, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { heading: 'Development', imgSrc: development, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { heading: 'Web Design', imgSrc: webDesign, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { heading: 'Social Media', imgSrc: socail, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
        { heading: 'Ecommerce', imgSrc: ECommerce, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
    ];
    return (
        <>
            {/* <div className="service-main-div" >
                <span className="img-span">
                    <img className="service-img" src={strategy} alt="aa" />
                    <img className="service-img" src={branding} alt="aa" />
                    <img className="service-img" src={development} alt="aa" />
                    <img className="service-img" src={webDesign} alt="aa" />
                    <img className="service-img" src={socail} alt="aa" />
                    <img className="service-img" src={ECommerce} alt="aa" />
                </span>
            </div> */}

            <Grid container className="service-main-div">

                

                {/* 1st Row OUR SERVICES */}
                <Grid item xs={12} md={3}> </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2" align="center" >
                        Our Services
                        <div className="borderBottom" ></div>
                    </Typography>
                    <br /> <br />
                    <Typography variant="subtitle1" component="p" align="center" style={{ padding: '0% 5%' }}>
                        We craft digital, Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                        Consectetur adipiscing elit nullam nunc justo sagittis.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}> </Grid>
                {/* Spacing */}
                <Grid item xs={12} md={12}> <br /> <br /> <br /> </Grid>


                {/* 2nd Row  services   */}
                <Grid item xs={12} md={1}> </Grid>
                <Grid item xs={12} md={10}>
                    <Grid container>
                        {allService.map((Service, index) => (
                            <>
                                <Grid item xs={12} md={4}>
                                    <ScrollAnimation animateIn="animate__pulse" animateOut="bounceOutLeft">
                                        <div className="service-box">
                                            <div className="icon-box">
                                                <img src={Service.imgSrc} alt="icons" />
                                            </div>
                                            <br />
                                            <Typography variant="h6" component="h2" align="center" >
                                                {Service.heading}
                                            </Typography>
                                            <br />
                                            <Typography variant="subtitle2" component="p" align="center" className='grayColor'>
                                                {Service.detail} <br /> <br />
                                            </Typography>
                                        </div>
                                    </ScrollAnimation>
                                </Grid>
                                {index === 2 ? <Grid item xs={12} md={12}> <br />  </Grid> : null}
                            </>

                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={1}> </Grid>

                

            </Grid>


        </>
    );
}

export default Services;