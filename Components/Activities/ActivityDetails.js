
import * as React from 'react';
import { View, Text, Platform,ImageBackground, FlatList, StyleSheet, Button, Alert } from 'react-native';
import firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import HeaderX from "./HeaderX";

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};
const styles = StyleSheet.create({
    rect2: {
        flex: 1
      },
      rect2_imageStyle: {},
      progressBar: {
        height: 40,
        flexDirection: "row",
        marginLeft: 28,
        marginRight: 28
      },
    container: { flex: 1, justifyContent: 'flex-start', backgroundColor:"rgb(27,29,37)"},
    row: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
    },
    label: { width: 100, fontWeight: 'bold', color:"white",fontSize:15 },
    value: { flex: 1 ,color:"white"},
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
      }
});

export default class ActivityDetails extends React.Component {
    state = { activity: null };

    componentDidMount() {
        // Vi udlæser ID fra navgation parametre og loader bilen når komponenten starter
        const id = this.props.navigation.getParam('id');
        this.LoadActivity(id);
    }

    LoadActivity = id => {
        firebase
            .database()
            // ID fra funktionens argument sættes ind i stien vi læser fra
            .ref('/activit/'+id)
            .on('value', asds => {
                this.setState({ activity: asds.val() });
            });
    };

    handleEdit = () => {
        // Vi navigerer videre til EditActivity skærmen og sender ID med
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        navigation.navigate('EditActivity', { id });
    };

    confirmDelete = () => {
        if(Platform.OS ==='ios' || Platform.OS ==='android'){
            Alert.alert('Are you sure?', 'Do you want to delete the Activity?', [
                { text: 'Cancel', style: 'cancel' },
                // Vi bruger this.handleDelete som eventHandler til onPress
                { text: 'Delete', style: 'destructive', onPress: this.handleDelete },
            ]);
        } else {
            if(confirm('Er du sikker på du vil slette denne aktivitet?')){
                this.handleDelete()
            }
        }
    };

    // Vi spørger brugeren om han er sikker

    // Vi sletter den aktuelle bil
    handleDelete = () => {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        try {
            firebase
                .database()
                // Vi sætter bilens ID ind i stien
                .ref(`/activit/${id}`)
                // Og fjerner data fra den sti
                .remove();
            // Og går tilbage når det er udført
            navigation.goBack();
        } catch (error) {
            Alert.alert(error.message);
        }

    };

    render() {
        const { activity } = this.state;
        if (!activity) {
            return <Text>No data</Text>;
        }
        return (
            <View style={styles.container}>
                <HeaderX
        icon2Family="Feather"
        icon2Name="search"
        style={styles.headerX}
      ></HeaderX>
       <ImageBackground
            style={styles.rect2}
            imageStyle={styles.rect2_imageStyle}
            source={require("../Login//luke-chesser-3rWagdKBF7U-unsplash.jpg")}
          >

                <Button title="Edit" onPress={this.handleEdit} />
                <Button title="Delete" onPress={this.confirmDelete} />
                <View style={styles.row}>
                    <Text style={styles.label}>Price</Text>
                    <Text style={styles.value}>{activity.price}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Activity</Text>
                    <Text style={styles.value}>{activity.activity}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Header</Text>
                    <Text style={styles.value}>{activity.header}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.value}>{activity.description}</Text>
                </View>
                </ImageBackground>
            </View>
        );
    }
}
