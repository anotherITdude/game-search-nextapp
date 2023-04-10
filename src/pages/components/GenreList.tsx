import useGenres from "@/hooks/useGenres";
import { Image, Text,List, HStack, ListItem } from "@chakra-ui/react";
import getCroppedImage from '../../services/Image-url';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <List marginY={8}>
      {data?.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image borderRadius={8} boxSize='32px' src={getCroppedImage(genre.image_background)} />
            <Text fontSize='md'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
