import * as React from "react";
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import HeaderX from "./Activities/HeaderX";


const users = [
   {
      name: 'brynn',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
   },
   // more users here
];


export default function () {

   return (
      <View style={styles.root}>
         <HeaderX
            icon2Family="Feather"
            icon2Name="search"
            style={styles.headerX}
         ></HeaderX>
         <ImageBackground
            style={styles.rect2}
            imageStyle={styles.rect2_imageStyle}
            source={require("./Login/luke-chesser-3rWagdKBF7U-unsplash.jpg")}
         >
            <ScrollView style={{ marginBottom: 100 }}>
               <Card style={styles.card}>
                  <Card.Title>Football</Card.Title>
                  <Card.Divider />
                  <Image source={require('../Components/Activities/Images/football.jpg')} style={styles.image} />
                  <Text style={{ marginBottom: 10 }}>
                     Former professional offering lessons in speed, agility and ballcontrol
  </Text>
                  <Button
                     icon={<Icon name='local-activity' color='#ffffff' />}
                     buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                     title='VIEW NOW' />

               </Card>
               <Card style={{ backgroundColor: "blue" }}>
                  <Card.Title>Chess</Card.Title>
                  <Card.Divider />
                  <Image source={require('../Components/Activities/Images/chess.jpg')} style={styles.image} />
                  <Text style={{ marginBottom: 10 }}>
                     Learn the basics of chess.
</Text>
                  <Button
                     icon={<Icon name='dashboard' color='#ffffff' />}
                     buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                     title='VIEW NOW' />
               </Card>
               <Card>
                  <Card.Title>Italian Cooking</Card.Title>
                  <Card.Divider />
                  <Image source={require('../Components/Activities/Images/cooking.jpg')} style={styles.image} />
                  <Text style={{ marginBottom: 10 }}>
                     Offering lessons in how to cook homemade pasta, pizza and bruschetta.
</Text>
                  <Button
                     icon={<Icon name='local-pizza' color='#ffffff' />}
                     buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                     title='VIEW NOW' />
               </Card>
               <Card>
                  <Card.Title>Golf</Card.Title>
                  <Card.Divider />
                  <Image source={require('../Components/Activities/Images/golf.jpg')} style={styles.image} />
                  <Text style={{ marginBottom: 10 }}>
                     Offering Golf lessons at Albertslund, I have greencard and permission to bring 2 people.
</Text>
                  <Button
                     icon={<Icon name='golf-course' color='#ffffff' />}
                     buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                     title='VIEW NOW' />
               </Card>
            </ScrollView>
         </ImageBackground>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#21164e"
   },
   card: {
      backgroundColor: '#21164e'
   },
   root: {
      flex: 1,
      backgroundColor: "rgb(255,255,255)"
   },
   group: {
      height: 55,
      backgroundColor: "#21164e",
      flexDirection: "row",
      marginTop: 25
   },
   image: {
      width: 350,
      height: 150,

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
   rect2: {

   },
   rect2_imageStyle: {},

});
