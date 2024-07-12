# Canticum

This is a Spotify web application built with React, Vite, Tailwind (with Daisy UI) and Node. It allows users to log in with their Spotify account with the help of the ``spotify-web-api-js`` wrapper. The application can view their top tracks, artists and genres and displays them in a fashionable way. 

![Preview](https://github.com/devliqht/canticum/blob/main/canticum/src/assets/preview1.png)

## Features

- Log in with Spotify
- View top tracks and artists
- Responsive design
- Export top tracks and artists as an image
- Customize time ranges for top tracks and artists (Last Month, Last 6 Months, All Time)
- Toggle between a simple mode and an image mode
- Dynamic background based on the top track/artist

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (if Node)
- A Spotify Developer account
- A spotify web application
- (optional) Spotify Premium :)

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/devliqht/canticum.git
   cd canticum
   cd canticum
2. **Install dependencies**:
	 ```bash 
	npm install
3. **Create a `.env` file in the root of your project**:
	```bash
	VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
	VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
4. **Run the development server**:
	```bash
	npm run dev
5. **Open your browser and navigate to** `http://localhost:5173`.

## Usage

Once the application is running, you can:

1.  **Log in with your Spotify account**: Click the "Log in with Spotify" button.
2.  **View your top tracks and artists**: Use the provided dropdown to switch between top tracks and top artists.
3.  **Customize time ranges**: Select from Last Month, Last 6 Months, or All Time to view different sets of top tracks or artists.
4.  **Toggle modes**: Switch between Simple Mode and Image Mode using the provided toggle.
5.  **Export your top tracks and artists**: Click the "Export Image" button to save the current view as an image.

## Acknowledgements

-   [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [spotify-web-api-js](https://www.npmjs.com/package/spotify-web-api-js)
-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
