//Make http request to 'https://api.sampleapis.com/futurama/info' and log on console the synopsis.
//You can find OpenApi data/futurama.yaml or data/futurama.jpg

const axios = require("axios");
const instance = axios.create({
  baseURL: "https://api.sampleapis.com/futurama",
  timeout: 1000,
});

const main = async () => {
  const [{ synopsis }] = await instance
    .get("/info")
    .then((response) => response.data)
    .catch(console.error);
  console.log("Result Exercise Api", { a, b });
};

main().then();
