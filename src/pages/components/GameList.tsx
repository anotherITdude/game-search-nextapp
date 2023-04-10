import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null
}
const GameList = ({selectedGenre}:Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={{base:5, xl:10}}
        padding={10}
        gap={{base:10, md:5}}
        justifyItems='center'
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <SkeletonCard key={skeleton} />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};
export default GameList;
