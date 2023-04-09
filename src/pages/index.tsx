import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="md">
          <GridItem area="aside">
            <GenreList />sdf
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameList />
        </GridItem>
      </Grid>
    </>
  );
}
