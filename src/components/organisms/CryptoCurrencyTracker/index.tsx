import React, { useContext, useMemo, useState } from "react";
import CurrencyList from "components/molecules/CurrencyList";
import { SearchInput } from "components/molecules/SearchInput";
import { CryptoCurrency } from "types";
import * as S from "./styles";
import { Button } from "components/atoms";
import { IconRefresh } from "@tabler/icons-react";

type Props = {
  loading: boolean;
  error?: string;
  currencies: CryptoCurrency[];
  refetch: () => Promise<void>;
};

export const CryptoCurrencyTracker: React.FC<Props> = ({
  loading,
  error,
  currencies,
  refetch,
}) => {
  const [filteredData, setFilteredData] = useState<
    CryptoCurrency[] | undefined
  >();

  const handleSearch = (query: string) => {
    if (query) {
      const filteredCurrencies = currencies?.filter((currency) =>
        currency.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filteredCurrencies ?? []);
    } else {
      setFilteredData(undefined);
    }
  };

  if (loading) return <S.LoadingMessage>Loading...</S.LoadingMessage>;

  if (error) return <S.ErrorMessage>Error...</S.ErrorMessage>;

  return (
    <S.HomeContainer>
      <S.Header>
        <SearchInput onSearch={handleSearch} />
        <Button onClick={refetch}>
          <IconRefresh />
          Refresh
        </Button>
      </S.Header>
      {filteredData ? (
        <CurrencyList currencies={filteredData} />
      ) : (
        <CurrencyList currencies={currencies} />
      )}
    </S.HomeContainer>
  );
};
