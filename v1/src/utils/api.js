import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com/auto-complete/";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
