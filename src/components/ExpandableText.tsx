import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableProps) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  // handle scenario where there is no childen passed
  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
