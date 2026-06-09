import axios from "axios";
exports.handler = async (event) => {
  const selected = event.queryStringParameters.selected;

  const BASEURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${selected}`;

  const options = {
    params: {
      maxResults: 20,
      key: process.env.YOUTUBE_API_KEY,
    },
  };

  const { data } = await axios.get(`${BASEURL}`, options);

  console.log("d", data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
