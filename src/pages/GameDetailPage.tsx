import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug!); // ! tells complier that this will never be null ir undefined

  if (isLoading) return <Spinner />;
  if (error || !game) throw error; // Error page in router will catch it

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};
