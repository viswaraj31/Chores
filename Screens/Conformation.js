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
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class Conformation extends Component {
  constructor(props){
    super(props);
    this.state = {
      yesClicked : false,
      noClicked : false
    }
  }
  render() {
    if (!this.props.route.params) {
      this.props.navigation.navigate("Home");
    }else {
      return (
        <View
          style={
            styles.container
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
                style={
                 styles.appTitleText
                }
              >
                Chores App
              </Text>
            </View>
          </View>
          <View style={styles.storyContainer}>
           
              
                <View style={styles.titleTextContainer}>
                  <Text
                    style={
                      styles.storyTitleText
                    }
                  >
                    {this.props.route.params.story.Title}
                  </Text>
                  <Text
                    style={
                      styles.storyAuthorText
                    }
                  >
                    {this.props.route.params.story.Description}
                  </Text>
                  <Text
                    style={
                       styles.storyAuthorText
                    }
                  >
                    {this.props.route.params.story.Points}
                  </Text>
                </View>
                <View style = {styles.actionContainer}>
              <TouchableOpacity style = {styles.yesButton} onPress = {()=>{
                this.setState({yesClicked : this.state.yesClicked?false:true})
                
              }}
              disabled = {this.state.noClicked?true:false}
              >
              <Ionicons
                    name={this.state.yesClicked?"checkmark-circle":"checkmark-circle-outline"}
                    size={RFValue(30)}
                    color={"white"}
                  />
              </TouchableOpacity>

              <TouchableOpacity style = {styles.noButton} onPress = {()=>{
                this.setState({noClicked : this.state.noClicked?false:true})
                
              }}
              disabled = {this.state.yesClicked?true:false}>
              <Ionicons
                    name={this.state.noClicked?"close-circle":"close-circle-outline"}
                    size={RFValue(30)}
                    color={"white"}
                  />
              </TouchableOpacity> 

            </View>
            </View>
            
        </View>
      );
    }
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
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
   
  },
  storyContainer: {
    flex: 1,
    backgroundColor: "#2f345d",
    marginTop : 50
  },
  storyCard: {
    margin: RFValue(20),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
    alignItems:"center",
    justifyContent : "Center"
  },
  storyTitleText: {fontSize: RFValue(25),
    color: "white",
    alignSelf:"center"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    color: "white",
    alignSelf:"center"
  },
  actionContainer: {
    margin: RFValue(10),
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },
  yesButton: {
    width: RFValue(60),
    height: RFValue(40),
    flexDirection: "row",
    backgroundColor: "#39e948",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: RFValue(30),
    borderTopLeftRadius: RFValue(30)

  },
  noButton: {
    width: RFValue(60),
    height: RFValue(40),
    flexDirection: "row",
    backgroundColor: "#eb3948",
    justifyContent: "center",
    alignItems: "center",
    
    borderBottomRightRadius: RFValue(30),
    borderTopRightRadius: RFValue(30)
  },
  likeButtonLiked: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeButtonDisliked: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#eb3948",
    borderWidth: 2,
    borderRadius: RFValue(30)
  },
});
