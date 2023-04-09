import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      {game ? (
        <Card borderRadius={10} overflow={"hidden"}>
          <Image width="auto" alt={game.name} src={game.background_image} />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </CardBody>
        </Card>
      ) : (
        <p>nothing</p>
      )}
    </>
  );
};

export default GameCard;
