import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { DataResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<DataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
