import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: ContainerProps) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      _hover={{ transform: "scale(1.03)", transition: "transform .15s" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
