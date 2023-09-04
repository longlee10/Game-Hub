import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./SearchInput";

interface NavBarProp {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: NavBarProp) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput onSearchInput={onSearch} />
      <SwitchColorMode />
    </HStack>
  );
};

export default Navbar;
