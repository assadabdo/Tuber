import axios from "axios";
import { Box, Typography } from "@mui/material";

import { Videos } from "./Videos";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const PlaylistVideos = () => {
  const { id } = useParams();

  const [output, setOutput] = useState([]);
  const fetchPlayVideos = async () => {
    const { data } = await axios.get(
      `/.netlify/functions/PlaylistVideos?selected=${id}`,
    );
    setOutput(data?.items);
  };
  useEffect(() => {
    fetchPlayVideos();
  }, [id]);
  // console.log("output:", output);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        All videos for
        <span style={{ color: "orange" }}> this </span>
        Playlist
      </Typography>

      <Videos videos={output} />
    </Box>
  );
};
