import React, { useContext, useMemo, useState } from "react";
import { CryptoCurrency } from "types";
import { CryptoTrackerContext } from "contexts/CryptoTrackerContext";
import { createColumnHelper } from "@tanstack/react-table";
import { Button, Table } from "components/atoms";

interface CurrencyListProps {
  currencies: CryptoCurrency[];
}

const columnHelper = createColumnHelper<CryptoCurrency>();

const CurrencyList: React.FC<CurrencyListProps> = ({ currencies }) => {
  const {
    currency,
    favoriteCurrencyIds,
    methods: { addToFavorite, removeFromFavorite },
  } = useContext(CryptoTrackerContext);

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", { header: "Name" }),
      columnHelper.accessor(`currentPrice.${currency}`, {
        header: "Current Price",
      }),
      columnHelper.accessor(`priceChangeLast24Hours.${currency}`, {
        header: "Price Changes Last 24 hours",
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.display({
        header: "Actions",
        cell: ({ row: { original: currencyDetails } }) => {
          const isFavorite = favoriteCurrencyIds.includes(currencyDetails.id);

          const handleClick = () => {
            if (isFavorite) {
              removeFromFavorite(currencyDetails.id);
            } else {
              addToFavorite(currencyDetails.id);
            }
          };

          return (
            <Button onClick={handleClick}>
              {isFavorite ? "Remove From Favorite" : "Add to Favorite"}
            </Button>
          );
        },
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currency, favoriteCurrencyIds]
  );

  return <Table data={currencies} columns={columns} />;
};

export default CurrencyList;
