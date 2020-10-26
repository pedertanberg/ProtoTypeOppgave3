import * as React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const users = [
   {
      name: 'brynn',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
   },
   // more users here
];


export default function () {

   return (
      <ScrollView>
         <Card>
            <Card.Title>Football</Card.Title>
            <Card.Divider />
            <Image source={require('../Components/Activities/Images/football.jpg')} style={styles.image} />
            <Text style={{ marginBottom: 10 }}>
               Former professional offering lessons in speed, agility and ballcontrol
  </Text>
            <Button
               icon={<Icon name='code' color='#ffffff' />}
               buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
               title='VIEW NOW' />

         </Card>
         <Card>
            <Card.Title>Chess</Card.Title>
            <Card.Divider />
            <Image source={require('../Components/Activities/Images/chess.jpg')} style={styles.image} />
            <Text style={{ marginBottom: 10 }}>
               Learn the basics of chess.
</Text>
            <Button
               icon={<Icon name='code' color='#ffffff' />}
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
               icon={<Icon name='code' color='#ffffff' />}
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
               icon={<Icon name='code' color='#ffffff' />}
               buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
               title='VIEW NOW' />
         </Card>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#21164e"
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

   }
});