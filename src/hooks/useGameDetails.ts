import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.fetch(slug),
  });

export default useGameDetails;
