
import * as React from 'react';
import {
    Text, 
    View,
    SafeAreaView, 
    ImageBackground, 
    StyleSheet,
  } from 'react-native';
  import _ from 'lodash';
  import HeaderX from "../HeaderX";
  
  import Carousel from 'react-native-snap-carousel';
  
  export default class Language extends React.Component {
  
   
      constructor(props){
          super(props);
          this.state = {
            activeIndex:0,
            carouselItems: [
            {
                title:"French Lessons",
                text: "French Man offering to teach advanced french. Level Required: Fluent",
                location: "Frederiksberg",
            },
            {
                title:"Intro course to Italian",
                text: "Offering weekendcourse in Italian. Learn the basics and you will be able to have a conversation by Sunday.",
                location: "Nordhavn",
            },
            {
                title:"Norwegian",
                text: "Weekendcourse in norwegian for a couple. ",
                location: "Frederiksberg",
            },
            {
                title:"Danish",
                text: "Offering Danish lessons at Albertslund. I'm a teacher in Danish at KU",
                location: "Albertslund Golf course",
              
            },
            {
                title:"Swedish",
                text: "Tired of speaking English with your study group? Learn how to understand them.",
                location: "Nørrebro",
            },
          ]
        }
      }
  
      _renderItem({item,index}){
          return (
            <View
            style={{
                backgroundColor:'floralwhite',
                borderRadius: 5,
                height: 250,
                top:"10%",
                padding: 50,
                marginLeft: 25,
                marginRight: 25, }}>
              <Text style={{fontSize: 30}}>{item.title}</Text>
              <Text>{item.text}</Text>
              <Text>{item.location}</Text>
              
            </View>
  
          )
      }
  
      render() {
          return (
            <SafeAreaView style={{flex: 1,  paddingTop: 50, }}>
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
              <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
                
                  <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
              </View>
              </ImageBackground>
            </SafeAreaView>
          );
      }
  }
  
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
        marginLeft:100,
        color:"white"
  
        }
  
  
  });
  