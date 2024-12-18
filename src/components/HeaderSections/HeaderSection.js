import React, { useState, useEffect, useParams } from 'react';
import '../../App.css';
import { Button } from '../Buttons/Button.js';
import '../Buttons/Button.css';
import '../PageCss/HeaderSection.css';
import SpotifyAPI from '../Pages/Spotify';
import '../../icons/gio.jpg';
import gtrating from '../../icons/gtrating.png';
import gtadd from '../../icons/gtadditional.png';
import safteycheck from '../../icons/safteycheck.png';
import GioBanner from '../../icons/Giobanner.png';
import GioLogo from '../../icons/GioLogo123.PNG';
import gmdevstorelogo from '../../icons/gmdevstorelogo.jpg';
import gmdevwebsitelogo from '../../icons/gmdevwebsitelogo.jpg';
import gmdevapilogo from '../../icons/gmdevapilogo.jpg';
import haloweenlogo from '../../icons/Haloween.png';
import CashappQR from '../../icons/cashappqr.png'
import FSDlogo from '../../icons/FSDlogo.png';
import Info from '../../icons/info1.png';
import bg1 from '../../icons/bg1.png';
import bg5 from '../../icons/bg5.png';
import '../PageCss/Crudtable.css';
import '../PageCss/GioTable.css';
import '../PageCss/NewTable.css';
import DevIcon from '../../icons/devicon1.png';
import DevIcon2 from '../../icons/devicon2.png';
import DevIcon3 from '../../icons/devicon3.png';
import DevIcon4 from '../../icons/devicon4.png';
import DevIconHat from '../../icons/deviconhat.png';

