import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import StoryCard from './ChoresCard'
import { RFValue } from "react-native-responsive-fontsize";
let chor  = require("../Temp.json");

export default class Feed extends Component {

  renderItem = ({ item: story }) => {
    return <StoryCard story={story} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

    render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style = {
                  styles.appTitleText
                }
              >
                I Hate Chores
              </Text>
            </View>
          </View>
            <View style={styles.cardContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={chor}
                renderItem={this.renderItem}
              />
            </View>
          <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    containerLight: {
      flex: 1,
      backgroundColor: "white"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    appTitleTextLight: {
      color: "black",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.85
    },
    noStories: {
      flex: 0.85,
      justifyContent: "center",
      alignItems: "center"
    },
    noStoriesTextLight: {
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans"
    },
    noStoriesText: {
      color: "white",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans"
    }  
});
