import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import {createStackNavigator} from 'react-navigation'; 


class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Button title='Electronics' 
                        onPress={()=> this.props.navigation.navigate('Electronics')}/>
                <Button title='Books' 
                        onPress={()=> this.props.navigation.navigate('Books')}/>

            
            </View>
            // <AppStackNavigator/>
        );
    }
}


export default HomeScreen;

