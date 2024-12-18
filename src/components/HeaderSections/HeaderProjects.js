import React, { useState, useEffect, useParams } from 'react';

import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';
import '../../icons/gio.jpg';

import GioLogo from '../../icons/GioLogo2.png';
import STORE from '../../icons/8XcuzD.png';

import Arrayinfo from '../../icons/Arrayinfo.png';
import Sp from '../../icons/SP.png';

import { Link } from "react-router-dom";
import { ReactComponent as Bitcoinsymb } from '../../icons/Bitcoin.svg';

import STOREmusic from '../../audio/Store.ogg';
import Table from './Table';
import GioTable from './GioTable.js';
import CrudTable from './CrudTable.js';
import ProjectCard from './ProjectCard.js';

import '../PageCss/Crudtable.css';
import '../PageCss/GioTable.css';
import '../PageCss/NewTable.css';

function HeaderProjects() {

  const [mainBody, setMainBody] = useState(true)

  const mainBodyHandle = () => {
    var x = document.getElementById("mainBody");
    if (x.style.display === "none") {
      x.style.display = "block";
      setMainBody(!mainBody)
    }
    else {
      x.style.display = "none";
    }
  }

  const [baseUrl, setBaseUrl] = useState("https://swapi.tech/api/starships");
  const [data, setData] = useState([]);
  const [currentStatus, setStatus] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {

    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    //console.log(windowSize[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [windowSize])

  let specialheader;
  let specialheader2;
  let specialheader3;
  let logoSection;
  let youtubesub;
  let musicToggle = false;
  let Toggle;
  let urlToggle = false;
  let ProjectsBanner;
  let CardMarginTop;
  let FontSizeLarge;
  let FontSizeMedium;
  let FlexDirectionFooter;
  let FooterSize;
  let FooterSpacer;


  if (windowSize[0] < 500) {
    specialheader = <></>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="auto" width='99%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    specialheader3 = <iframe padding="auto" width='99%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    logoSection = <></>;
    youtubesub = <></>;
    ProjectsBanner = '100%';
    CardMarginTop = '5px';
    FontSizeLarge = '60px';
    FontSizeMedium = 'medium';
    FlexDirectionFooter = 'column';
    FooterSize = '100%';
    FooterSpacer = '0%';
  }
  else if (windowSize[0] < 600) {
    ProjectsBanner = '90%';
    CardMarginTop = '25px';
    FontSizeLarge = '80px';
    FontSizeMedium = 'large';
    FlexDirectionFooter = 'column';
    FooterSize = '100%';
    FooterSpacer = '0%';
  }
  else if (windowSize[0] < 800) {
    ProjectsBanner = '90%';
    CardMarginTop = '25px';
    FontSizeLarge = '50px';
    FontSizeMedium = 'large';
    FlexDirectionFooter = 'column';
    FooterSize = '45%';
    FooterSpacer = '10%';
  }
  else {
    ProjectsBanner = '80%';
    CardMarginTop = '50px';
    FontSizeLarge = '100px';
    FontSizeMedium = 'x-large';
    FooterSize = '45%';
    FooterSpacer = '10%';
    specialheader = <h2 style={{ color: 'white' }}>Feel free to join my discord</h2>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="10px" width='100%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    specialheader3 = <iframe src="https://gmdevapi.com" padding="10px" width='100%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    youtubesub = <h2 style={{ color: 'white' }}>SUB TO MY YOUTUBE?</h2>;
    logoSection = <div className="end-div" ><img src={GioLogo} width='50%' height='auto' style={{ padding: '5px' }} /></div>;
    FlexDirectionFooter = 'row';
  }

  function globalMusic() { };
  function urlChange() {
    urlToggle = !urlToggle;
    if (urlToggle) {
      setBaseUrl("https://swapi.tech/api/people");
    }
    else {
      setBaseUrl("https://pokeapi.co/api/v2/berry");
    }
  }

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(new Error("Response Error!"));
        }
        else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then((json) => {
        try {
          setData(json.results);
          setStatus(true);
        }
        catch
        {
          return Promise.reject(new Error(`State Error!: Data: ${data} , Connection:${currentStatus}`));
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [baseUrl]);

  return (
    <div>

      

      <div style={{
        backgroundColor: 'transparent',
        borderRadius: "5px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <button
          style={{
            color: '#025B79ff',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'smaller',
            textTransform: 'uppercase',
          }}
          onClick={mainBodyHandle}>
          CLOSE
        </button>
      </div>

      <div id="mainBody" className='gio-main'>

        <div class="Iam" style={{ marginTop: `${CardMarginTop}`, width: `${ProjectsBanner}` }}>

          <h1 style={{ color: '#AEBEBEff', fontSize: `${FontSizeLarge}`, fontWeight: '900' }}>Projects</h1>
          <b>
            <div class="innerIam" style={{ backgroundColor: 'black' }}>
              Web,VideoGame, Embeded systems development<br />
              Spotify, Stock, OpenAi API Integrations<br />
              Web, Game, Embeded applications development<br />
              React & CloudFlare & Full Stack Web App's<br />
              Data Structures & Algorithms <br />
              CLI and Low level based projects<br />
            </div>
          </b>
          <a style={{ color: 'white', cursor: 'pointer' }} href='https://giphy.com/ericaofanderson'>Gifs by : Erica Anderson</a>
        </div>

      
        <div className='gio-container' style={{ paddingBottom: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', background: 'transparent', flexDirection: 'column', width: `${ProjectsBanner}`, alignSelf: 'center', alignItems: 'center', border: 'none', paddingTop: '5px' }}>
          <div className="projectFooter" style={{ boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', width: `${ProjectsBanner}`, }}>

            <h1
              style={{
                color: "#AEBEBEff",
                backgroundColor: "#025B79ff",
                marginTop: "5px",
                border: "2px solid #242a36 ",
                borderRadius: "5px",
                fontSize: `${FontSizeMedium}`,
                fontWeight: '900',
                margin: '5px',
                width: `${ProjectsBanner}`
              }}>
              PORTFOLIO SHOWCASE
            </h1>

            <div className='spacer'>
            </div>

            <ProjectCard
              title="Other Web App's"
              subtitle="Web Applications"
              description="A web application is application software that is accessed using a web browser. Web applications are delivered on the World Wide Web to users with an active network connection."
              cardToggleID={"IdOne"}
            >
              <div className="gio-container" style={{ margin: '10px', background: 'none' }}>
                <div className="gio-container" style={{ width: '100%', borderRadius: "5px", background: 'black' }}>
                  <h3 style={{
                    color: "#AEBEBEff",
                    fontSize: `${FontSizeMedium}`,
                    fontWeight: '900',
                    padding: '5px'

                  }}>
                    FSD.com is a react based web app to connect people to our personal projects.
                  </h3>
                  <label></label>
                  <a style={{
                    color: '#AEBEBEff',
                    fontSize: 'large',
                    fontWeight: 'bold',
                    backgroundColor: "#243232ff",
                    padding: '5px'
                  }}
                    href="https://fullstackingdevelopment.com/"
                  >
                    fullstackingdevelopment.com
                  </a>
                  <label></label>
                </div>
              </div>

              <div className="gio-container" style={{ margin: '10px', background: 'black' }}>
                <div className="gio-container" style={{ width: '100%', borderRadius: "5px", background: 'black' }}>



                  <h3 style={{
                    color: "#AEBEBEff",
                    fontSize: `${FontSizeMedium}`,
                    fontWeight: '900',
                    padding: '5px'

                  }}>
                    Gmdevapi.com is a CloudFlare worker built TailwindCss and React framework.
                    It hosts enpoints for any public application to call via HTTP request.
                    It acts as a middle-layer between my website and 3rd party API's.
                  </h3>



                  <label></label>
                  <a style={{
                    color: '#AEBEBEff',
                    fontSize: 'large',
                    fontWeight: 'bold',
                    backgroundColor: "#243232ff",
                    padding: '5px'
                  }}
                    href="https://gmdevapi.com"
                  >
                    gmdevapi.com
                  </a>
                  <label></label>
                </div>
              </div>
            </ProjectCard>

            <div className='spacer'>
            </div>


            <ProjectCard
              title="3rd Pary API Intergrations"
              subtitle="Spotify API"
              description="I intergrated the Spotify API my web app to show off my music !"
              cardToggleID={"IdTwo"}
            >

              <div class="subheader2body" style={{ paddingBottom: '20px', paddingLeft: '2px', paddingRight: '2px', paddingTop: '20px' }}>
                <div className="end-div5" style={{ paddingBottom: '10px' }}>
                  <Link to="/Spotify">
                    <div style={{ paddingBottom: ' 5px', }}>
                      <h2 style={{
                        color: '#AEBEBEff',
                        fontSize: `${FontSizeMedium}`,
                        backgroundColor: '#242a36',
                        borderRadius: "5px",
                      }}> Click me! </h2>
                    </div>
                    <img src={Sp} width='100%' height='auto' style={{ padding: '2px' }} />

                  </Link>

                </div>

                <h1
                  style={{
                    color: "#AEBEBEff",
                    backgroundColor: "#025B79ff",
                    marginTop: "5px",
                    border: "2px solid #242a36 ",
                    borderRadius: "5px",
                    fontSize: `${FontSizeMedium}`,
                    fontWeight: '900',
                    margin: '5px'
                  }}>
                  Stock and Crypto API intergration
                </h1>

                <div style={{ paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px' }}>

                  <Link to="/cstrack">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div className='gio-main' style={{ width: '50%', border: 'none', backgroundColor: 'black', borderRadius: '55px' }}>
                        <Bitcoinsymb style={{ backgroundColor: '#AEBEBEff', border: '1px solid black', borderRadius: '50px' }} />
                      </div>

                      <div style={{ paddingTop: '10px', width: '50%' }}>

                        <h2 style={{
                          color: '#AEBEBEff',
                          fontSize: `${FontSizeMedium}`,
                          backgroundColor: '#242a36',
                          fontWeight: '900',
                          paddingTop: '5px'

                        }}> Click here ! </h2>
                      </div>
                    </div>
                  </Link>
                </div>

                <h1
                  style={{
                    color: "#AEBEBEff",
                    backgroundColor: "#025B79ff",
                    marginTop: "5px",
                    border: "2px solid #242a36 ",
                    borderRadius: "5px",
                    fontSize: `${FontSizeMedium}`,
                    fontWeight: '900',
                    margin: '5px'
                  }}>
                  Custom API call and CRUD examples
                </h1>


                <div className="gio-container" style={{ background: 'none' }}>
                  <div className='gio-container-2' style={{ width: '100%', }}>
                    <h2 style={{
                      color: '#AEBEBEff',
                      fontSize: `${FontSizeLarge}`,
                      background: 'none',
                      padding: '10px',

                    }}>API Switch</h2>
                    <h2 style={{ color: 'white', fontSize: `${FontSizeMedium}`, }} >Endpoint request using vanilla JS displayed in custom table</h2>
                    <div style={{ backgroundColor: '#243232ff' }}>
                      <h3 style={{ fontSize: `${FontSizeMedium}` }}>You can switch between
                        <h1 style={{
                          color: 'yellow',
                          fontSize: `${FontSizeMedium}`,
                          background: 'none',
                          padding: '10px',
                        }}
                        >
                          swapi & pokeapi</h1> endpoints using this button!</h3>
                      <h3 ><em>It may take some time to load between button presses</em></h3>
                      <button
                        style={{ color: '#AEBEBEff', backgroundColor: '#101730ff', cursor: 'pointer' }}
                        onClick={urlChange}>
                        Change API
                      </button>
                    </div>
                  </div>

                  {!currentStatus ? <h2>Loading... </h2> : <Table data={data} />}
                </div>

                <div className="gio-container" style={{ paddingBottom: '5px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px', background: 'black', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
                  <h2 style={{
                    color: '#AEBEBEff',
                    fontSize: `${FontSizeLarge}`,


                  }}>CRUD example  </h2>
                  <h2 style={{ color: 'white', fontSize: `${FontSizeMedium}`, }}> This is a demonstration of CRUD properties. The data is created or altered in gmdevapi.com via HTTPS requests , and sent to my <b style={{ color: "green" }}>Mongo Database</b></h2>
                  <h2 style={{ color: 'white', fontSize: `${FontSizeMedium}`, }}> This means you can <b>create</b> , <b style={{ color: "lightgreen" }}>edit</b>, or <b style={{ color: "red" }}>delete</b> data in my database! Feel free to leave your social media and dev project links here</h2>
                  {!currentStatus ? <h2>Loading... </h2> : <CrudTable />}
                  <h2 style={{ color: 'white', fontSize: `${FontSizeMedium}`, }}> This table and HTTP connections are made from scratch and can be found in my source code under <code>CrudTable.js</code></h2>

                </div>
              </div>
            </ProjectCard>

            <div className='spacer'>
            </div>

            <ProjectCard
              title="Data Structures, Algorithms, and more"
              subtitle=" C++ Compiler for IEEE 754 float converter"
              description="I wrote a CLI program in C++ , feel free to try it in this code editor!"
              cardToggleID={"IdThree"}
            >

              <div className='spacer2'>
              </div>

              <div class="subheader3body" >
                <div className="end-div5"  >
                  <div className='gio-container-4' style={{ backgroundColor: 'transparent', }}>

                    <iframe
                      height="600px"
                      width="100%"
                      src="https://replit.com/@codingcodewhile/IntelligentBurdensomeAdaware?lite=true"
                      scrolling="yes"
                      frameborder="yes"
                      allowtransparency="true"
                      allowfullscreen="true"
                      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">
                    </iframe>

                    <p style={{ backgroundColor: '#243232ff' }}>I created a IEEE 754 standard converter to convert hexadecimal ( and decimal) numbers into floating point.</p>
                    <p style={{ backgroundColor: '#243232ff' }}> This is my original code and It does have a few errors here and there discussed in DOC.
                      Just press the green RUN arrow and then click next to the orange arrow when prompted. You may enter a hexadecimal number or decimal.
                    </p>
                  </div>
                </div>

                <h1
                  style={{
                    color: "#AEBEBEff",
                    backgroundColor: "#025B79ff",
                    marginTop: "5px",
                    border: "2px solid #242a36 ",
                    borderRadius: "5px",
                    fontSize: `${FontSizeMedium}`,
                    fontWeight: '900',
                    margin: '5px'
                  }}>
                  Practice and usage with DSA !
                </h1>

                <div className="end-div5" style={{ paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px' }}>
                  <Link to="/Dsa">
                    <h2 style={{
                      color: '#AEBEBEff',
                      fontSize: `${FontSizeLarge}`,
                      backgroundColor: '#242a36',
                      margin: '5px'
                    }} > Click me!  </h2>
                    <img src={Arrayinfo} width='100%' height='auto' style={{ padding: '2px' }} />
                  </Link>
                </div>
              </div>
            </ProjectCard>

            <div className='spacer'>
            </div>

            <ProjectCard
              title="Video game dev/design , Music, and more"
              subtitle=" Pink Balls created with Unity & C#"
              description="I created a small ball physics based game with Unity. Sadly it only works on Desktop"
              cardToggleID={"IdFour"}
            >

              <div class="subheader4body" style={{ padding: 'none', margin: 'none' }}>
                <div className='gio-container' style={{ background: 'none', padding: 'none', margin: 'none' }}>
                  <p style={{ backgroundColor: '#243232ff' }}>
                    The game is based on velocity.
                    <br></br>
                    <br></br>You have to keep pressing the move keys to gain enough momentum to reach the end zone! Watch out for cubes they will slow you down.
                  </p>
                  <iframe src="https://itch.io/embed-upload/2795508?color=EEEEEE" allowfullscreen="" width="100%" height="1000px" frameborder="0">
                    <a href="https://yupimaperson101.itch.io/pink-balls">Play Pink Balls on itch.io</a>
                  </iframe>
                  <p style={{ backgroundColor: '#243232ff' }}>I designed and developed this game completley on my own with some inspiration.<br></br><br></br> I was going for a "monkey ball" type game.
                    This game although simple at first glance was extremely hard to make and has many, many bugs that I had to fix. <br></br><br></br>
                    The game is finished however and beatable.<br></br><br></br> There is a menu, main gameplay loop, and end goal.
                    Please reach out to me if you find a bug.<br></br> Also, I plan to make more levels at some point.
                  </p>
                </div>

                <h1
                  style={{
                    color: "#AEBEBEff",
                    backgroundColor: "#025B79ff",
                    marginTop: "5px",
                    border: "2px solid #242a36 ",
                    borderRadius: "5px",
                    fontSize: `${FontSizeMedium}`,
                    fontWeight: '900',
                    margin: '5px'
                  }}>
                  STORE video game (Musical Credits)
                </h1>

                <div className='gio-container-2'>
                  <h2 style={{
                    color: '#AEBEBEff',
                    fontSize: `${FontSizeLarge}`,

                    fontWeight: '900',
                    padding: '5px'
                  }}>STORE </h2>
                  <p style={{ backgroundColor: '#19819Fff', fontSize: `${FontSizeMedium}`, }}>
                    I created the soundtrack for the demo game
                    <em> STORE</em> created by
                    <em> FellHawk Studios </em>
                  </p>

                  <a style={{
                    color: "white",
                    fontFamily: "Exo",
                    fontSize: `${FontSizeLarge}`,


                  }} href="https://fell-hawk.itch.io/store">
                    FellHawk-Itch.io
                  </a>

                  <img src={STORE} width='99%' height='auto' />
                  <span></span>
                  <div>
                    <audio src={STOREmusic}
                      type="audio/wav"
                      controls="true"
                      class="audio-1"
                      style={{
                        backgroundColor: "#19819Fff",
                        border: "5px solid #19819Fff",
                        color: "red",
                        padding: "5px",
                        margin: "20px",
                        borderRadius: "50px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </ProjectCard>

          </div>
        </div>

        <div className='spacer'>
        </div>

        <div className='gio-container' style={{ paddingBottom: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', background: 'transparent', flexDirection: 'column', width: `${ProjectsBanner}`, alignSelf: 'center', alignItems: 'center', border: 'none', paddingTop: '5px' }}>
          <div className="projectHeader" style={{ boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: `${CardMarginTop}`, width: `${ProjectsBanner}`, background: 'white', }}>

            <h1
              style={{
                color: "#AEBEBEff",
                backgroundColor: "#025B79ff",
                marginTop: "5px",
                border: "2px solid #242a36 ",
                borderRadius: "5px",
                fontSize: `${FontSizeMedium}`,
                fontWeight: '900',
                margin: '5px',
                width: `${ProjectsBanner}`
              }}>
              PORTFOLIO DIRECTORY AND Q&A
            </h1>

            <div className='spacer'>
            </div>

            <ProjectCard
              title="Directory"
              subtitle="Project Directory"
              description="List of all projects I have made available to the public that involve coding or programming"
              cardToggleID={"IdZero"}
            >
              <>
                <ol style={{ backgroundColor: "#025B79ff", fontWeight: '900', border: '3px solid black', borderRadius: "10px", }}>
                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Web dev / fullstack based projects</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: '#19819Fff', fontWeight: '700', border: '2px solid #19819Fff', margin: '5px', borderRadius: "20px", }}>giomoscato.com<br /> <a style={{ color: 'white' }}>(React web app)</a></li>
                    <label></label>
                    <li style={{ color: '#19819Fff', fontWeight: '700', border: '2px solid #19819Fff', margin: '5px', borderRadius: "20px", }}>fullstackingdevelopment.com<br /> <a style={{ color: 'white' }}>(React web app)</a></li>
                    <label></label>
                    <li style={{ color: '#19819Fff', fontWeight: '700', border: '2px solid #19819Fff', margin: '5px', borderRadius: "20px", }}>gmdevapi.com<br /> <a style={{ color: 'white' }}>(CloudFlare Worker API JS)</a></li>
                    <label></label>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>API integrated projects</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#19819Fff', fontWeight: '700', border: '2px solid #19819Fff' }}>Spotify API<br /> <p style={{ color: 'white' }}>(called from gmdevapi.com)</p><br /><a href="/#/Spotify" style={{ color: '#19819Fff' }}>/Spotify</a></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#19819Fff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>Open AI API<br /> <p style={{ color: 'white' }}>(called from gmdevapi.com)</p><br /><p style={{ color: 'white' }}>Used for the AI Gio-Chatbot</p><br /><p style={{ color: '#19819Fff' }}>Check the top of this website</p></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#19819Fff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>Financial API's<br /> <p style={{ color: 'white' }}>(called from giomoscato.com)</p><br /><p style={{ color: 'white' }}>Used to display financial data</p><br /><a href="/#/cstrack" style={{ color: '#19819Fff' }}>/cstrack</a></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#19819Fff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>Arduino Cloud IOT API<br /> <p style={{ color: 'white' }}>(called from gmdevapi.com)</p><br /><a style={{ color: 'white' }}>Used in 3D render of Arduino Project</a><br /><a href="/#/dependency+" style={{ color: '#19819Fff' }}>/dependency+</a></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#19819Fff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>Polygon.io API<br /> <p style={{ color: 'white' }}>(called from giomoscato.com)</p><br /><p style={{ color: 'white' }}>Displays financial information</p><br /><a href="/#/cstrack+" style={{ color: '#19819Fff' }}>/cstrack</a></li>
                    <label></label>
                    <li style={{ margin: '2px', borderRadius: "20px", color: '#19819Fff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff' }}>SW API<br /> <p style={{ color: 'white' }}>(called from giomoscato.com)</p><p style={{ color: 'white' }}>Used for table</p></li>
                    <label></label>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>3D based projects</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: '#19819Fff', fontWeight: '700', border: '2px solid #19819Fff', margin: '5px', borderRadius: "20px", }}>3D version of giomoscato.com<br /> <a style={{ color: 'white' }}>(Uses ThreeJS and R3F)</a></li>
                    <label></label>
                    <li style={{ color: '#19819Fff', fontWeight: '700', border: '2px solid #19819Fff', margin: '5px', borderRadius: "20px", }}>3D Introduction Scene & Menu<br /> <a style={{ color: 'white' }}>(Uses SplineJS)</a></li>
                    <label></label>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Data structure & Algorithm based projects</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ padding: '5px', margin: '5px', borderRadius: "20px", color: '#19819Fff', fontWeight: '700', border: '2px solid #19819Fff' }}>C++ Compiler for IEEE 754 float converter<br /> <p style={{ color: 'white' }}>(Written in C++)</p></li>
                    <label></label>
                    <li style={{ margin: '5px', borderRadius: "20px", color: '#19819Fff', fontWeight: '700', border: '2px solid #19819Fff' }}>DSA showcase<br /><p style={{ color: 'white' }}>(Written in pure JS & JSX)</p></li>
                    <label></label>
                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Video Games</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid #19819Fff', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: '#19819Fff', fontWeight: '700', fontWeight: '900', border: '2px solid #19819Fff', margin: '5px', borderRadius: "20px", }}>Pink Balls<br /> <a style={{ color: 'white' }}>(Used Unity, written in C#)</a></li>
                    <label></label>

                  </ul>


                </ol>
              </>

            </ProjectCard>

            <div className='spacer'>
            </div>


            <ProjectCard
              title="Q & A"
              subtitle="Questions and answers"
              description="More information about these projects, where to find them, and what they do."
              cardToggleID={"Id"}
            >
              <div className="end-div5" >
                <ol style={{ backgroundColor: "#025B79ff", fontWeight: '900', border: '3px solid black', borderRadius: "10px", }}>
                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: How can I navigate this website better, i'm lost ?</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>There is a glowing menu button to click on at the bottom of your screen,<br /> or a custom menu at the top</li>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: What the heck is this website ?</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>My personal portfolio to showcase my coding projects<br /> <a style={{ color: 'white' }}>This website itself is also a project so it can get confusing.</a></li>


                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: How may projects are there total</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>4 technically<br /> <a style={{ color: 'white' }}>Some of the projects I am working on are nested INTO this website.<br /> I know it can be a bit confusing which is why I made this Q&A.</a></li>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: Okay, which projects are part of the website ?</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>Any 3D scene, API call, or pure JS / JSX is built from scratch into this website<br /> <a style={{ color: 'white' }}>The 3D scenes do use libraries but I only used them to set up the environment's necessary.</a> <br />If you're still on giomoscato.com <br /> it's probably a project built into the site or using an Iframe</li>


                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: What is that 3D scene when I load this website?</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>A 3D scene created with Spline.js<br /> <a style={{ color: 'white' }}>I wanted the introduction to my portfolio to be interesting<br /> That scene is a menu basically but has some easter eggs.</a></li>


                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: How can I see your projects without having to go to other websites</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>Check "Project Showcase" to see them live on this website</li>
                    <label></label>


                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: Are all your projects code - based?</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>Any projects mentioned in "Project Directory" are coded by me or with a team<br /> <p style={{ color: 'white' }}>I do have non-code projects on here but they are not mentioned in the directory</p></li>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: How can I find a specific project ?</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>Check "Project Directory" or use the Gio-Chatbot and ask it a question</li>
                    <label></label>


                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: Most impressive project ? </li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>giomoscato.com or some C++ based projects I have not yet realeased</li>
                    <label></label>


                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: Favorite project?</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}>Pink balls was my first super silly game I ever made, but it was really fun<br /> It was also my first experience with 3D worlds</li>

                  </ul>

                  <li style={{ borderRadius: "10px", backgroundColor: "white", fontWeight: '900', border: '2px solid black', margin: '5px' }}>Q: Can you help me code / build a website?</li>
                  <ul style={{ borderRadius: "10px", backgroundColor: "black", fontWeight: '900', border: '2px solid black', margin: '10px' }}>
                    <label></label>
                    <li style={{ color: 'white', fontWeight: '700' }}> Yes contact me ! </li>

                  </ul>

                </ol>
              </div>

            </ProjectCard>

          </div>
        </div>

      </div>

      <div style={{
        backgroundColor: 'transparent',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <button
          style={{
            color: '#025B79ff',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: `${FontSizeMedium}`,
            textTransform: 'uppercase',
          }}
          onClick={mainBodyHandle}>
          OPEN
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: `${FlexDirectionFooter}`, margin: '10px' }}>

        <div className="end-div" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', margin: '5px', background: 'black', borderRadius: "30px", width: `${FooterSize}` }}>
          <a href="https://github.com/codingcodewhilegoofin/giowebsite">
            <h2 style={{
              color: '#AEBEBEff',

              fontWeight: '900',
              marginBottom: '5px'
            }}> My website technology pipeline / stack ? ✨ </h2>

            <ol style={{
              color: '#AEBEBEff',
              background: 'rgba(0, 0, 0, 0.8)',
            }}>
              <li> Bash/Linux/Windows( CLI/OS )</li>
              <li> VScode</li>
              <li> ReactJS </li>
              <li> NPM</li>
              <li> HTML/CSS/JS/JSX </li>
              <li> Githubpages </li>
              <li> GoogleDomains</li>
              <li> CloudFlare Pages</li>
              <li> Github </li>
            </ol>
            <h3 style={{
              color: '#AEBEBEff',
              fontWeight: '900',

            }}> Please consider collaborating
              <br /> or donating!
              <br></br>🔥

            </h3>
          </a>
        </div>

        <div style={{ width: `${FooterSpacer}` }}>

        </div>


        <div className="subheader5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', border: '2px solid #101730ff', width: `${FooterSize}`, paddingTop: '100px', paddingBottom: '100px', borderRadius: '30px' }}>
          <h3 style={{
            color: 'white',
            fontWeight: 'bold',

          }}> Please consider collaborating
            <br /> or donating!
            <br></br>🔥

          </h3>
        </div>

      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '10px', }}>

        <div className="end-div5" style={{ margin: '20px', borderRadius: '30px', width: '100%', paddingTop: '50px', paddingBottom: '50px' }}>
          <a

            href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/"
          >
            <h2 style={{
              color: '#AEBEBEff',
              fontWeight: 'bold'
            }}>
              Having trouble viewing my website ? 💔
            </h2>
            <h5
              style={{
                color: 'white',
                fontSize: `${FontSizeMedium}`,
              }}
            >
              Send me erros <br /> to help fix mobile issues.
            </h5>

          </a>


          <div className="subheader6" style={{ border: '2px solid white', borderRadius: '10px', margin: '5px' }}>
            <h3
              style={{
                color: '#AEBEBEff',

                fontWeight: 'bold',

              }}>
              Major Update! : Most mobile / scaling issues should be fixed
              <br />
              <br />
              <a href="https://www.buymeacoffee.com/giomoscato101">
                <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=243232ff&font_colour=ffffff&font_family=Poppins&outline_colour=243232ff&coffee_colour=243232ff" />
              </a>
            </h3>
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', width: '100%' }}>

        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="360"

          autoplay="true"
          src="https://www.youtube.com/embed/ZwWTUljUZLU?autoplay=1"
          frameborder="0"
        >
        </iframe>

      </div>


    </div >
  );
}
export default HeaderProjects;