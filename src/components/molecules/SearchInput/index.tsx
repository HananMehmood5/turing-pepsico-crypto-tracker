import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import * as S from "./styles";
import { Button } from "components/atoms/Button";

interface CurrencySearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export const SearchInput: React.FC<CurrencySearchProps> = ({
  placeholder,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder ?? "Type to search"}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}>
        <IconSearch size={16} color="#fff" />
      </Button>
    </S.Container>
  );
};
