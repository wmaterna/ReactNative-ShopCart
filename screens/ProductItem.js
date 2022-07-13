import React, {useContext} from 'react';
import {Image, View, Text, Pressable, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import {CartStateContext} from "../context/cartContext";

export default function ProductItem(props){
  const {items, addItem} = useContext(CartStateContext)
  return (
    <Pressable style={styles.root}>
      <Image style={styles.image} source={{uri: props.item.url}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>
          {props.item.name}
        </Text>
        <Text style={styles.price}>
          Price: ${props.item.price.toFixed(2)}
        </Text>
        {
          !props.isCart &&
          <Button title="Add to cart" onPress={()=>addItem(props.item)}/>
        }
       
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
      },
      image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
      },
      rightContainer: {
        padding: 10,
        flex: 3,
      },
      title: {
        fontSize: 18,
      },
      price: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
      },
      star: {
        margin: 2,
      }
  });
