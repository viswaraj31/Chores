import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from '../Screens/Feed'
import Confr from "../Screens/Conformation";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Conformation" component={Confr} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
