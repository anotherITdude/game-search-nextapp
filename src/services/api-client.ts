import axios from "axios";

const baseUrl = "https://api.rawg.io/api";

export default axios.create({
  baseURL: baseUrl,
  params: {
    key: "fb51800390a34b05b790c1aa0a03a0d9",
  },
});

//abhi.baidya: 92b351228863400c9a7ce83182120900
//abhibaidya998: fb51800390a34b05b790c1aa0a03a0d9
