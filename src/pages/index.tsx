import { Inter } from "next/font/google";
import { Box, Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "@/hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "@/hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const inter = Inter({ subsets: ["latin"] });

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string | null;
}

export default function Home() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="md">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box marginX={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                selectedSortOrder={gameQuery.sortOrder}
                onSortSelect={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }

              />
              <Button onClick={() => {
                console.log('reset')
                setGameQuery({ ...gameQuery, genre: null, platform:null, sortOrder: '' })
              }}>Reset Filters</Button>

            </Flex>
          </Box>
          <GameList gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}
