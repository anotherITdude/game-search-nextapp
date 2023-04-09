import { Platform } from "@/hooks/useGames";
import {
  FaXbox,
  FaAndroid,
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  xbox: FaXbox,
  android: FaAndroid,
  pc: FaWindows,
  mac: FaApple,
  linux: FaLinux,
  playstation: FaPlaystation,
  nintendo: SiNintendo,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack alignItems='center'>
      {platforms?.map((p) => (
        <Icon  marginX={1} color={"gray.400"} as={iconMap[p.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
