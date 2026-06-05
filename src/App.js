import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Feed } from "./Compononts/Feed";
import { ChannelDetails } from "./Compononts/ChannelDetails";
import { SearchFeed } from "./SearchFeed";
import { VideoDetails } from "./VideoDetails";
import { NavBar } from "./Compononts/NavBar";
import { PlaylistVideos } from "./Compononts/PlaylistVideos";
// import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000", overflowX: "hidden", height: "100vh" }}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/play/:id" element={<PlaylistVideos></PlaylistVideos>} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
