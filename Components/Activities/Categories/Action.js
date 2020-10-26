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
  
  export default class App extends React.Component {
  
   
      constructor(props){
          super(props);
          this.state = {
            activeIndex:0,
            carouselItems: [
            {
                title:"F2 lessons",
                text: "Former professional offering lessons in a F2 car",
                location: "Frederiksberg",
            },
            {
                title:"Gokart",
                text: "Tired of loosing in Gokart? I'll make sure you win the next time. ",
                location: "Nordhavn",
            },
            {
                title:"Paraschuting",
                text: "Weekend course in Hellerup. You will after the course be able to jump alone. ",
                location: "Frederiksberg",
            },
            {
                title:"Top Gun",
                text: "Offering Flight lessons at Albertslund, You will get to take off, land and do loops",
                location: "Albertslund Golf course",
              
            },
            {
                title:"Kiting",
                text: "Offering intro-course to Kiting at Amager Strandpark ",
                location: "Amager",
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
  