# Tuber (YouTube Video Player)

Tuber is a React app that lets you browse YouTube content by categories, watch videos, explore channels, and view playlists.

It uses **Netlify Functions** as a lightweight backend/proxy to call the **YouTube Data API v3**.

> Note: The Netlify functions in this repo currently include a YouTube API key directly in code.

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

## YouTube API Notes

The functions call endpoints such as:

- Search: `https://www.googleapis.com/youtube/v3/search`
- Channels: `https://www.googleapis.com/youtube/v3/channels`
- Videos: `https://www.googleapis.com/youtube/v3/videos`
- Playlists: `https://www.googleapis.com/youtube/v3/playlists`
- Playlist items: `https://www.googleapis.com/youtube/v3/playlistItems`

### Store the YouTube API key securely (recommended)

This repo currently uses a YouTube API key inside the Netlify function code. A safer approach is to store the key in an environment variable and have the functions read it.

**Netlify (recommended):**

1. Open your site on Netlify
2. Go to **Site settings → Environment variables**
3. Add:
   - `REACT_APP_YOUTUBE_API_KEY` = `<your-youtube-api-key>`

Then update the code in `netlify/functions/*.js` to use:

```js
key: process.env.REACT_APP_YOUTUBE_API_KEY;
```

> If you keep the current hardcoded key, everything will still work, but exposing API keys in source code is not recommended.

---
