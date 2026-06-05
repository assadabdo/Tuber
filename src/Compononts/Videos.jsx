import { Stack, Box } from "@mui/material";
import { data } from "react-router-dom";
import { VideoCard } from "./VideoCard";

import { ChannelCard } from "./ChannelCard";
export const Videos = ({ videos }) => {
  // console.log(videos);
  return (
    <>
      <Stack
        className="all"
        style={{
          color: "white",
          display: "grid",
          flexWrap: "wrap",
          justifyContent: "start",
          marginTop: "20px",
          gap: "15px",
        }}
        // direction="row"
        // flexWrap="wrap"
        // gap={2}
      >
        {videos.map((item, idx) => (
          <Box key={idx}>
            {/* {item.id.videoId && <VideoCard video={item} />} */}
            {<VideoCard video={item} />}
            {/* videoId and snippet are destrucured from this item in VideoCard.jsx */}
          </Box>
        ))}
      </Stack>
    </>
  );
};
