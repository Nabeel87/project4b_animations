import React, { useState } from 'react';
import './CheckTest.css';
import Typing from 'react-typing-animation';

function CheckTest() {

    const [appState, changeState] = useState({
        activeObject: { id: 1, text: "aaaa" },
        objects: [
            { id: 1, text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
            { id: 2, text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" },
            { id: 3, text: "ccccccccccccccccccccccccccccccccc" },
            { id: 4, text: "ddddddddddddddddddddddddddddddddddd" },
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
        <div className="test-main">
            {appState.objects.map((element, index) => (
                <div key={index} className={toggleActiveStyles(index)} onClick={
                    () => {
                        toggleActive(index);

                
                        

                    }
                }>
                    <h1>{appState.objects[index].id}</h1>
                    <Typing>
                            <span className="spanShow">{appState.activeObject.text}</span>
                            {/* {console.log(appState.activeObject.text)} */}

                        </Typing>

                </div>
            ))}
            <br />
            <div>

                {/* <h1>{appState.activeObject.id}</h1> */}
                
            </div>


        </div>
    );
}

export default CheckTest;