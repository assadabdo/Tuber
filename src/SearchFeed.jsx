import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "./utils/fetchFromAPI";

import { Videos } from "./Compononts/Videos";
export const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  // if the inaitail value of this state is not [],
  //  an error sayung videoes.map is not a a function

  const { searchTerm } = useParams();
  // console.log("u", videos);

  const fetchFeed = async () => {
    const { data } = await axios.get(
      `/.netlify/functions/SearchFeed?selected=${searchTerm}`,
    );
    setVideos(data?.items);
  };
  // console.log("data:", data);
  useEffect(() => {
    // setVideos(null);

    fetchFeed();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "76vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Results Search for:
        <span style={{ color: "orange" }}> {searchTerm} </span>
        Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};
