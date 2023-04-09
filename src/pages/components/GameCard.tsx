import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImage from "../../services/Image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      {game ? (
        <Card borderRadius={10} overflow={"hidden"}>
          <Image
            width="auto"
            alt={game.name}
            src={getCroppedImage(game.background_image)}
          />
          <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent="space-between" marginY={2}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore metacritic={game.metacritic} />
            </HStack>
          </CardBody>
        </Card>
      ) : (
        <p>nothing</p>
      )}
    </>
  );
};

export default GameCard;
