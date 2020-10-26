//Coming
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
  
  export default class Handcraft extends React.Component {
  
   
      constructor(props){
          super(props);
          this.state = {
            activeIndex:0,
            carouselItems: [
            {
                title:"Seewing Lessons",
                text: "Previously made a sweater, west, hat, mittens. See pictures",
                location: "Frederiksberg",
            },
            {
                title:"Building a table with epoxy",
                text: "Offering weekendcourse how to build a epoxy table. I'll supply with materials and locations. ",
                location: "Nordhavn",
            },
            {
                title:"Hekling",
                text: "Weekendcourse i hekling. Lærer bort hvordan å hekle grytekluter.",
                location: "Frederiksberg",
            },
            {
                title:"Høvlig",
                text: "shaamener",
                location: "Albertslund",
              
            },
            {
                title:"Snekring 101",
                text: "Lærer bort det helt grunleggende om hvorledes man snekrer. Vi vil ila kurset snekre en stol.",
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
  