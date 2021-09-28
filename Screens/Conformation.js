import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
//import firebase from "firebase";

export default class Conformation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Do you trust your child?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
