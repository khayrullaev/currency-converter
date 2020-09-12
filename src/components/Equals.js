import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Equals extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.equal}>=</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
    marginTop: 80,
  },
  equal: {
    fontWeight: "700",
    fontSize: 50,
    fontStyle: "italic",
    color: "teal",
  },
});
