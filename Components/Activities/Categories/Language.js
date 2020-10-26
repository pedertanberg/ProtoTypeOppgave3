
import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';
import _ from 'lodash';
import HeaderX from "../HeaderX";
import Modal from "../../Modal/Calendar";


import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

export default class Language extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "French Lessons",
          text: "French Man offering to teach advanced french. Level Required: Fluent",
          location: "Frederiksberg",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',

        },
        {
          title: "Intro course to Italian",
          text: "Offering weekendcourse in Italian. Learn the basics and you will be able to have a conversation by Sunday.",
          location: "Nordhavn",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',

        },
        {
          title: "Norwegian",
          text: "Weekendcourse in norwegian for a couple. ",
          location: "Frederiksberg",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',

        },
        {
          title: "Danish",
          text: "Offering Danish lessons at Albertslund. I'm a teacher in Danish at KU",
          location: "Albertslund Golf course",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',


        },
        {
          title: "Swedish",
          text: "Tired of speaking English with your study group? Learn how to understand them.",
          location: "Nørrebro",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',

        },
      ]
    }
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View
        style={
          styles.item
        }>
        <Text style={{ fontSize: 30, color: "white" }}>{item.title}</Text>
        <Text style={{ color: "white" }}>{item.text}</Text>
        <Text style={{ color: "white" }}>{item.location}</Text>
        <ParallaxImage
          source={{ uri: item.image }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.9}
          {...parallaxProps}

        />


      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50, }}>
        <HeaderX
          icon2Family="Feather"
          icon2Name="search"
          style={styles.headerX}
        ></HeaderX>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../../Login/luke-chesser-3rWagdKBF7U-unsplash.jpg")}
        ><Text style={styles.header}>Sports</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={400}
              itemWidth={400}
              itemHeight={1000}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({ activeIndex: index })}
              hasParallaxImages={true}
            />
          </View>
          <Modal></Modal>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
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
  header: {
    fontSize: 30,
    marginLeft: 100,
    color: "white"

  },
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
    backgroundColor: '#21164e',
    marginLeft: 15,
    marginTop: 25
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },



});