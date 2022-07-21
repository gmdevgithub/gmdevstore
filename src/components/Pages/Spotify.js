//Basic imports
import React, { Component, useState, useEffect } from 'react';
//Custom IMPORTS: 
import '../PageCss/HeaderSection.css'

const Spotify = () => {

  const [baseUrl, setBaseUrl] = useState("https://accounts.spotify.com/api/token");
  const [spotifyArtists, setSpotifyArtists] = useState("https://api.spotify.com/v1/artists/7bSpQNOg9UsW530DuXM3X5");
  const [token, setToken] = useState([]);
  const [spotifyResonse, setspotifyResonse] = useState([]);
  const [currentStatus, setStatus] = useState(false);
  const [currentStatus2, setStatus2] = useState(false);
  const [gioDataToggle, setGioDataToggle] = useState(true);

  const client_id = 'a2e2c898d4cc403cbd5804821c0268cc';
  const client_secret = '8c41dce7a0ca4b9a89aa78f570f0e74c';

  /**
   *  React class lifecycle methods 
   *  useEffect Hook:  
   *    componentDidMount, 
   *    componentDidUpdate, and 
   *    componentWillUnmount combined.
   * 
   *  By using this Hook, you tell React that your component needs to do something after render.
   *  
   *  By default, it runs both after the first render and after every update.
   * 
   *  Just like you can use the State Hook more than once, you can also use several effects. 
   *  This lets us separate unrelated logic into different effects.
   * 
   *  You can tell React to skip applying an effect if certain values haven’t changed between re-renders. 
   *  To do so, pass an array as an optional second argument to useEffect.
   *  React will re-run the effect even if just one of them is different.
   * 
   *  If you use this optimization, make sure the array includes all values from the component scope 
   *  (such as props and state) that CHANGE OVER TIME and that are used by the effect.
   * 
   *  Otherwise, your code will reference STALE values from previous renders!
   */
  useEffect(() => {
    // Step 1 : use the Fetch API  that provides an interface for fetching resources \
    // This is a http "request" and "response" object set. 
    // You start with a "fetch" method
    // Requires a path to fetch, and will return a promise, resolving to a response object
    // You can also pass optional HEADERS and other parameters such as credientials in the 
    // form of objects.

    // Specifically this request was to Spotify API as a POST request with credientials
    // to ask for a token to verify our application GET requests
    fetch(baseUrl,
      {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      // Step 2: After this call is made the browser will request to the server
      // The server will return a response object to this application
      // This object has important data available via methods such as Response.ok which 
      // return various data types

      // Specifically this response should be a token 
      .then((response) => {

        if (!response.ok) {
          return Promise.reject(new Error("Spotify Token Request Error"));
        }
        else {
          // Here we return a promise that is supposed to parse the response body text to JSON
          return response.json();
        }
      })
      .catch((err) => {
        console.log("First Fetch " + err);
      })
      // If our text was parsed correctly we can resolve and begin a new promise
      .then((json) => {
        try {
          // Step 3: here we have obtained our data from the server and prepared it
          // for use in our application.

          // Specifically we store this token from the response and change the UI accordingly
          // We then return another promise of an additional fetch request known as 
          // chaining requests.
          console.log("Current token after first fetch: " + json.access_token);
          console.log(": " + json.token_type);
          console.log(": " + json.expires_in);
          setToken(json.access_token);
          setStatus(true);
          console.log("Fetch 2 Requesting data with token: " + json.access_token);
          return fetch(spotifyArtists, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${json.access_token}`,
              'Content-Type': 'application/json'
            }
          })
        }
        catch
        {
          return Promise.reject(new Error(`State Error!: Data: ${token} , Connection:${currentStatus}`));
        }
      })
      .then((response) => {

        if (!response.ok) {
          return Promise.reject(new Error("Spotify Data Request with token Error" + response.status));
        }
        else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log("Second Fetch" + err);
      })
      .then((json) => {
        try {
          console.log("After data request: " + json)
          console.log("Token after request" + token);
          setspotifyResonse(json);
          setStatus2(true);
        }
        catch
        {
          return Promise.reject(new Error(`State Error2 !: Data: ${spotifyResonse} , Connection2:${currentStatus2}`));
        }
      })
      .catch((err) => {
        console.log("After 2nd Fetch Error" + err);
      })

    // Step 4: at this stage all requests have been made and we recieve Responses
    // All promises have been resolved and data is either stored or used.
    // The use effect hook will look for changes to these data points in order to
    // update the data

    // Specifically the token was obtained and used to make GET requests through my app to 
    // the Spotify API to retrieve data about artists. 


  }, [baseUrl, spotifyArtists]);

  // Step 5: The fetch API is done being utilized and we can reflect
  // the response data in our UI dynamically. 

  const showData = () => {
    setGioDataToggle(!gioDataToggle);
  }
  const changeArtists = (e) => {
    e.preventDefault();
    if (document.getElementById('D').checked) {
      setSpotifyArtists(document.getElementById("D").value);
    }
    else if (document.getElementById('G').checked) {
      setSpotifyArtists(document.getElementById("G").value);
    }
    else if (document.getElementById('C').checked) {
      setSpotifyArtists(document.getElementById("C").value);
    }
    else if (document.getElementById('A').checked) {
      setSpotifyArtists(document.getElementById("A").value);
    }
    else if (document.getElementById('B').checked) {
      setSpotifyArtists(document.getElementById("B").value);
    }
    else if (document.getElementById('M').checked) {
      setSpotifyArtists(document.getElementById("M").value);
    }
    else {
      alert("No artist selected ")
    }
  }

  return (

    <div >
      <div className="gio-container-1" style={{ padding: '20px' }}>

        <h1 style={{ color: '#AEBEBEff', fontWeight: '900', border: '2px solid #AEBEBEff', margin: '10px' }}> Spotify API</h1>
        <ul style={{ color: '#AEBEBEff' }}>
          <li>I first registered my website and used the client_secret
            credientials OAuth method to verify it for token recieving</li>
          <label></label>
          <li>I then use a fetch request to ask Spotify API for a
            auth token
          </li>
          <label></label>
          <li> Once I have the token I used it to make another series
            of get requests with it
          </li>
          <label></label>
          <li> Then I simply display this data by going through
            its nested data
          </li>
        </ul>

        <div style={{ border: '1px solid #AEBEBEff', borderRadius: '5px', margin: '10px', backgroundColor: '#1B2524ff' }}>
          <h1 style={{ color: '#AEBEBEff', fontWeight: '900', backgroundColor: '#1B2524ff' }}> Live real data</h1>
          {!currentStatus2 ? <h2>Loading... </h2> : <><ul style={{ color: '#AEBEBEff', padding: '4px' }}>
            <li style={{ margin: '4px' }}> Artists name: {spotifyResonse.name}</li>
            <li style={{ margin: '4px' }}> Account type: {spotifyResonse.type}</li>
            <li style={{ margin: '4px' }}> Current Total Followers: {spotifyResonse.followers.total}</li>
            <li style={{ margin: '4px' }}> Genres: {spotifyResonse.genres[0]} ,{spotifyResonse.genres[1]} ,{spotifyResonse.genres[2]}</li>
          </ul>
          <img style={{marginBottom: '5px'}} src={spotifyResonse.images[0].url} height='auto' width='95%' />
          </>
          }
        </div>

        <form onSubmit={changeArtists} >
          <ul style={{margin: '0px', alignItems: 'left'   }}>

            <li>
              <input type="radio" id="D" name="fav_language" value="https://api.spotify.com/v1/artists/5cj0lLjcoR7YOSnhnX0Po5" />
              <label style={{ color: '#AEBEBEff' }} for="html" >Doja Cat</label>
            </li>

            <li>
              <input type="radio" id="G" name="fav_language" value="https://api.spotify.com/v1/artists/6PfSUFtkMVoDkx4MQkzOi3" />
              <label style={{ color: '#AEBEBEff' }} for="css" >100 Gecs</label>
            </li>

            <li>
              <input type="radio" id="C" name="fav_language" value="https://api.spotify.com/v1/artists/56dO9zeHKuU5Gvfc2kxHNw" />
              <label style={{ color: '#AEBEBEff' }} for="javascript" >Chevelle</label>
            </li>

            <li>
              <input type="radio" id="A" name="fav_language" value="https://api.spotify.com/v1/artists/3hOdow4ZPmrby7Q1wfPLEy" />
              <label style={{ color: '#AEBEBEff' }} for="javascript" >Aries</label>
            </li>

            <li>
              <input type="radio" id="B" name="fav_language" value="https://api.spotify.com/v1/artists/3Ri4H12KFyu98LMjSoij5V" />
              <label style={{ color: '#AEBEBEff' }} for="javascript" >Bad Omens</label>
            </li>

            <li>
              <input type="radio" id="M" name="fav_language" value="https://api.spotify.com/v1/artists/7bSpQNOg9UsW530DuXM3X5" />
              <label style={{ color: '#AEBEBEff' }} for="javascript" >Memes 2</label>
            </li>

          </ul>


          <input
            style={{
              color: '#AEBEBEff',
              borderRadius: '10px',
              margin: '10px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              border: ' 1px solid white'
            }} type="submit" value="Change artist">
          </input>
        </form>

        <form style={{ margin: '30px' }}>
          <label style={{ color: '#AEBEBEff' }}>Show my spotify data</label>
          <input style={{ backgroundColor: "red" }} onClick={showData} type="checkbox" name="gioBox"></input>
        </form>

        {gioDataToggle ? <></> :
          <div style={{ backgroundColor: '#101730ff', border: '1px solid #AEBEBEff', margin: '5px' }}>
            <h2 style={{ color: '#AEBEBEff', fontWeight: '900', margin: '2px' }}> MY TOP SONG</h2>
            <iframe style={{ border: '1px solid #AEBEBEff', marginBottom: '10px' }}
              src="https://open.spotify.com/embed/track/5oWulmQXArBhQOTYGhlwN3?utm_source=generator"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; 
                 clipboard-write; 
                 encrypted-media; 
                 fullscreen; 
                 picture-in-picture">

            </iframe>
          </div>
        }

        {gioDataToggle ? <></> :
          <div style={{ margin: '20px' }}>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/album/5xtr1Tn1O99aB6K8HuTfGh?utm_source=generator"
              width="100%"
              height="90"

              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; 
                 clipboard-write; 
                 encrypted-media; 
                 fullscreen; 
                 picture-in-picture">

            </iframe>
          </div>
        }

        {gioDataToggle ? <></> :
          <div className="gio-container" style={{ margin: '10px', backgroundColor: '#101730ff', }}>
            <h2 style={{ color: '#AEBEBEff', fontWeight: '900', margin: '2px' }}> MORE TRACKS</h2>

            <iframe
              style={{ borderRadius: '12px', padding: '5px' }}
              src="https://open.spotify.com/embed/artist/7bSpQNOg9UsW530DuXM3X5?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; 
                clipboard-write; 
                encrypted-media; 
                fullscreen; 
                picture-in-picture"
            />
          </div>
        }

      </div>
    </div>
  )
};
export default Spotify;