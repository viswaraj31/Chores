import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
//import firebase from "firebase";

export default class CreateChore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>creating</Text>
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
