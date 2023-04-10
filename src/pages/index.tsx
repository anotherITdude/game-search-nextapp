import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from '@/hooks/useGenres';

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  
  const [ selectedGenre, setSelectedGenre ] = useState<Genre | null>(null)

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          md: '200px 1fr'
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="md">
          <GridItem area="aside" paddingX={5}>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameList selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}
