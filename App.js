import firebase from "firebase";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import ActivityList from "./Components/Activities/ActivityList";
import AddActivity from "./Components/Activities/AddActivity";
import ActivityDetails from "./Components/Activities/ActivityDetails";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import EditActivity from "./Components/Activities/EditActivity";
import ProfileScreen from "./Components/ProfileScreen";
import Profile from "./Components/ProfileScreen";
import Channels from "./Components/Activities/Channels";
import Login from "./Components/Login/Login";
import Createuser from "./Components/Login/CreateUser";
import Timeline from "./Components/Activities/Timeline";



const StackNavigator = createStackNavigator(
  {
    ActivityList: { screen: ActivityList },
    ActivityDetails: { screen: ActivityDetails },
    EditActivity: { screen: EditActivity },
    Channels: { screen: Channels },
    ProfileScreen: { screen: Profile },
    Createuser: {screen: Createuser},
    Login: {screen: Login},
    Timeline: {screen:Timeline}
  },
  { initialRouteKey: "Activity List" }
);

const TabNavigator = createBottomTabNavigator({
  Main: {
    screen: StackNavigator,
    navigationOptions: {
      tabBarLabel: "Activities",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="user" size={24} color={tintColor} />
      ),
    },
  },
  Add: {
    screen: AddActivity,
    navigationOptions: {
      tabBarLabel: "Add Activity",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="pluscircleo" size={24} color={tintColor} />
      ),
    },
  },

  Channel: {
    screen: Channels,
    navigationOptions: {
      tabBarLabel: "Channels",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="book" size={24} color={tintColor} />
      ),
    },
  },
  TimeLine: {
    screen: Timeline,
    navigationOptions: {
      tabBarLabel: "Timeline",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="notification" size={24} color={tintColor} />
      ),
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: "Login",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="login" size={24} color={tintColor} />
      ),
    },
  },
  Createuser: {
    screen: Createuser,
    navigationOptions: {
      tabBarLabel: "Create user",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="adduser" size={24} color={tintColor} />
      ),
    },
  },

  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="profile" size={24} color={tintColor} />
      ),
    },
  },
});
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyC2F7jUn4RoL-jP9PFQ6te12Q7_cJj5nic",
      authDomain: "acitivit.firebaseapp.com",
      databaseURL: "https://acitivit.firebaseio.com",
      projectId: "acitivit",
      storageBucket: "acitivit.appspot.com",
      messagingSenderId: "738053182099",
      appId: "1:738053182099:web:d9bbf6187799905b927366",
      measurementId: "G-7P2KPG2KV6",
    };

    // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
    // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  render() {
    return <AppContainer />;
  }
}
