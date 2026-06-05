import axios from "axios";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
// import { fetchFromAPI } from "../utils/fetchFromAPI";
import React, { useEffect, useState } from "react";
import { Supplier } from "./SideBar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelUrl } from "../utils/constants";

export const Playlist = ({ channelId }) => {
  const { playlistId, selectedCategory } = Supplier();
  const [play, setPlay] = useState("");
  // console.log(playlistId, "k");
  const fetchplaylist = async () => {
    const { data } = await axios.get(
      `/.netlify/functions/Playlist?selected=${channelId}`,
    );
    setPlay(data?.items);
  };
  useEffect(() => {
    fetchplaylist();
  }, [channelId]);

  if (!play) return <div>Loading</div>;
  if (play.length === 0)
    return (
      <div style={{ color: "white", fontSize: "22px", margin: "15px" }}>
        {" "}
        There is no playlist in the Channel
      </div>
    );
  // console.log("play", play);
  return (
    <div>
      <div
        className="the-grid"
        style={{
          border: "2px solid gray",
          marginTop: "10px",
          maxWidth: "500px",
          margin: "15px",
        }}
        container
        spacing={2}
        // direction={{ xs: "column", sm: "row", md: "row" }}
      >
        {play.map((item, idx) => (
          <Link
            to={item.id ? `/play/${item?.id}` : demoChannelUrl}
            // style={{ width: "100%" }}
          >
            <div className="play" key={idx}>
              <Typography
                className="hover"
                style={{ color: "#ffffff98", fontSize: "20px", margin: "10px" }}
              >
                {item?.snippet?.title}
              </Typography>
              <div style={{ height: "100%" }} className="playlist">
                <img
                  className="play-img"
                  style={{ width: "200px" }}
                  src={item?.snippet?.thumbnails?.high?.url}
                />
                <PlaylistPlayIcon sx={{ color: "white" }}></PlaylistPlayIcon>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
