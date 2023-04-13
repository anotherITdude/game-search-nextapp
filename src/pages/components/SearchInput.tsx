import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";
import { BsSearch, BsFillXCircleFill } from "react-icons/bs";

interface Props {
  onSearch: (searchInput: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const searchReset = () => {
    if (ref.current?.value) {
      ref.current.value = "";
      onSearch("");
    }
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current?.value) onSearch(ref.current.value);
    else onSearch("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            type="text"
            ref={ref}
            placeholder="Search games here..."
            borderRadius={20}
            variant="filled"
          />
          <InputRightElement
            onClick={searchReset}
            children={<BsFillXCircleFill />}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
