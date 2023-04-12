import { Badge } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}
const CriticScore = ({ metacritic }: Props) => {
  const color = metacritic > 80 ? "green" : metacritic > 60 ? "red" : "";
  return (
    <Tooltip placement="top" hasArrow label={`Critics Rating: ${metacritic}`}>
      <Badge colorScheme={color} fontSize="13px" paddingX={2} >
        {metacritic}
      </Badge>
    </Tooltip>
  );
};

export default CriticScore;
