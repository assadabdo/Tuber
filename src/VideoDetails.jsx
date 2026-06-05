import axios from "axios";
import ReactPlayer from "react-player";
import React from "react";
import { Stack, Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { CheckCircle, Margin } from "@mui/icons-material";

// NOTE: video details expects route param: /video/:id
// This component should render loading/error states and guard against empty data.

export const VideoDetails = () => {
  const [VideoDetailed, setVideoDetailed] = useState(null);
  const { id } = useParams();

  // console.log(VideoDetailed, "d");
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `/.netlify/functions/VideoDetails?selected=${id}`,
    );
    const firstItem = data?.items?.[0] ?? null;
    setVideoDetailed(firstItem);
  };
  useEffect(() => {
    if (!id) return;
    fetchVideo();
  }, [id]);

  if (!VideoDetailed?.snippet) return "....lodding";
  // console.log(VideoDetailed?.snippet?.channelTitle, "po");
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoDetailed;
  // console.log(viewCount, "view");

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px", flex: 1 }}>
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
          <Typography sx={{ m: "10px", mt: "20px" }} variant="h5" color="white">
            {VideoDetailed?.snippet?.title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            {/* <link to={`/channel/${channelId}`}> */}
            <Typography
              variant={{ sm: "Subtitle1", md: "h2", Margin: "10px" }}
              color={"white"}
            >
              {VideoDetailed.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "6px" }}
              />
            </Typography>
            {/* </link> */}
            <Stack>
              <Typography variant="body1" sx={{ opacity: ".7" }}>
                {parseInt(viewCount).toLocaleString()} Views
                {/* 846,383,33 Views */}
              </Typography>
              <Typography variant="body1" sx={{ opacity: ".7" }}>
                {parseInt(likeCount).toLocaleString()} Likes
                {/* 733,582,8 likes */}
              </Typography>
            </Stack>
          </Stack>
        </Box>
        {/* <Grid></Grid> */}
      </Stack>
    </Box>
  );
};
