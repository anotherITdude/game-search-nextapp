import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImage from "../../services/Image-url";
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      {game ? (
        <Card minHeight={'290px'}>
          <Image
            alt={game.name}
            src={getCroppedImage(game.background_image)}
          />
          <CardBody>
            
            <HStack justifyContent="space-between" marginBottom={4}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore metacritic={game.metacritic} />
            </HStack>
            <Heading fontSize="lg">{game.name}</Heading>
            <Emoji rating={game.rating_top} />
            
          </CardBody>
        </Card>
      ) : (
        <p>Problem Loading Game List</p>
      )}
    </>
  );
};

export default GameCard;
