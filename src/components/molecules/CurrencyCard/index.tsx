// components/CurrencyCard.tsx
import React from "react";
import { CryptoCurrency } from "types";

interface CurrencyCardProps {
  currency: CryptoCurrency;
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({ currency }) => (
  <div>
    {/* <h2>{currency.name}</h2> */}
    {/* <p>Symbol: {currency.symbol}</p> */}
  </div>
);
