import bullsEye from "./../../../public/bulls-eye.webp";
import meh from "./../../../public/thumbs-up.webp";
import thumbsUp from "./../../../public/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh.src, alt: "meh", boxSize: "20px" },
    4: { src: thumbsUp.src, alt: "recommended", boxSize: "20px" },
    5: { src: bullsEye.src, alt: "exeptional", boxSize: "25px" },
  };

  return (
    <Tooltip hasArrow label={`Rating: ${rating}/5`}>
      <Image marginTop={2} {...emojiMap[rating]} />
    </Tooltip>
  );
};

export default Emoji;
