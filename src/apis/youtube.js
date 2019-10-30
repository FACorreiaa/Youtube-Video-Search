import axios from "axios";

const KEY = "AIzaSyAuOiixIMEL6QLfeHGmTpO5lGLzHEFp_uk";

export const baseParams = {
  part: "snippet",
  maxResults: 15,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
