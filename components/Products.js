import React, { Component } from 'react';
import { View,Text,StyleSheet, Button} from 'react-native';

class Products extends Component {

        renderProducts=(products)=>{
            return products.map((item,index)=>{
                return(
                    <View key={index} style={{padding:20}}>
                        <Button onPress={()=>alert('added to cart')}
                        title={item.name+' - ' +item.price}/>
                    </View>
                )
            })
        }

    render() { 

        return (
          <View>
              {this.renderProducts(this.props.products)}
          </View>
        )
    }
}

export default Products;