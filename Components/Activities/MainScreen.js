import firebase from "firebase";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import ActivityList from "./ActivityList";
import AddActivity from "./AddActivity";
import ActivityDetails from "./ActivityDetails";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import EditActivity from "./EditActivity";
import ProfileScreen from "../ProfileScreen";
import Profile from "../ProfileScreen";
import Channels from "./Channels";
import Createuser from "../Login/CreateUser";
import Timeline from "./Timeline";
import Sports from "./Categories/Sports"
import { createDrawerNavigator } from "react-navigation-drawer";
import Calendar from "../Modal/Calendar";
import HomePage from "../HomePage";

const StackNavigator = createStackNavigator(
  {
    ActivityList: { screen: ActivityList },
    ActivityDetails: { screen: ActivityDetails },
    EditActivity: { screen: EditActivity },
    Channels: { screen: Channels },
    ProfileScreen: { screen: Profile },
    Createuser: {screen: Createuser},
    Timeline: {screen:HomePage}
  },
  { initialRouteKey: 'ActivityList' }
);

const MyDrawerNavigator = createDrawerNavigator({
    Main: {
        screen: StackNavigator,
    },
    Categories: {
        screen: Channels
    },
    ProfileScreen: {
        screen: ProfileScreen
    },
    Timeline: {
        screen: HomePage
    },
    Adduser: {
        screen: Createuser
    },
    Sports: {
        screen: Sports
    },
    Calendar: {
      screen: Calendar
    },
})
const AppNav = createAppContainer(MyDrawerNavigator)

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

export default class MainScreen extends React.Component {
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
      return <AppNav/>
            
  }
}
