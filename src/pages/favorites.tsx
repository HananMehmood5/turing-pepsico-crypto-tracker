import React, { useContext } from "react";
import PageLayout from "components/layout/PageLayout";
import { CryptoTrackerContext } from "contexts/CryptoTrackerContext";
import { CryptoCurrencyTracker } from "components/organisms";

const HomePage: React.FC = () => {
  const {
    loading,
    favoriteCurrencies,
    error,
    methods: { refetch },
  } = useContext(CryptoTrackerContext);

  return (
    <PageLayout>
      <CryptoCurrencyTracker
        loading={loading}
        error={error}
        currencies={favoriteCurrencies}
        refetch={refetch}
      />
    </PageLayout>
  );
};

export default HomePage;
