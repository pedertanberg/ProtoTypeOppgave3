//Coming
import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import _ from 'lodash';
import HeaderX from "../HeaderX";
import Modal from "../../Modal/Calendar";


import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

export default class Academics extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "VØS5 Lessons",
          text: "Had VØS5 in 2019, received a 12",
          location: "Frederiksberg",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',

        },
        {
          title: "ADBIS Lessons",
          text: "Have previously teached 2 students, they both received a 12 ",
          location: "Nordhavn",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',



        },
        {
          title: "Macro",
          text: "Currently working at Norges Bank, and have a Diploma from UIB in Samfunnsøkonomi",
          location: "Frederiksberg",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',

        },
        {
          title: "Statistics",
          text: "Advanced user of JMP",
          location: "Albertslund",
          image: 'https://i.imgur.com/kAcIK0J.jpeg',


        },
        {
          title: "Java",
          text: "Advanced user of Java",
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
