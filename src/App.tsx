import { Grid, GridItem, Show } from "@chakra-ui/react";
`"nav nav" "aside main"`;
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"teal"}>
          Side
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"deeppink"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
