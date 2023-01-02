import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import chatScreen from "./src/Chatscreen";
import LoginScreen from "./src/Loginscreen";

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: chatScreen
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator)