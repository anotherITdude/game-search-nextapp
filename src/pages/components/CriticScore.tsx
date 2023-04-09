import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}
const CriticScore = ({ metacritic }: Props) => {
  const color = metacritic > 80 ? "green" : metacritic > 60 ? "red" : "";
  return (
    <div>
      <Badge colorScheme={color} fontSize="14px" paddingX={2}>
        {metacritic}
      </Badge>
    </div>
  );
};

export default CriticScore;
