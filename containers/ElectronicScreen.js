import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation'; 
import {electronics} from '../data';
import Products from '../components/Products';

class ElectronicScreen extends Component {
    static navigationOptions={
        headerTitle :"Electronics"
    }

    render() {
        return (
            <View>
                <Products products={electronics}></Products>
            </View>
            // <AppStackNavigator/>
        )
    }
}


export default ElectronicScreen;


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:"center",
    }
})