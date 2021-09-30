import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
  Alert
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class CreateStory extends Component {

  async submit(){
    if (
      this.state.title &&
      this.state.desc &&
      this.state.points
    ) {
      let storyData = {
        title: this.state.title,
        description: this.state.desc,
        points: this.state.points,
        created_on: new Date(),
        author_uid: firebase.auth().currentUser.uid,
      };
      await firebase
        .database()
        .ref(
          "/posts/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(storyData)
        .then(function(snapshot) {});
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Feed");
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      title : '',
      desc : '',
      points : '',
    }
  }



  

  
  render() {      
      return (
        <View
          style={
            this.state.light_theme ? styles.containerLight : styles.container
          }
        >
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
                style={styles.appTitleText}
              >
                Create Chore
              </Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
              <View style={{ marginHorizontal: RFValue(10) }}>
                <TextInput
                  style={styles.inputFont}
                  onChangeText={(txt) => {
                    this.setState({title : txt})
                  }}
                  placeholder={"Chore Name"}
                  placeholderTextColor={"white"}
                />
                <TextInput
                  style={styles.inputFont}
                  onChangeText={(text) => {
                    this.setState({desc : text})
                  }}
                  placeholder={"Description"}
                  multiline={true}
                  numberOfLines={4}
                  placeholderTextColor={ "white"}
                />
                <TextInput
                  style={ styles.inputFont}
                  onChangeText={(poin) => {
                    this.setState({points : poin})
                  }}
                  placeholder={"Points"}
                  placeholderTextColor={"white"}
                />
              </View>
              <View style={styles.submitButton}>
                <Button
                  onPress={() => this.submit()}
                  title="Submit"
                  color="#841584"
                />
              </View>
            </ScrollView>
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
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop : 20
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
});
