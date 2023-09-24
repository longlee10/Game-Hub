import { Heading } from "@chakra-ui/react";
import useGenreId from "../hooks/useGenreId";
import usePlatformId from "../hooks/usePlatformId";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenreId(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatformId(platformId);

  const heading = `
        ${genre?.name || ""} ${platform?.name || ""} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
