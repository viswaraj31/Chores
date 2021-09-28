import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
//import firebase from "firebase";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Temp Profile</Text>
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
