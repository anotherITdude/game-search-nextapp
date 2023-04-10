import useGenres, { Genre } from "@/hooks/useGenres";
import {
  Image,
  Text,
  List,
  HStack,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImage from "../../services/Image-url";

interface Props {
    onSelectGenre: (genre:Genre) => void;
}
const GenreList = ({onSelectGenre}: Props) => {
    const { data, isLoading, error } = useGenres();
    
  if (isLoading) return <Spinner />;
  return (
    <List marginY={8}>
      {data?.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImage(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="md"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
