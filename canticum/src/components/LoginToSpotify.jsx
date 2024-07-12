// SpotifyLoginButton.js

import React from 'react';
import { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import queryString from 'query-string';
import { getUserProfile } from './SpotifyAPI';

const spotifyApi = new SpotifyWebApi();

const clientID = 'fe28bee06a6d49d4ad02c475f3c42dd7'; // Replace with your actual client ID
const redirectUri = 'http://localhost:5173/callback'; // Replace with your redirect URI

const SpotifyLoginButton = () => {

  const handleLogin = () => {
    const scope = 'user-read-private user-read-email user-top-read'; // Add necessary scopes here

    const authUrl = `https://accounts.spotify.com/authorize?${queryString.stringify({
      client_id: clientID,
      response_type: 'token',
      redirect_uri: redirectUri,
      scope: scope,
    })}`;

    window.location.href = authUrl;
  };

  const accessToken = localStorage.getItem('spotifyAccessToken');
  const [userName, setUserName] = useState(null);

  if (accessToken) {
    getUserProfile(accessToken)
      .then(({ userName, profileImage }) => {
        setUserName(userName);
      })
      .catch(error => console.error('Error fetching user profile:', error));
  }
  return (
    <button className="btn btn-outline btn-info" onClick={handleLogin}>
      {userName ? `Signed in as ${userName}` : "Log in with Spotify" }
    </button>
  );
};

export default SpotifyLoginButton;
