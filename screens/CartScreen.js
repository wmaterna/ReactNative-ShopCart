import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {CartStateContext} from "../context/cartContext";

export default function CartScreen({ navigation }){
  const {items, addItem} = useContext(CartStateContext)
  return (
    <View style={styles.page}>
    <FlatList
            data={items}
            renderItem={({item}) => <ProductItem item={item} isCart={true} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
