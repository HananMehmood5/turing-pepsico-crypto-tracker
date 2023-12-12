import React, { useContext } from "react";
import { IconHome, IconStarFilled } from "@tabler/icons-react";

import { CryptoTrackerContext } from "contexts/CryptoTrackerContext";
import { Divider, Dropdown, Logo } from "components/atoms";
import { CurrencyType } from "types";

import * as S from "./styles";

const Sidebar: React.FC = () => {
  const {
    currency,
    methods: { setCurrency },
  } = useContext(CryptoTrackerContext);

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value as CurrencyType);
  };

  return (
    <S.SidebarContainer>
      <Logo />
      <Divider />
      <S.NavItems>
        <S.NavItem href="/">
          <IconHome />
          Home
        </S.NavItem>
        <S.NavItem href="/favorites">
          <IconStarFilled />
          Favorites
        </S.NavItem>
      </S.NavItems>
      <Divider />
      <S.DropDownWrapper>
        <S.Label>Current Currency</S.Label>
        <Dropdown value={currency} onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
        </Dropdown>
      </S.DropDownWrapper>
    </S.SidebarContainer>
  );
};

export default Sidebar;
