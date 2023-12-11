export type CurrencyProfile = {
  background: string;
  tagline: string;
  technology: string;
  category: string;
  consensusAlgorithm: string;
};

export type CurrencyType = "btc" | "eth" | "usd"
export type PriceCurrency = Record<CurrencyType, number>;

export type CryptoCurrency = {
  id: string;
  name: string;
  symbol: string;
  profile: CurrencyProfile;
  priceChangeLast24Hours: PriceCurrency;
  currentPrice: PriceCurrency;
};