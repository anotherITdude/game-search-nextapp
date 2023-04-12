import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortSelect: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSortSelect, selectedSortOrder }: Props) => {
  const sortItems = [
    { value: "", title: "Relevance" },
    { value: "-added", title: "Date Added" },
    { value: "name", title: "Name" },
    { value: "-released", title: "Release Date" },
    { value: "-metacritic", title: "Popularity" },
    { value: "-rating", title: "Average Rating" },
  ];

  const currentSortOrder = sortItems?.find(
    (item) => item.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton marginX={2} as={Button} rightIcon={<BsChevronDown />}>
        Sort By {currentSortOrder?.title || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortItems.map((item) => (
          <MenuItem
            onClick={() => onSortSelect(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
