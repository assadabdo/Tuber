import axios from "axios";
exports.handler = async (event) => {
  const selected = event.queryStringParameters.selected;

  const BASEURL = `https://www.googleapis.com/youtube/v3/search?channelId=${selected}&part=snippet&order=date`;

  const options = {
    params: {
      maxResults: 20,
      key: "AIzaSyBS7jnWgHnZmz1-CyhPco9CoTmqtxvImXE",
    },
  };

  const { data } = await axios.get(`${BASEURL}`, options);

  console.log("data:", data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
