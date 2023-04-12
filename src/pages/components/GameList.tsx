import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "./../index";

interface Props {
  gameQuery: GameQuery
}

const GameList = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  console.log(data, gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
        justifyItems="center"
        
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} >
              <SkeletonCard />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};
export default GameList;
