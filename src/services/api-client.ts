import axios, { AxiosRequestConfig } from "axios";

export interface DataResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "5b4e74ed3da44387afc18dcccdc5157f" },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  fetch = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<DataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
