import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter the amount"
        style={styles.input}
        keyboardType="numeric"
        value={String(amount)}
        onChangeText={onChangeAmount}
      />
      <Picker
        style={styles.picker}
        selectedValue={selectedCurrency}
        onValueChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    width: 250,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#4b6ac9",
    borderRadius: 10,
    marginTop: 100,
    marginRight: 25,
    paddingLeft: 15,
  },
  picker: {
    marginTop: 10,
    height: 15,
    width: 100,
  },
});
