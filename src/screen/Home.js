import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MenuIcon from '../Assets/Svg/MenuIcon';
import OptionIcon from '../Assets/Svg/OptionIcon';
import ProductsCart from '../Components/ProductsCart';
import {productData} from '../Data/ProductData';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#24a8af" />
      <View style={styles.header}>
        <Animated.View entering={FadeInLeft.delay(100).duration(400)}>
          <MenuIcon />
        </Animated.View>

        <Animated.View entering={FadeInRight.delay(100).duration(400)}>
          <OptionIcon />
        </Animated.View>
      </View>
      <View style={styles.bodyContainer}>
        <Animated.Text entering={FadeInLeft.delay(200).duration(500)}>
          <Text style={styles.title}>Nikey Shoes</Text>
        </Animated.Text>
        <Animated.Text entering={FadeInLeft.delay(200).duration(500)}>
          <Text style={styles.subTitle}>Product of Your Choice</Text>
        </Animated.Text>
      </View>
      {/* <ProductsCart /> */}
      <FlatList
        data={productData}
        numColumns={2}
        contentContainerStyle={styles.contentcontainerstyle}
        keyExtractor={item => item?.id}
        renderItem={({item, index}) => (
          <Animated.View
            entering={FadeInDown.delay(index * 100)
              .duration(600)
              .springify()
              .damping(12)}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductScreen', {data: item});
              }}>
              <ProductsCart item={item} />
            </TouchableOpacity>
          </Animated.View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 6,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: '#000',
    paddingBottom: 5,
  },
  contentcontainerstyle: {
    alignItems: 'center',
  },
});
