import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenresList from "../components/GenresList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import Sorting from "../components/Sorting";
import GameGrid from "../components/GameGrid";

const Home = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={4}>
            <PlatformSelector />
            <Sorting />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Home;
