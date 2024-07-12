import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import querystring from 'querystring';

const app = express();
const port = 3000;

const clientId = 'fe28bee06a6d49d4ad02c475f3c42dd7';
const clientSecret = 'c02953e7ad094d2ebf0d825261cb7603';
const redirectUri = 'http://localhost:5173/';

app.use(bodyParser.json());
app.use(cors());

app.post('/callback', async (req, res) => {
  const code = req.body.code || null;

  if (!code) {
    return res.status(400).send('Authorization code not found');
  }

  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = querystring.stringify({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
  });

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
  };

  try {
    const response = await axios.post(tokenUrl, data, { headers: headers });
    res.json({ access_token: response.data.access_token });
  } catch (error) {
    console.error('Error getting token:', error.response ? error.response.data : error.message);
    res.status(400).send(error.response ? error.response.data : 'Error getting token');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});