import * as React from "react";
   import { View, Text, Image } from 'react-native'
   import { Card, ListItem, Button, Icon } from 'react-native-elements';

   const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
     // more users here
   ];
   

export default function() {

return(
<Card>
  <Card.Title>HELLO WORLD</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../Components/Activities/Images/dinho.jpeg')} />
  <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
)
}