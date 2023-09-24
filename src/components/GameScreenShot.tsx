import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const results = data?.results;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {results?.map((r) => (
          <Image key={r.id} src={r.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShot;
