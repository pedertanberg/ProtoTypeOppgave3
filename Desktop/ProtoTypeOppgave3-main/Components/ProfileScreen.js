import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, SafeAreaView, ProgressViewIOSComponent } from 'react-native';
import firebase from 'firebase';
import { Avatar, Caption, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Importer klassene manage bookings, oppdater interesser, oppdater info


export default class ProfileScreen extends React.Component {
    state = { profile: null};

    handleManageBookings = () => {
        //Navigerer videre til Manage Bookings
        const {navigation} = this.props;
        navigation.navigate('ManageBookings');
    };
    handleUpdateInterests = () => {
        //Navigerer videre til Manage Bookings
        const {navigation} = this.props;
        navigation.navigate('InterestScreen');
    };
    handleUpdateInfo = () => {
        //Navigerer videre til Manage Bookings
        const {navigation} = this.props;
        navigation.navigate('UpdateInfoScreen');
    };


render(){
    return (
    <ImageBackground style={styles.background}
            source={require('../assets/hei.jpg')}>
    
    <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image 
                source={require('../assets/50-cent.jpeg')}
                size={100}
                />
                <View style={{marginLeft: 20}}>
                    <Title style={styles.title, {
                        marginTop: 15,
                        marginBottom: 5,
                    }}> Markus Barkus </Title>
                    <Caption style={styles.caption}> Jeg elsker fotball  </Caption>
                </View>
            </View>
        </View>
        
        <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#2f4f4f" size={20}/>
          <Text style={{color:"#2f4f4f", marginLeft: 20}}> Norge!!! </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#2f4f4f" size={20}/>
          <Text style={{color:"#2f4f4f", marginLeft: 20}}> 22 22 22 22 </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#2f4f4f" size={20}/>
          <Text style={{color:"#2f4f4f", marginLeft: 20}}> markus@barkus.com </Text>
        </View>
      </View>
      <View style={styles.borderLine} />

<TouchableOpacity>
    <View style={styles.buttonSection}>
        <Button onPress={this.handleManageBookings}
        style={styles.button}
        title="Manage bookings"
        />
        
        <Button onPress={this.handleUpdateInterests}
        style={styles.button}
        title="Update your interests"
        />
        
        <Button onPress={this.handleUpdateInfo}
        style={styles.button}
        title="Update personal information"
        />  
    </View>
</TouchableOpacity>    
</SafeAreaView>
</ImageBackground>

        )
    }
}


const styles = StyleSheet.create({
    buttonSection: {
        width: '80%',
        height: '70%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 50,
        marginBottom: 100,
        color: '#2f4f4f'
    },
    borderLine: {
        borderWidth: 0.5,
        borderColor: '#2f4f4f',
        margin: 10,

    },
    background: {
        flex: 1,
    },
    button: {
        color: '#2f4f4f',
        paddingVertical: 12, 
        paddingHorizontal: 25, 
        borderRadius: 25,
    },
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
  });