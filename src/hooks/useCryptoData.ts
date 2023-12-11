import { fetchCryptoData } from "api";
import { useGet } from "./useGet";
import { CryptoCurrency } from "types";

export const useFetchCryptoData = () => {
    return useGet<CryptoCurrency[]>(fetchCryptoData);
}