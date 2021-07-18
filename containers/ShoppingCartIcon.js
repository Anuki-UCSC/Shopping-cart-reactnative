import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const ShoppingCartIcon = (props) => {
    return (
        <View>
            <View>
                <Text>5</Text>
            </View>
            <Ionicons name="ios-cart" size={30}/>
            {/* <Text>shoppingcart Icon</Text> */}
        </View>
    )
}

export default ShoppingCartIcon;
