import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class StoryCard extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        let story = this.props.story;
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                this.props.navigation.navigate("Conformation", {
                  story: story
                })
              }
            >
              
                <View style={styles.titleContainer}>
                  
                    <Text
                      style={
                         styles.storyTitleTextLight
                      }
                    >
                      {story.title}
                    </Text>
                    <Text
                      style={
                        styles.storyAuthorTextLight
                      }
                    >
                      {story.points}
                    </Text>
                  
                </View>
              
            </TouchableOpacity>
          );
        }
      }
    
    
    const styles = StyleSheet.create({
      droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
      container : {
        backgroundColor : "#e3e3e3",
        width : "90%",
        marginTop : 30,
        marginLeft : "5%"
      },
      cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#e3e3e3",
        borderRadius: RFValue(20),
       
      },
      cardContainerLight: {
        margin: RFValue(13),
        backgroundColor: "white",
        borderRadius: RFValue(20),
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {
          width: 3,
          height: 3
        },
        shadowOpacity: RFValue(0.5),
        shadowRadius: RFValue(5),
        elevation: RFValue(2)
      },
      storyImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
      },
      titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center",
        height : 80
      },
      titleTextContainer: {
        flex: 0.8,
        color : "red"
      },
      iconContainer: {
        flex: 0.2
      },
      storyTitleText: {
        fontSize: RFValue(25),
        color: "white"
      },
      storyTitleTextLight: {
        fontSize: RFValue(25),
        color: "black"
      },
      storyAuthorText: {
        fontSize: RFValue(18),
        color: "white"
      },
      storyAuthorTextLight: {
        fontSize: RFValue(18),
        color: "black"
      },
      descriptionContainer: {
        marginTop: RFValue(5)
      },
      descriptionText: {
        fontSize: RFValue(13),
        color: "white"
      },
      descriptionTextLight: {
        fontSize: RFValue(13),
        color: "black"
      },
      actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
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
      likeText: {
        color: "white",
        fontSize: 25,
        marginLeft: 25,
        marginTop: 6
      },
      likeTextLight: {
        fontSize: 25,
        marginLeft: 25,
        marginTop: 6
      }
    });

