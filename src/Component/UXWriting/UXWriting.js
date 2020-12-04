import React from 'react';
import './UXWriting.css';
import Ux from '../Images/UX_W.svg';
import ScrollAnimation from 'react-animate-on-scroll';

function UXWriting(){
    return(
        <div>

            {/* <img src={Ux} alt="Ux" /> */}


            
            <div className="main-writing">
                <div className="UX-Image-Main">
                    <ScrollAnimation animateIn="animate__heartBeat" animateOut="bounceOutLeft">
                        <img src={Ux} alt="Ux2" className="animate__swing"/>
                        {/* class="animate__animated animate__bounce" */}
                    </ScrollAnimation>
                </div>
                <div className="UX-text">
                    <div classNam="UX-heading">
                        <h1>UX Writing</h1>
                    </div>
                    <div className="UX-para">
                        <p >
                            I develop clear and useful text in product interfaces to help 
                            users reach a specific goal, whether that's completing a form 
                            or tapping a button. This includes every type of content from 
                            on-screen help systems, user onboarding and in-app messages to 
                            push notifications and tooltips.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hr"> </div>
        </div>

    );
}

export default UXWriting;