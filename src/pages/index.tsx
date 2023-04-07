import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" color='teal'>
        <Navbar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        main
      </GridItem>
    </Grid>
    </>
  )
}
