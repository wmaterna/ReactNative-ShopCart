import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList , Button} from 'react-native';
import ProductItem from './ProductItem';


export default function HomeScreen({navigation}){

 const [products, setProducts] = useState();
 const getData = () => {
    fetch('http://localhost:8080/products', 
      {mathod: 'GET'}).then((respo) => respo.json())
      .then((respoJson) => {
        console.log(respoJson)
        setProducts(respoJson)
      })
      .catch((error) => {
        console.log(error)
      })
  }
 useEffect(() => {
    getData()
 },[])

  return (
    
    <View style={styles.page}>
    <Button title="Cart" onPress={() => navigation.navigate('Cart')}></Button>
    <FlatList
            data={products}
            renderItem={({item}) => <ProductItem item={item} isCart={false}/>}
        />
    </View>
  );
}


const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
