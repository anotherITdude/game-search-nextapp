import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
//import Image from "next/image";
import React from "react";
import { Game } from "../../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image width="auto" alt={game?.name} src={game?.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game?.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
