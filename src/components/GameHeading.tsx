import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProp {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProp) => {
  const heading = `
        ${gameQuery.genre?.name || ""} ${gameQuery.platform?.name || ""} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
