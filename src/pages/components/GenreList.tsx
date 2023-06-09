import useGenres, { Genre } from "@/hooks/useGenres";
import {
  Image,
  Text,
  List,
  HStack,
  ListItem,
  Spinner,
  Button,
  Box,
} from "@chakra-ui/react";
import getCroppedImage from "../../services/Image-url";

interface Props {
  onSelectGenre: (selectedGenre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <Box>
      <Text fontSize='2xl'marginTop={1} fontWeight={"bold"} marginBottom={4}>
        Genres
      </Text>
      <List>
        {data?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                objectFit='cover'
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                colorScheme={genre.id === selectedGenre?.id ? "cyan" : ""}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="md"
                whiteSpace='normal'
                textAlign='left'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
