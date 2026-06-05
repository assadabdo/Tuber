import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import React from "react";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

export const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  // VideoId and snippest are destrucured from item that passing as prop from Videos.jsx
  // check the search Term Request
}) => {
  const thumbnailUrl = snippet?.thumbnails?.high?.url;

  // console.log(snippet.channelId, "check");
  // console.log("what", demoThumbnailUrl);

  const title = snippet?.title || demoVideoTitle;

  // console.log("the url is:", thumbnailUrl, title);
  return (
    <Card style={{ backgroundColor: "#1e1e1e" }} className="card">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          // src={thumbnailUrl || demoThumbnailUrl}
          src={thumbnailUrl}
          alt={title}
          style={{
            width: "80%",
            height: "180px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle2"
            color="#333"
            sx={{ fontWeight: "bold", color: "white", textAlign: "center" }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            className="channel"
            variant="subtitle2"
            color="#d6a833"
            sx={{
              fontWeight: "bold",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              // textDecoration: "underline",
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
// sx={{ width: { md: "320px", xs: "200px" } }}
