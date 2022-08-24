//Standard imports 
import React, { Component, useState, useEffect } from 'react';

import './choice.css';


const ChoiceSite = (props) => {

    const [mainMenu, setMainMenu] = useState(true);
    const [toggleMenu, setToggleMenu] = useState('OPEN');
    const [mainMenuState, setmainMenuState] = useState('none');

    const menuHandle = () => {
        var x = document.getElementById("mainmenu");

        setMainMenu(!mainMenu);

        if (mainMenu) {
            setmainMenuState('block');
            x.style.display = mainMenuState;
            setToggleMenu('CLOSE');
        }
        else {
            setmainMenuState('none');
            x.style.display = mainMenuState;
            setToggleMenu('OPEN');
        }
    }

    var dependency = false;
    var vanilla = false;
    var toggle = false;

    const [siteVersion, setSiteVersion] = useState("");
    const [changeScene, setChangeScene] = useState();

    const van = () => {

        window.location.href = "/#/";
        window.location.reload();
    }
    const dep = () => {

        window.location.href = "/#/dependency+";
        window.location.reload();
    }


    props.func(siteVersion);
    props.func2(changeScene);

    return (
        <>
            <div style={{
                backgroundColor: '#101730ff',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}>
                <div className="chatbotBar" >
                    <button
                        style={{
                            color: '#025B79ff',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontSize: 'smaller',

                        }}
                        onClick={menuHandle}>
                        <a>{toggleMenu}</a> 3D options
                    </button>
                </div>
            </div>
            <div className="choicediv" style={{ background: "rgb(36, 42, 54)", textAlign: "center", width: "100%", }}>

                <div id="mainmenu" className="choicediv" style={{ display:`${mainMenuState}`, background: "rgb(36, 42, 54)", textAlign: "center", width: '100%', border: "10px solid #101730ff", }}>

                    <h1
                        style={{
                            color: "#AEBEBEff",
                            backgroundColor: "transparent",
                            fontSize: "auto",
                            fontWeight: '900',
                        }}>
                        3D Options
                    </h1>
                    <p style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '700',
                    }}>My first website using React!</p>

                    

                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>
                        <em>Choose a web experience </em> to display my personal coding portfolio in a emerging technology fashion <b> OR </b> through vanilla JS/HTML/CSS.
   
                    </h3>

                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>
                        The 3D MicroController API is a CAD 3D interactive model that you can interact with to 
                        change my arduino board and stats in real life ! 
                    </h3>

                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>
                        Through the 3D Homepage you can also interact with my website through a 
                        3D exploration menu with easter eggs.
                    </h3>

                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>
                        <em> Vanilla / Regular version</em> demonstrates my pure/vanilla <code style={{ color: "#AEBEBEff" }}>HTML , CSS , JS , JSX</code> skills with the
                        react framework. <br />Other than the essential 'react-' libraries all other components and code are made by me from scratch.
                    </h3>
                    <h3 style={{
                        color: "#AEBEBEff",
                        fontSize: "auto",
                        fontWeight: '900',
                    }}>  Material UI and Ant UI are only used for the 3D versions of my website. All other UI was created by me in an attempt to learn.
                         I also understand this website may not be "conventional" or follow some web-standards. I did this on purpose to have creative freedom with the UI !
                    </h3>

                    <a style={{ color: "#AEBEBEff" }} href="https://github.com/codingcodewhilegoofin"> Feel free to contact me</a>
                    <div style={{
                        background: "transparent", padding: "1px",
                        fontSize: "auto"
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}>
                            <button
                                style={{
                                    color: '#AEBEBEff',
                                    backgroundColor: '#1B2524ff',
                                    cursor: 'pointer',
                                    padding: '5px',
                                    width: '50%',
                                    border: '1px solid #3F646Dff'
                                }}
                                onClick={dep}
                            >
                                3D MicroController API
                            </button>

                            <button
                                style={{
                                    color: '#AEBEBEff',
                                    backgroundColor: '#1B2524ff',
                                    cursor: 'pointer',
                                    padding: '5px',
                                    width: '50%',
                                    border: '1px solid #3F646Dff'
                                }}
                                onClick={() => setChangeScene(true)}
                            >
                                3D HomePage
                            </button>


                        </div>

                        <button
                            style={{
                                color: '#AEBEBEff',
                                backgroundColor: '#1B2524ff',
                                cursor: 'pointer',
                                padding: '5px',
                                width: '50%',
                                border: '1px solid #3F646Dff'
                            }}
                            onClick={van}
                        >
                            Regular/Vanilla Version
                        </button>

                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}
export default ChoiceSite;
