import { useFetchCryptoData } from "hooks";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { CryptoCurrency, CurrencyType } from "types";
import { localStorageHelper } from "utils/localStorage.utils";

type Methods = {
  refetch: () => Promise<void>;
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
  favoriteCurrencyIds: string[];
  methods: Methods;
};

export const CryptoTrackerContext = createContext(
  {} as CryptoTrackerContextType
);

type Props = {
  children: ReactNode;
};

export const CryptoTrackerContextProvider = ({ children }: Props) => {
  const { loading, data = [], error, refetch } = useFetchCryptoData();
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
    const updateFavoriteCurrencyIds = [...favoriteCurrencyIds, id];
    setFavoriteCurrencyIds(updateFavoriteCurrencyIds);
    localStorageHelper.set(
      "favoriteCurrencyIds",
      JSON.stringify(updateFavoriteCurrencyIds)
    );
  };

  const removeFromFavorite = (id: string) => {
    const updateFavoriteCurrencyIds = favoriteCurrencyIds.filter(
      (fid) => fid !== id
    );
    setFavoriteCurrencyIds(updateFavoriteCurrencyIds);
    localStorageHelper.set(
      "favoriteCurrencyIds",
      JSON.stringify(updateFavoriteCurrencyIds)
    );
  };

  useEffect(() => {
    const storedFavoriteCurrencyIds = localStorageHelper.get(
      "favoriteCurrencyIds"
    );
    if (storedFavoriteCurrencyIds) {
      setFavoriteCurrencyIds(JSON.parse(storedFavoriteCurrencyIds));
    }
  }, []);

  const methods = {
    refetch,
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
        favoriteCurrencyIds,
        favoriteCurrencies,
        methods,
      }}
    >
      {children}
    </CryptoTrackerContext.Provider>
  );
};
