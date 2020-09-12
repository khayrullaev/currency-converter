import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CurrencyRow from "./src/components/CurrencyRow";
import CustomHeader from "./src/components/Header";
import Equals from "./src/components/Equals";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

export default function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(amount) {
    setAmount(amount);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(amount) {
    setAmount(amount);
    setAmountInFromCurrency(false);
  }

  return (
    <View style={styles.container}>
      <CustomHeader />
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(currency) => setFromCurrency(currency)}
        amount={fromAmount}
        onChangeAmount={(amount) => handleFromAmountChange(parseInt(amount))}
      />

      <Equals />
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(currency) => setToCurrency(currency)}
        amount={toAmount}
        onChangeAmount={(amount) => handleToAmountChange(parseInt(amount))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
