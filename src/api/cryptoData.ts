import axios from 'axios';

const API_BASE_URL = 'https://data.messari.io/api/v1';

type FetchedCryptoCurrencyData = {
  data: [
    {
      id: string;
      name: string;
      symbol: string;
      profile: {
        background: string;
        tagline: string;
        technology: string;
        category: string;
        consensus_algorithm: string;
      };
      metrics: {
        market_data: {
          price_btc: number;
          price_eth: number;
          price_usd: number;
          percent_change_btc_last_24_hours: number;
          percent_change_eth_last_24_hours: number;
          percent_change_usd_last_24_hours: number;
        };
      };
    }
  ];
};

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get<FetchedCryptoCurrencyData>(`${API_BASE_URL}/assets`);

    const currencies = response.data.data.map((currency) => ({
      id: currency.id,
      name: currency.name,
      symbol: currency.symbol,
      profile: {
        background: currency.profile.background,
        tagline: currency.profile.tagline,
        technology: currency.profile.technology,
        category: currency.profile.category,
        consensusAlgorithm: currency.profile.consensus_algorithm,
      },
      priceChangeLast24Hours: {
        btc: currency.metrics.market_data.percent_change_btc_last_24_hours,
        eth: currency.metrics.market_data.percent_change_eth_last_24_hours,
        usd: currency.metrics.market_data.percent_change_usd_last_24_hours,
      },
      currentPrice: {
        btc: currency.metrics.market_data.price_btc,
        eth: currency.metrics.market_data.price_eth,
        usd: currency.metrics.market_data.price_usd,
      },
    }));

    return currencies;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
};
