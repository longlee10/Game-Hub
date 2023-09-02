import { Badge } from "@chakra-ui/react";

interface CriticScoreProp {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProp) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius={"4px"}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
