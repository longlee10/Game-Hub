import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer";
import GameScreenShot from "../components/GameScreenShot";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug!); // ! tells complier that this will never be null ir undefined

  if (isLoading) return <Spinner />;
  if (error || !game) throw error; // Error page in router will catch it

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenShot gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
