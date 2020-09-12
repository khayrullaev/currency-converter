import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";

export default function CustomHeader() {
  return (
    <Header
      centerComponent={{
        text: "Currency Converter",
        style: { color: "#fff", fontSize: 24, fontWeight: "bold" },
      }}
      containerStyle={{ backgroundColor: "teal" }}
    />
  );
}
