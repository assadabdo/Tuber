import { Box } from "@mui/material";

export const ChannelCard = ({ channelcard }) => {
  const channelTitle = channelcard?.snippet?.title;

  // const channelUrl = channelcard?.snippet?.thumbnails?.high?.url;
  //const channelUrl= channelcard?.snippet?.thumbnails?.medium?.url;
  const channelUrl = channelcard?.snippet?.thumbnails?.default?.url;

  // Debug: verify exact URL coming from API for this card

  // console.log("ChannelCard channelUrl(high/medium/default):", channelUrl);

  return (
    <Box
      className="flex-box"
      sx={{
        borderRadius: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={channelUrl}
        alt={channelTitle}
        style={{
          borderRadius: "50%",
          height: "180px",
          width: "180px",
          border: "2px solid #333",
          marginTop: "-90px",
          objectFit: "cover",
        }}
      />

      <Box
        className="under-img"
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "80px",
          marginLeft: "10px",
          fontSize: "26px",
        }}
      >
        {channelTitle}
      </Box>
    </Box>
  );
};
