import axios from "axios";

import { Playlist } from "./Playlist";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos } from "./Videos";

import { ChannelCard } from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import React from "react";

export const ChannelDetails = () => {
  const { id } = useParams();
  //this id is snippest.ChannelId

  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);

  // console.log("B", channelDetail);
  const fetchChanCard = async () => {
    const { data } = await axios.get(
      `/.netlify/functions/ChannelCard?selected=${id}`,
    );
    setChannelDetail(data?.items[0]);
  };
  console.log("chanDetails:", channelDetail);

  const fetchChanVideos = async () => {
    const { data } = await axios.get(
      `/.netlify/functions/ChannelVideos?selected=${id}`,
    );
    setVideos(data?.items);
  };

  useEffect(() => {
    fetchChanVideos();
    fetchChanCard();
  }, [id]);

  return (
    <>
      <Box sx={{ minHeight: "95vh" }}>
        <Box>
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(90deg, rgba(131, 58, 180, 1) 14%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 82%)",
            }}
          />
          <ChannelCard channelcard={channelDetail}></ChannelCard>
        </Box>

        <Box
          className="select"
          sx={{
            display: "flex",
            width: "95%",

            marginTop: "15px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "100%" }}>
            <span
              style={{
                color: "orange",
                fontSize: "24px",

                display: "flex",
                justifyContent: "center",
              }}
            >
              Videos
            </span>
            <Videos videos={videos}></Videos>
          </div>
          <div>
            <span
              style={{
                color: "orange",
                fontSize: "24px",
                margin: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Playlists
            </span>
            <Playlist channelId={id}></Playlist>
          </div>
        </Box>
      </Box>
    </>
  );
};
