import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../index';

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    const heading = `${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''} Games`;
  return (
      <Heading marginBottom={1} as='h1'>{heading}</Heading>
  )
}

export default GameHeading
