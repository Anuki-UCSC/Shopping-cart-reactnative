import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation'; 
import {books} from '../data';
import Products from '../components/Products';

class BooksScreen extends Component {
    render() {
        return (
            <View>
                <Products products={books}></Products>
            </View>
            // <AppStackNavigator/>
        )
    }
}


export default BooksScreen;


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:"center",
    }
})