function HeaderSection() {

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

  const [baseUrl, setBaseUrl] = useState("https://swapi.dev/api/starships");
  const [data, setData] = useState([]);
  const [currentStatus, setStatus] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {

    //Initialize 
    const mq = window.matchMedia("(max-width: 600px)");
    setWindowSize(mq.matches);

    //Update
    function updateSize(e) {
      setWindowSize(e.matches);
      console.log(mq.matches);
    }

    mq.addEventListener('change', updateSize)
 
    return function clean() {
      mq.removeEventListener('change', updateSize);
    }
  }, [])

  let specialheader;
  let specialheader2;
  let logoSection;
  let logoSection2;
  let gmdevstorevar;
  let gmdevapivar;
  let gmdevwebsitelogovar;
  let haloweenlogovar;
  let qrwidth;
  let youtubesub;
  let urlToggle = false;
  let infoWidth;
  let cardOrientation;
  let cardWidth;
  let cardPadding;
  let linkTreeWidth;
  let cardWidthSupport;
  let homepageSVGWidth;
  let cardMargin;
  let fontMobile;
  let artSectionWidth;
  let ProjectCardWidth;
  let HeaderCardWidth;
  let FontSizeLarge;
  let FontSizeMedium;
  let StatsCard;
  let StatsCardHeader;

  if (windowSize) {
    specialheader = <></>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="auto" width='99%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    logoSection = <></>;
    logoSection2 = <></>;
    gmdevstorevar = <></>;
    gmdevapivar = <></>;
    gmdevwebsitelogovar = <></>;
    haloweenlogovar = <></>;
    youtubesub = <></>;
    let infoWidth = '100%'
    qrwidth = '100%'
    cardOrientation = 'column';
    cardWidth = '100%';
    cardWidthSupport = '100%';
    cardPadding = '0px';
    linkTreeWidth = '100%';
    homepageSVGWidth = '100%';
    cardMargin = '10px';
    fontMobile = 'medium';
    artSectionWidth = '100%';
    ProjectCardWidth = '100%';
    HeaderCardWidth = '100%';
    FontSizeLarge = '60px';
    FontSizeMedium = 'medium';
    StatsCard = '100%';
    StatsCardHeader = '100%';
  }
  else {
    specialheader = <h2 style={{ color: 'white' }}>Feel free to join my discord</h2>;
    specialheader2 = <iframe src="https://fullstackingdevelopment.com/" padding="auto" width='100%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />;
    youtubesub = <h2 style={{ color: 'white' }}>SUB TO MY YOUTUBE?</h2>;
    logoSection = <img src={GioLogo} width='20%' height='auto' style={{ padding: '5px' }} />;
    logoSection2 = <img src={FSDlogo} width='50%' height='auto' style={{ padding: '5px' }} />;
    let infoWidth = '80%'
    qrwidth = '30%'
    cardOrientation = 'row';

    cardWidth = '48%';
    cardPadding = '50px';
    linkTreeWidth = '33%';
    cardWidthSupport = '60%';
    homepageSVGWidth = '60%';
    cardMargin = '20px';
    fontMobile = 'x-large';
    artSectionWidth = '80%';
    FontSizeLarge = '100px';
    FontSizeMedium = 'x-large';
    StatsCard = '33%';
    StatsCardHeader = '50%';

    gmdevstorevar = <img src={gmdevstorelogo} width='50%' height='auto' style={{ padding: '5px' }} />
    gmdevwebsitelogovar = <img src={gmdevwebsitelogo} width='50%' height='auto' style={{ padding: '5px' }} />
    haloweenlogovar = <img src={haloweenlogo} width='50%' height='auto' style={{ padding: '5px' }} />;
    gmdevapivar = <img src={gmdevapilogo} width='50%' height='auto' style={{ padding: '5px' }} />

    ProjectCardWidth = '80%';
    HeaderCardWidth = '95%';
  }

  return (
    <div>

      <div style={{
        backgroundColor: '#242a36',
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
            paddingTop: '0px',
            paddingBottom: '0px',
            fontSize:'large'
          }}
          onClick={mainBodyHandle}>
          CLOSE
        </button>
      </div>

      <div id="mainBody" className='gio-main'>

        {/*   <img src={Info} height='auto' style={{ padding: '0px', marginBottom: '0px', border: '2px solid #19819Fff', borderRadius: '30px', width: `${homepageSVGWidth}`, marginTop: '5px' }} /> */}

       

        <div className="end-div5" style={{ background: 'transparent', padding: `${cardPadding}`, marginLeft: `${cardMargin}`, marginRight: `${cardMargin}`, marginBottom: '50px', marginTop: '5px', width: `${infoWidth}`, flexDirection: `${cardOrientation}`, textAlign: 'center', alignItems: 'center' }}>

          <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '10px', marginBottom: '0px', marginTop: '0px', width: `${cardWidth}`, flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <p style={{ color: '#AEBEBEff', margin: '20px', fontSize: `${fontMobile}` }}>
              This is a personal portfolio react web app showcase my web development <br />skills and other computer science related <br />
              <button style={{ border: '1px solid white', borderRadius: '25px', backgroundColor: '#242a36' }}>
                <a style={{ color: '#AEBEBEff', fontWeight: '700' }} href='/#/projects'> <em>projects</em>
                </a>
              </button>

            </p>

            {gmdevwebsitelogovar}

            <p style={{ color: '#AEBEBEff', margin: '20px', fontSize: `${fontMobile}` }}>
              Check out my api built with CloudFlare workers! <br />
              <button style={{ border: '1px solid white', borderRadius: '25px', backgroundColor: '#242a36' }}>
                <a style={{ color: '#AEBEBEff', fontWeight: '700' }} href='https://gmdevapi.com/'> <em> gmdevapi.com </em></a>
              </button>
            </p>

            {gmdevapivar}
          </div>

          <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '0px', marginBottom: '35px', marginRight: '0px', width: '3%', flexDirection: 'column', textAlign: 'center', alignItems: 'center', background: 'black' }}>
          </div>

          <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '0px', marginBottom: '0px', marginRight: '0px', width: `${cardWidth}`, flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <p style={{ color: '#AEBEBEff', margin: '20px', fontSize: `${fontMobile}` }}>
              Hire me! <br />
              <button style={{ border: '1px solid white', borderRadius: '25px', backgroundColor: '#242a36' }}>
                <a style={{ color: '#AEBEBEff', fontWeight: '700' }} href='https://gmdevstore.com/'> <em> gmdevstore.com </em></a>
              </button>
            </p>

            {gmdevstorevar}

            <p style={{ color: '#AEBEBEff', margin: '20px', fontSize: `${fontMobile}` }}>
              Check out our <br />team site <br />
              <button style={{ border: '1px solid white', borderRadius: '25px', backgroundColor: '#242a36', width: '60%' }}>
                <a style={{ color: '#AEBEBEff', fontWeight: '700' }} href='https://fullstackingdevelopment.com/'> <em> fullstackingdevelopment.com </em></a>
              </button>
            </p>

            {logoSection2}

          </div>
        </div>

        <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', marginLeft: `${cardMargin}`, marginRight: `${cardMargin}`, padding: '0px', marginBottom: '50px', marginTop: '50px', width: `${infoWidth}`, flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
          <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '2px', marginBottom: '50px', marginRight: '0px', width: `${cardWidthSupport}`, flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: 'black', border: '1px solid white' }}>
            <h2 style={{ color: 'white', fontSize: `${fontMobile}` }}>
              Need a webapp built for your brand or portfolio ? <br />
              <a style={{ color: '#AEBEBEff', fontWeight: '700' }} href='https://gmdevstore.com/'> <em> gmdevstore.com </em></a>
            </h2>

            <img src={gmdevstorelogo} height='auto' style={{ padding: '5px', width: `${qrwidth}` }} />

          </div>

          <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '0px', marginBottom: '0px', marginRight: '0px', width: '6%', flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          </div>


          <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '2px', marginBottom: '50px', marginRight: '0px', width: `${cardWidthSupport}`, flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: 'black', border: '1px solid white' }}>

            <h2 style={{ color: 'white', fontSize: `${fontMobile}` }}>
              Support me if you can  <br />
              <a style={{ color: '#AEBEBEff', fontWeight: '700' }} href='https://cash.app/$gmdevstore'> <em> Cashapp @$gmdevstore</em></a>
            </h2>

            <img src={CashappQR} height='auto' style={{ padding: '0px', width: `${qrwidth}` }} />
          </div>

          <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '10px', marginBottom: '20px', marginRight: '0px', width: `${linkTreeWidth}`, flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: 'black', border: '1px solid white' }}>

            <h2 style={{ color: 'white' }}>
              LINK TREE  <br />
              <a style={{ color: '#AEBEBEff', fontWeight: '700' }} href='https://linktr.ee/_GMDev'> <em> linktr.ee/_GMDev</em></a>
            </h2>

          </div>

        </div>

        <div className='gio-container' style={{ background: 'black', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', border: 'none', padding: '3px', width: `${ProjectCardWidth}`, marginTop: '10px', marginBottom: '10px' }}>
          <ul style={{ background: 'black', width: '95%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="end-div2" style={{ border: '10px solid black', borderRadius: '5px', background: 'white', marginBottom: '20px', width: `${StatsCardHeader}`, boxShadow: 'rgba(25, 129, 159, 0.9) 6px 2px 10px 0px, rgba(25, 129, 159, 0.9) -6px -2px 10px 0px ' }} >
              <h3 style={{ color: 'black', fontWeight: '900', fontSize: `${FontSizeMedium}` }}>
                
                Web app information
              </h3>
            </div>

            <div style={{ alignItems: 'center', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}> 

            <div style={{ width: `${StatsCard}` }}>

              <div style={{ textAlign: 'center', alignItems: 'center', background: 'white', display: 'flex', flexDirection: 'column', border: '2px solid #19819Fff', margin: '0px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '20px', paddingLeft: '25px', paddingRight: '25px'}}>
                <h3 style={{ color: 'black', fontWeight: 'bold' }}>All components , files, animations, styling, and code was written by me from scratch using the </h3>
                <li style={{ textAlign: 'center', fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'lightblue', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '20px' }}>React Framework</li>

              </div>
              </div>

              <label></label>

              <div style={{ background: 'white', display: 'flex', flexDirection: 'row', border: '2px solid #19819Fff', margin: '10px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '50px', }}>
                <li style={{ fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'white', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '50px' }}>All art work , code, and backend was also made from scratch ! Except for 3D models and company logos</li>

              </div>
             

              <label></label>

              <div style={{ background: 'white', display: 'flex', flexDirection: 'row', border: '2px solid #19819Fff', margin: '10px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '20px', }}>
                <li style={{ fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'white', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '20px' }}>This web app connects to over 6 API's managed by my personal gmdevapi ! </li>
                <li style={{ fontSize: `${FontSizeMedium}`, margin: '0px', color: 'black', padding: '10px', borderRadius: '50px' }}> Check projects tab to learn more.</li>
              </div>

              <label></label>

              <div style={{ background: 'white', display: 'flex', flexDirection: 'row', border: '2px solid #19819Fff', margin: '10px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '50px', }}>
                <li style={{ fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'white', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '50px' }}>It took me 3 years to finish this website. I started from scratch and barely knew CSS / HTML ! </li>

              </div>
            </div>
            

          </ul>
        </div>

        <div className='gio-container' style={{ background: 'black', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', border: 'none', padding: '3px', width: `${ProjectCardWidth}`, marginTop: '10px', marginBottom: '10px'}}>
          <ul style={{ background: 'black', width: '95%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="end-div2" style={{ border: '10px solid black', borderRadius: '5px', background: 'white', marginBottom: '20px', width: `${StatsCardHeader}`, boxShadow: 'rgba(25, 129, 159, 0.9) 6px 2px 10px 0px, rgba(25, 129, 159, 0.9) -6px -2px 10px 0px ' }} >
              <h3 style={{ color: 'black', fontWeight: '900', fontSize: `${FontSizeMedium}` }}>
                < div style={{ animation: 'wiggle 20s ease-in-out infinite' }}>
                📊
                </div>
                Quick Stats
              </h3>
            </div>

            <div style={{ width: `${StatsCard}`,  }}>

              <div style={{ textAlign: 'center', alignItems: 'center', background: 'white', display: 'flex', flexDirection: 'column', border: '2px solid #19819Fff', margin: '10px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '20px', }}>
                <li style={{ textAlign: 'center', fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'white', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '20px' }}><img src={DevIconHat} width='30px' height='30px' style={{ marginRight: '25px', }}></img>B.S In CS from NIU</li>

              </div>

              <label></label>

              <div style={{ background: 'white', display: 'flex', flexDirection: 'row', border: '2px solid #19819Fff', margin: '10px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '20px', }}>
                <li style={{ fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'white', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '50px' }}><img src={DevIcon} width='30px' height='30px' style={{ marginRight: '10px', }}></img>Dev Level</li>
                <li style={{ fontSize: `${FontSizeMedium}`, margin: '0px', color: 'black', padding: '10px', borderRadius: '50px' }}> Juinor</li>
              </div>

              <label></label>

              <div style={{ background: 'white', display: 'flex', flexDirection: 'row', border: '2px solid #19819Fff', margin: '10px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '20px', }}>
                <li style={{ fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'white', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '20px' }}><img src={DevIcon2} width='30px' height='30px' style={{ marginRight: '0px', }}></img>Specialization</li>
                <li style={{ fontSize: `${FontSizeMedium}`, margin: '0px', color: 'black', padding: '10px', borderRadius: '50px' }}> Software Developer</li>
              </div>

              <label></label>

              <div style={{ background: 'white', display: 'flex', flexDirection: 'row', border: '2px solid #19819Fff', margin: '10px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '20px', }}>
                <li style={{ fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'white', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '50px' }}><img src={DevIcon3} width='30px' height='30px' style={{ marginRight: '10px', background: 'none' }}></img>Active Projects</li>
                <li style={{ fontSize: `${FontSizeMedium}`, margin: '0px', color: 'black', padding: '10px', borderRadius: '50px' }}> 3</li>
              </div>

              <label></label>

              <div style={{ background: 'white', display: 'flex', flexDirection: 'row', border: '2px solid #19819Fff', margin: '10px', color: 'black', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(25, 129, 159, 0.8) -6px -2px 16px 0px', borderRadius: '20px', }}>
                <li style={{ fontSize: `${FontSizeMedium}`, border: '1px solid black', margin: '3px', color: 'white', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '50px' }}><img src={DevIcon4} width='30px' height='30px' style={{ marginRight: '10px', }}></img>Years Experience</li>
                <li style={{ fontSize: `${FontSizeMedium}`, margin: '0px', color: 'black', padding: '10px', borderRadius: '50px' }}> 5</li>
              </div>

            </div>

          </ul>
        </div>


        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 5px 20px 5px', backgroundColor: 'black', padding: '5px', }}>
          <div className='subheader9' style={{ marginTop: '30px' }} >
            <h1 style={{ color: '#AEBEBEff', fontWeight: '900', background: 'rgba(0, 0, 0, .8)', fontSize: 'x-large' }}>🥳 Project Spotlight </h1>

            <a style={{ color: 'white', fontSize: 'x-large' }} href='https://giphy.com/ericaofanderson'>Gifs by : Erica Anderson</a>

            <button style={{ border: '1px solid white', borderRadius: '25px', fontSize: 'x-large' }}>
              <a style={{ color: 'white', fontWeight: '700', marginTop: '20px', marginBottom: '10px' }} href='/#/Spotify'>Spotify API intergration</a>
            </button>

          </div>

          <div className='gio-container-2' style={{ marginTop: '10px', padding: 'none', }}>
            <SpotifyAPI />
          </div>

        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '10px' }}>
          <div style={{ alignSelf: 'center', width: '100%', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.5) -2px 10px 5px', padding: '10px', paddingTop: '30px', paddingBottom: '20px' }}>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--med'
            ></Button>
          </div>
        </div>

        {/* <div className="gio-container">
          {youtubesub}
          <div class="g-ytsubscribe" data-channelid="UCKzykl0XjPKWtr4U3cszSAw" data-layout="full" data-theme="dark" data-count="default"></div>
        </div> */}

        <div
          className='gio-container'
          style={{
            background: 'transparent',
            flexDirection: 'column',
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            border: 'none',
            paddingTop: '0px',
          }}
        >
          <div
            className='gio-container-2'
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.5) 5px 15px 5px',
              width: '100%',
              background: 'linear-gradient(12deg, #101730ff, #1b2524ff, #243232ff, #2e5252ff, #242a36, #025b79ff, #19819fff)',
              backgroundSize: '400% 400%',
              animation: 'bgchange 30s ease-in-out infinite'
            }}
          >

            {specialheader}
            <iframe src="https://discord.com/widget?id=944377004193611817&theme=dark" padding="auto" width='100%' height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
          </div>

          <div className='spacer'>
          </div>

          <div className='spacer'>
          </div>
        </div>


        <div className='gio-container' style={{ background: 'transparent', flexDirection: 'column', padding: '0px', width: '100%', alignSelf: 'center', alignItems: 'center', border: 'none' }}>
          <div className='gio-container-2' style={{ boxShadow: 'rgba(0, 0, 0, 0.5) -2px 10px 5px', flexDirection: 'column', padding: '0px', width: `${cardWidthSupport}`, alignSelf: 'center', alignItems: 'center', }}>

            <h4 style={{ borderRadius: '50px', alignItems: 'center', textAlign: 'center', fontSize: 'xx-large' }}> Quick summary of skillset</h4>
            <ul style={{ backgroundColor: 'black', alignItems: 'center', fontSize: 'x-large' }}>
              <br />
              <li> Work experience in Full-Stack development / Web Design & React Framework</li>
              <br></br>
              <li>Some experience markup, programming, and scripting languages</li>
              <br></br>
              <li>Some experience with database management , algorithm analysis, data structures, and memory management</li>
              <br />
            </ul>

          </div>
        </div>

        <div className='spacer'>
        </div>

        <div className='gio-container-4' style={{ border: '1px solid white', padding: '0px' }}>
          <div className='gio-container-2' style={{ border: '1px solid white', padding: '0px', margin: '0px' }}>

            <h4 style={{ fontSize: `${fontMobile}` }}> Site rating and statistics </h4>

            <p style={{ fontSize: `${fontMobile}` }}>
              <a
                style={{
                  color: 'white',
                  padding: '0px',
                  fontSize: 'medium'

                }}
                href="https://gtmetrix.com/reports/giomoscato.com/iJWuFtqv/"
              >
                Rating
              </a>
              from:
              <a
                style={{
                  color: 'white',
                  padding: '0px',
                  fontSize: 'medium'
                }}
                href='https://gtmetrix.com/'>
                GTmetrix
              </a>
            </p>
          </div>

          <h2 style={{
            color: 'white',
            padding: '0px',
            fontSize: 'medium'
          }}>
            As of previous build my website recieved a rating of
            <em> B</em>
          </h2>

          <img src={gtrating} width='35%' height='auto' style={{ margin: '10px' }} />

          <div className='gio-container-2' style={{ border: '1px solid white', padding: '5px', margin: '0px', fontSize: 'x-large' }}>
            <p style={{ fontSize: `${fontMobile}` }}>
              Some additional metrics of the site such as site structure:
            </p>

            <img src={gtadd} width='100%' height='auto' />
          </div>
          <br />

          <div className='gio-container-2' style={{ border: '1px solid white', padding: '5px', margin: '5px', fontSize: 'x-large' }}>
            <p style={{ fontSize: `${fontMobile}` }}>
              <a
                style={{
                  color: 'white',
                  padding: '5px'
                }}
                href="https://gtmetrix.com/reports/giomoscato.com/iJWuFtqv/">
                Security Rating
              </a> from:
              <a
                style={{
                  color: 'white',
                  padding: '5px'
                }}
                href='https://www.ssltrust.com/'
              >
                SSL Trust
              </a>
            </p>



            <h2 style={{
              color: 'white',
              padding: '5px'
            }}>
              Recieved a rating of PASS with 93 tests completed and 0 reports of malware <em> or </em> spam
            </h2>

            <img src={safteycheck} width='100%' height='auto' />

            <br />
          </div>
        </div>

        <div className='spacer'>
        </div>

        <div className='gio-container' style={{ background: 'transparent', flexDirection: 'column', padding: '0px', width: '100%', alignSelf: 'center', alignItems: 'center', border: 'none' }}>
          <div className='gio-container-2' style={{ padding: '0px', marginBottom: '30px', width: `${artSectionWidth}` }}>
            <h3
              style={{
                color: 'white',
                fontSize: 'large',
                backgroundColor: 'black',
                margin: '10px',
                borderRadius: '20px',
                fontSize: `${fontMobile}`
              }}
            >
              AI genereated art, the theme for this site! I used the theme and colors from these images that are AI generated to design my site
            </h3>

            <iframe
              src='https://app.wombo.art/'
              allowfullscreen="yes"
              width="100%"
              height="600px"
              frameborder="0"


            >
            </iframe>

            <button src=' https://app.wombo.art/' style={{ backgroundColor: 'red', borderRadius: '5px' }}>
              <a style={{ color: 'white' }}>
                app.wombo.art.com
              </a>
            </button>

            <div
              style={{
                margin: "10px"
              }}
              className="end-div2"
            >
              <img
                src={bg1}
                width='100%'
                height='auto'
              />
            </div>

            <div
              style={{
                margin: "10px"
              }}
              className="end-div2"
            >
              <img
                src={bg5}
                width='100%'
                height='auto'
              />
            </div>
          </div>
        </div>


      </div>
      <button
        style={{
          color: '#025B79ff',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textTransform: 'uppercase',
        }}
        onClick={mainBodyHandle}>
        OPEN
      </button>

      <div className='gio-container' style={{ background: 'transparent', flexDirection: `${cardOrientation}`, padding: '2px', width: '100%', alignSelf: 'center', alignItems: 'center', border: 'none' }}>

        <div className="end-div" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', marginTop: '5px', }}>
          <a href="https://github.com/codingcodewhilegoofin/giowebsite">
            <h2 style={{
              color: 'white',
              background: 'rgba(0, 0, 0, 0.2)',
              fontWeight: '900',
              marginBottom: '5px',
              borderRadius: ' 50px'
            }}> My website technology pipeline / stack ? ✨ </h2>

            <ol style={{
              color: 'white',
              background: 'rgba(0, 0, 0, 0.6)',
              borderRadius: ' 25px'
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
              color: 'white',
              fontWeight: '900',
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: ' 50px'
            }}> Please consider collaborating
              <br /> or donating!
              <br></br>🔥

            </h3>
          </a>
        </div>

        <div className="end-div5" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', padding: '0px', width: '4%', flexDirection: 'column', textAlign: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        </div>

        <div className="end-div2" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 2px 20px 5px', marginTop: '15px', marginBottom: '100px', padding: '10px' }}>
          <a

            href="https://browserhow.com/how-to-view-full-desktop-site-on-chrome-android-phone/"
          >
            <h2 style={{
              color: 'white',
              fontWeight: '900',
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: ' 50px'
            }}>
              Having trouble viewing my website ? 💔
            </h2>

            <h3
              style={{
                color: 'white',
                background: 'rgba(0, 0, 0, 0.4)',
                fontWeight: '900',
                borderRadius: ' 50px'
              }}>
              Major Update! : New card format
              <br />
              If you find any mobile or platform specific issues, please let me know
              <br />
              <a href="https://www.buymeacoffee.com/giomoscato101">
                <img className="coffeeBtn" src="https://img.buymeacoffee.com/button-api/?text=Help support me&emoji=💕&slug=giomoscato101&button_colour=243232ff&font_colour=ffffff&font_family=Poppins&outline_colour=243232ff&coffee_colour=243232ff" />
              </a>
            </h3>
          </a>
        </div>
      </div>

      {/* <h3 style={{ color: 'black' }}>Happy Holidays! 🎁</h3> */}

    </div>
  );
}
export default HeaderSection;