import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';


const ProductsCart = ({item}) => {
  return (
    <View style={styles.mainBox}>
      <Text>Brand Of india </Text>
      <Animated.Image sharedTransitionTag={`T${item.id}`} style={styles.mainImg} source={item.thumbnail} />

      <Text style={styles.price}>
        {' '}
        <Text style={styles.currency}> $</Text>
        {item.price}
      </Text>
      <Text style={styles.title}>Rating : {item.rating}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default ProductsCart;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  mainImg: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 16,
    color: '#323232',
    fontWeight: 'bold',
  },
  currency: {
    color: '#24a8af',
  },
  title: {
    fontSize: 16,
    color: '#323232',
    fontWeight: 'bold',
  },
});
