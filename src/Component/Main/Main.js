import React, {useRef} from 'react';
import Featured from '../Images/Intro_Featured_Image_Empty.svg';
import Brain from '../Images/Intro_Brain.svg';
import Layer from '../Images/Intro_Front_Layer.svg';
import './Main.css';
import Button from '@material-ui/core/Button';
import useWebAnimations from '@wellyshen/use-web-animations';

function Main(){
    
    const brainRef = useRef(null);
    const layerRef = useRef(null);

    useWebAnimations({
        ref: brainRef,
        keyframes: {
            transform: "translateY(50px)",
        },
        timing: {
            delay: 500,
            duration: 3000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        }

    });

    useWebAnimations({
        ref: layerRef,
        keyframes: [
            { opacity: 0.1},{ opacity: 0.9},{ opacity: 0.1},
            { opacity: 0.9},{ opacity: 0.1},{ opacity: 0.9},
            { opacity: 0.1},{ opacity: 0.9},{ opacity: 0.1},
 
 
        ],
        timing: {
            duration: 4000,
            iterations: Infinity,
            easing: 'ease-in-out',
        }
    });

    return(
        <>
        <div className="Main-div">
            <div className="main-container-discription">
                <div className="main-container-title">
                    <div className="main-container-title-2">CORTEX</div>
                    <div className="main-container-title-1">COPYWRITER</div>
                </div>
                <div className="main-container-paragraph">
                    <p className="intro-title">Enhance your communications with psychology-based copywriting and UX writing</p>
                </div>
                <div className="main-container-btn">
                    <Button variant="contained" className="main-btn">
                        Send a message
                    </Button>
                </div>
            </div>
            <div className="Brain-Style-All">
                <img className="brain" ref={brainRef} src={Brain} alt="Brain" />
                <img className="layer" ref={layerRef} src={Layer} alt="Layer" /> 
                <img className="brain-bg" src={Featured} alt="Featured" />
            </div>
        </div>
        </>
    );
}

export default Main;