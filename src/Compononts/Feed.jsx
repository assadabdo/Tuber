import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

// import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Videos } from "./Videos";
import { Supplier } from "./SideBar";
// import { Playlist } from "./Playlist";
export const Feed = () => {
  const [videos, setVideos] = useState([]);

  const { SideBar, selectedCategory, setSelectedCategory } = Supplier();
  // console.log(SideBar, "side");
  const fetchFeed = async () => {
    const { data } = await axios.get(
      `/.netlify/functions/Feed?selected=${selectedCategory}`,
    );

    // console.log("data:", data);
    setVideos(data?.items);
  };
  useEffect(() => {
    fetchFeed();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, height: "80vh" }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></SideBar>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "orange" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
