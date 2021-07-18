import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation'; 
import HomeScreen from '../containers/HomeScreen';
import ElectronicScreen from '../containers/ElectronicScreen';
import BooksScreen from '../containers/BookScreen';
import ShoppingCartIcon from '../containers/ShoppingCartIcon';


class ShoppingCart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Shopping cart page is running, appnavigator below</Text>
                <AppStackNavigator/>
                {/* why this doesn't display when text tag removed? */}
            </View>
            
        )
    }
}


export default ShoppingCart;

const AppStackNavigator=createStackNavigator({
    Home:HomeScreen,
    Electronics:ElectronicScreen,
    Books:BooksScreen
},{
    navigationOptions:{
        headerTitle:"shopping App",
        headerRight:(
            <ShoppingCartIcon/>
        )
    }
}
)

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:"center",
    }
})