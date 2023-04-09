import { Platform } from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";
import React from "react";

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

import { Icon } from "@chakra-ui/react";
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
    <>
      {platforms?.map((p) => (
        <Icon marginY={2} marginX={1} color={"gray.400"} as={iconMap[p.slug]} />
      ))}
    </>
  );
};

export default PlatformIconList;
