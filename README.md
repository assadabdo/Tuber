# Tuber (YouTube Video Player)

Tuber is a React app that lets you browse YouTube content by categories, watch videos, explore channels, and view playlists.

It uses **Netlify Functions** as a lightweight backend/proxy to call the **YouTube Data API v3**.

---

## Live Demo

You can view the deployed app here: https://tubery.netlify.app/

---

## Features

- Home feed (video search)
- Video details page
- Channel details page
- Search by keyword
- Playlists (playlist videos)
- Category sidebar navigation

---

## Tech Stack

- React 18
- React Router v6
- Material UI (MUI)
- Axios
- Netlify Functions (Node.js)

---

## Project Structure (high level)

- `src/` — React UI
  - `src/App.js` — routing
  - `src/SearchFeed.jsx` — search page
  - `src/VideoDetails.jsx` — video details page
  - `src/Compononts/*` — UI components (Feed, Sidebar, Navbar, etc.)
- `netlify/functions/` — serverless functions that call YouTube API
  - `Feed.js`
  - `SearchFeed.js`
  - `ChannelCard.js`, `ChannelVideos.js`
  - `Playlist.js`, `PlaylistVideos.js`
  - `VideoDetails.js`

---

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Start the React dev server

```bash
npm start
```

The app runs at `http://localhost:3000`.

---

## Deployment (Netlify)

1. Build the React app:

```bash
npm run build
```

2. Deploy using Netlify (Netlify will also deploy `netlify/functions/*`).

---

## YouTube API / Environment Variable (IMPORTANT)

All Netlify functions in this repo read the YouTube Data API key from the environment variable:

- `process.env.REACT_APP_YOUTUBE_API_KEY`

### Netlify configuration

1. Open your site on Netlify
2. Go to **Site settings → Environment variables**
3. Add:
   - `REACT_APP_YOUTUBE_API_KEY` = `<your-youtube-api-key>`

> Do not hardcode the API key in source files.

---

## YouTube API Endpoints Used

The functions call endpoints such as:

- Search: `https://www.googleapis.com/youtube/v3/search`
- Channels: `https://www.googleapis.com/youtube/v3/channels`
- Videos: `https://www.googleapis.com/youtube/v3/videos`
- Playlists: `https://www.googleapis.com/youtube/v3/playlists`
- Playlist items: `https://www.googleapis.com/youtube/v3/playlistItems`

---
