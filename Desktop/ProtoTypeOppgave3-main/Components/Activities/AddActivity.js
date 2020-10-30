import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';
import HeaderX from "./HeaderX";


const styles = StyleSheet.create({
    
    container: { 
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 16, },
    
    row: { 
        flexDirection: 'row', 
        height: 30, 
        margin: 10 },
    
    label: { 
        fontWeight: 'bold', 
        width: 100 },
    
    input: { 
        borderWidth: 1, 
        flex: 1 },

    background: {
        flex: 1,
    },
    button: {
        position: 'absolute',
        bottom: 10,
    }
    
});



export default class AddActivityScreen extends React.Component {
    state = {header: "", price: "", description: "", category: "" };

    //Her må noe endres for at det skal kunne sendes til database, onChangeItem og text til item
handleHeaderChange = (text) => this.setState({header: text});
handlePriceChange = (text) => this.setState({price: text});
handleDescriptionChange = (text) => this.setState({description: text});
handleCategoryChange = (items) => this.setState({category: items});

//Lagrer den intastede informasjon i Firebase Database
handleSave = () => {
    const { header, price, description, category } = this.state;
    try {
        const reference = firebase
        .database()
        .ref("/activit/")
        .push({ header, price, description, category })

        Alert.alert('Saved');
        this.setState({
            header: "",
            price: "",
            description: "",
            category: "",
        });
    } catch (error) {
        Alert.alert('Error');
    }
};

render () {
    const { header, price, description, category } = this.state;

    return (
    <ImageBackground style={styles.background}
    source={require('../Login/luke-chesser-3rWagdKBF7U-unsplash.jpg')}>
        <SafeAreaView style={styles.container}>
            <ScrollView>
          
          <HeaderX
            icon2Family="Feather"
            icon2Name="search"
            style={styles.headerX}>
          </HeaderX>
                
                <View style={styles.row}>
                    <Text style={styles.label}> Header </Text>
                    <TextInput 
                    value={header}
                    onChangeText={this.handleHeaderChange}
                    style={styles.input}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}> Price </Text>
                    <TextInput 
                    value={price}
                    onChangeText={this.handlePriceChange}
                    style={styles.input}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}> Description </Text>
                    <TextInput 
                    value={description}
                    onChangeText={this.handleDescriptionChange}
                    style={styles.input}
                    />

                </View>
                <View style={styles.row}>
                    
                    <Text style={styles.label}> Category </Text>
                    <DropDownPicker
                        items={[
                            {label: 'Academics', value: 'academics', icon: () => <Entypo name="book" size={18} color="#900" />},
                            {label: 'Action', value: 'action', icon: () => <MaterialCommunityIcons name="car-traction-control" size={18} color="#900" />},
                            {label: 'Food', value: 'food', icon: () => <MaterialCommunityIcons name="food" size={18} color="#900" />},
                            {label: 'Handcraft', value: 'handcraft', icon: () => <MaterialCommunityIcons name="hand-saw" size={18} color="#900" />},
                            {label: 'Language', value: 'language', icon: () => <MaterialIcons name="language" size={18} color="#900" />},
                            {label: 'Sports', value: 'sports', icon: () => <FontAwesome name="soccer-ball-o" size={18} color="#900" />},

                        ]}
                        defaultValue={this.state.category}
                        containerStyle={{height: 40, width: 300}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#f0ffff'}}
                        onChangeItem={item => this.setState({
                            category: item.value })}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
        <Button style={styles.button} title="Add activity" onPress={this.handleSave} />
    </ImageBackground>
    );
}
}
