import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground
} from "react-native";
import HeaderX from "./HeaderX";
import CupertinoFooter1 from "./CupertinoFooter1";

import Academics from "./Categories/Academics";
import Sports from "./Categories/Sports";
import Handcraft from "./Categories/Handcraft";
import Food from "./Categories/Food";
import Action from "./Categories/Action";
import Language from "./Categories/Language";
import { createStackNavigator } from "react-navigation-stack";


const StackNav = createStackNavigator({
  Academics: { screen: Academics },
  Sports: { screen: Sports },
  Handcraft: { screen: Handcraft },
  Food: { screen: Food },
  Action: { screen: Action },
  Language: { screen: Language },
})


export default class Channels extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
        <HeaderX
          icon2Family="Feather"
          icon2Name="search"
          style={styles.headerX}
        ></HeaderX>
        <View style={styles.body}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.following}>
              <Text style={styles.text}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popular}>
              <Text style={styles.friends}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text3}>Explore</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cupertinoFooter1Row}>
            <CupertinoFooter1 style={styles.cupertinoFooter1}></CupertinoFooter1>
            <View style={styles.categories}>
              <ImageBackground
                style={styles.rect2}
                imageStyle={styles.rect2_imageStyle}
                source={require("../Login//luke-chesser-3rWagdKBF7U-unsplash.jpg")}
              >
                <View style={styles.button2RowColumn}>
                  <View style={styles.button2Row}>
                    <TouchableOpacity style={styles.button2}>
                      <View style={styles.rect8Filler}></View>
                      <View style={styles.rect8}>
                        <View style={styles.sportsStack}>
                          <Text style={styles.sports}>Sports</Text>
                          <Image
                            source={require("./Images/dinho.jpeg")}
                            resizeMode="contain"
                            style={styles.image39}
                          ></Image>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.button2Filler}></View>
                    <TouchableOpacity style={styles.button3}>
                      <View style={styles.image40Stack}>
                        <Image
                          source={require("./Images/handcraft.jpg")}
                          resizeMode="contain"
                          style={styles.image40}
                        ></Image>
                        <View style={styles.rect82}>
                          <Text style={styles.handverk}>Håndverk</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button4Row}>
                    <TouchableOpacity style={styles.button4}>
                      <ImageBackground
                        source={require("./Images/food.png")}
                        resizeMode="contain"
                        style={styles.image41}
                        imageStyle={styles.image41_imageStyle}
                      >
                        <View style={styles.rect83Filler}></View>
                        <View style={styles.rect83}>
                          <Text style={styles.food}>Food</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                    <View style={styles.button4Filler}></View>
                    <TouchableOpacity style={styles.button5}>
                      <ImageBackground
                        source={require("./Images/books.jpg")}
                        resizeMode="contain"
                        style={styles.image42}
                        imageStyle={styles.image42_imageStyle}
                      >
                        <View style={styles.rect84Filler}></View>
                        <View style={styles.rect84}>
                          <Text style={styles.academics}>Academics</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.button2RowColumnFiller}></View>
                <View style={styles.button7Row}>
                  <TouchableOpacity style={styles.button7}>
                    <ImageBackground
                      source={require("./Images/languages-edited.png")}
                      resizeMode="contain"
                      style={styles.image43}
                      imageStyle={styles.image43_imageStyle}
                    >
                      <View style={styles.rect85Filler}></View>
                      <View style={styles.rect85}>
                        <Text style={styles.awardWinning}>Language</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                  <View style={styles.button7Filler}></View>
                  <TouchableOpacity style={styles.button6}>
                    <ImageBackground
                      source={require("./Images/fly.jpg")}
                      resizeMode="contain"
                      style={styles.image38}
                      imageStyle={styles.image38_imageStyle}
                    >
                      <View style={styles.rect86Filler}></View>
                      <View style={styles.rect86}>
                        <Text style={styles.action}>Action</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  rect2: {
    flex: 1
  },
  rect2_imageStyle: {},
  progressBar: {
    height: 60,
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 28,

  },

  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  body: {
    flex: 1,
    backgroundColor: "#279dcc"
  },
  tabs: {
    height: 80,
    backgroundColor: "#21164e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0
  },
  following: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  popular: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 100
  },
  friends: {
    color: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 26
  },
  button: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center"
  },
  text3: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  cupertinoFooter1: {
    height: 49,
    width: 375,
    marginTop: 531
  },
  categories: {
    backgroundColor: "rgb(27,29,37)",
    flex: 1,
    marginLeft: 44
  },
  button2: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  rect8Filler: {
    flex: 1
  },
  rect8: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)"
  },
  sports: {
    color: "rgba(247,252,253,1)",
    position: "absolute",
    fontSize: 17,
    top: 148,
    left: 61
  },
  image39: {
    top: 0,
    left: 0,
    width: 170,
    height: 163,
    position: "absolute"
  },
  sportsStack: {
    width: 170,
    height: 170,
    marginTop: -143,
    marginLeft: -10
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image40: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  rect82: {
    left: 25,
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    position: "absolute",
    right: 25,
    bottom: 0,
    justifyContent: "center"
  },
  handverk: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  image40Stack: {
    height: 201,
    marginTop: -50,
    marginLeft: -25,
    marginRight: -25
  },
  button2Row: {
    height: 150,
    flexDirection: "row"
  },
  button4: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image41: {
    width: 200,
    height: 200,
    marginTop: -43,
    marginLeft: -25
  },
  image41_imageStyle: {},
  rect83Filler: {
    flex: 1
  },
  rect83: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center",
    marginBottom: 7,
    marginLeft: 25,
    marginRight: 25
  },
  food: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button4Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button5: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image42: {
    width: 200,
    height: 200,
    marginTop: -35,
    marginLeft: -25
  },
  image42_imageStyle: {},
  rect84Filler: {
    flex: 1
  },
  rect84: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center",
    marginBottom: 15,
    marginLeft: 25,
    marginRight: 25
  },
  academics: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginLeft: 34
  },
  button4Row: {
    height: 150,
    flexDirection: "row",
    marginTop: 40
  },
  button2RowColumn: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
  button2RowColumnFiller: {
    flex: 1
  },
  button7: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-end"
  },
  image43: {
    width: 235,
    height: 234,
    marginTop: -59,
    marginLeft: -37
  },
  image43_imageStyle: {},
  rect85Filler: {
    flex: 1
  },
  rect85: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center",
    marginBottom: 25,
    marginLeft: 37,
    marginRight: 48
  },
  awardWinning: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button7Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button6: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-end"
  },
  image38: {
    width: 200,
    height: 200,
    marginTop: -35,
    marginLeft: -41
  },
  image38_imageStyle: {},
  rect86Filler: {
    flex: 1
  },
  rect86: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    marginBottom: 14,
    marginLeft: 41,
    marginRight: 9
  },
  action: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginTop: 8,
    alignSelf: "center"
  },
  button7Row: {
    height: 150,
    flexDirection: "row",
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15
  },
  cupertinoFooter1Row: {
    height: 580,
    flexDirection: "row",
    marginLeft: -419
  }
});

