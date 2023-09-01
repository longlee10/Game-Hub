import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "5b4e74ed3da44387afc18dcccdc5157f" },
});
