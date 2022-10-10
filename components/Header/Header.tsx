import React from "react";
import Image from "next/image";
import logo from "public/images/logo.png";
import { HeaderWrapper, NavList, RightBlock } from "./styles";
import BookDemo from "components/buttons/BookDemo";

const navigation = [
  "Why Qubit?",
  "Products",
  "Solutions",
  "Customers",
  "Case studies",
  "Resources",
  "More",
];

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <a href="/">
        <Image src={logo} alt="logo" width={79} height={24} />
      </a>
      <nav>
        <NavList>
          {navigation.map((nav) => (
            <li>{nav}</li>
          ))}
        </NavList>
      </nav>
      <RightBlock>
        <BookDemo />
        <a href="/">Log In</a>
      </RightBlock>
    </HeaderWrapper>
  );
};

export default Header;
