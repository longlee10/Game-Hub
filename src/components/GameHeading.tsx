import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import usePlatformId from "../hooks/usePlatformId";
import useGenreId from "../hooks/useGenreId";

interface GameHeadingProp {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProp) => {
  const genre = useGenreId(gameQuery.genreId);

  const platform = usePlatformId(gameQuery.platformId);

  const heading = `
        ${genre?.name || ""} ${platform?.name || ""} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
