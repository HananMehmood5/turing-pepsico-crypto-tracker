import { useFetchCryptoData } from "hooks";
import { ReactNode, createContext, useMemo, useState } from "react";
import { CryptoCurrency, CurrencyType } from "types";
import { localStorageHelper } from "utils/localStorage.utils";

type Methods = {
  setCurrency: (currency: CurrencyType) => void;
  addToFavorite: (id: string) => void;
  removeFromFavorite: (id: string) => void;
};

type CryptoTrackerContextType = {
  loading: boolean;
  error?: string;
  data: CryptoCurrency[];
  currency: CurrencyType;
  favoriteCurrencies: CryptoCurrency[];
  methods: Methods;
};

export const CryptoTrackerContext = createContext(
  {} as CryptoTrackerContextType
);

type Props = {
  children: ReactNode;
};

export const CryptoTrackerContextProvider = ({ children }: Props) => {
  const { loading, data = [], error } = useFetchCryptoData();
  const [currency, setCurrency] = useState<CurrencyType>("usd");
  const [favoriteCurrencyIds, setFavoriteCurrencyIds] = useState<string[]>([]);

  const favoriteCurrencies = useMemo(
    () =>
      data.filter((cryptoCurrency) =>
        favoriteCurrencyIds.includes(cryptoCurrency.id)
      ),
    [data, favoriteCurrencyIds]
  );

  const addToFavorite = (id: string) => {
    setFavoriteCurrencyIds((ids) => [...ids, id]);
  };

  const removeFromFavorite = (id: string) => {
    setFavoriteCurrencyIds((ids) => ids.filter((cid) => cid !== id));
  };

  const methods = {
    setCurrency,
    addToFavorite,
    removeFromFavorite,
  };

  return (
    <CryptoTrackerContext.Provider
      value={{
        loading,
        data,
        error,
        currency,
        favoriteCurrencies,
        methods,
      }}
    >
      {children}
    </CryptoTrackerContext.Provider>
  );
};
