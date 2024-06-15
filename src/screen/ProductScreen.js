import {
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {DarkTheme, useNavigation, useRoute} from '@react-navigation/native';
import BackIcon from '../Assets/Svg/BackIcon';
import HeartIcon from '../Assets/Svg/HeartIcon';
import {SuggestedProducts} from '../Data/SuggestedProducts';
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';


const ProductScreen = () => {
  const {params} = useRoute();
  const {goBack} = useNavigation();
  const navigation = useNavigation();

  const [isFav, setIsFav] = useState(false);
  const data = params?.data;


  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="lightgrey" />
      <View style={styles.greyBackgroung}>
        <View style={styles.iconContainer}>
          <Animated.View entering={FadeInLeft.delay(200).duration(500)}>

        
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => {
              goBack();
            }}>
            <BackIcon />
          </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInRight.delay(200).duration(500)}>

          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => setIsFav(!isFav)}>
            <HeartIcon isFav={isFav} />
          </TouchableOpacity>
          </Animated.View >

        </View>
        <Animated.Image sharedTransitionTag={`T${data.id}`} source={data.thumbnail} style={styles.productImg} />
      </View>
      <View>
        <View style={styles.productcontainer}>
          <Animated.Text entering={FadeInLeft.delay(200).duration(500)} style={[styles.productTxt, styles.priceTxt]}>{data.title}</Animated.Text>
          <Text style={styles.productTxt}>{data.description}</Text>
          <Animated.Text entering={FadeInRight.delay(200).duration(500)} style={[styles.productTxt, styles.star]}>
            ★ ★ ★ ★ {data.rating}
          </Animated.Text>
          <Animated.Text entering={FadeInRight.delay(200).duration(500)} style={[styles.productTxt, styles.priceTxt]}>
            {' '}
            <Text style={{color: '#24a8af'}}>$ </Text> {data.price}
          </Animated.Text>

          
        </View>
      </View>
      <TouchableOpacity
        style={styles.shopBtn}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: '#000', fontWeight: '700'}}>Shop Now</Text>
      </TouchableOpacity>
      
          <Text style={{color:'#000',fontSize:20,fontWeight:'700',marginLeft:20}}>Suggested Products</Text>
          <View  style={{flexDirection:'row'}}>
      {SuggestedProducts.map((value, index) => {
        return (
            <Animated.View entering={FadeInDown.delay(200).duration(500)} key={value?.id.toString()} style={{marginLeft:10,alignItems:'center'}}>
            <Image source={value.thumbnail} style={styles.SuggestedImg} />
            <Text style={styles.suggestedtext}>{value.title}</Text>
            </Animated.View>
        );
      })}
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  greyBackgroung: {
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 50,
    backgroundColor: 'lightgray',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 9,
    elevation: 5,
  },
  productImg: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
    marginTop: -70,
    alignSelf: 'center',
  },
  productcontainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  productTxt: {
    marginVertical: 5,
    color: '#000',
  },
  priceTxt: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  SuggestedImg: {
    marginVertical: 10,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 25,
    backgroundColor: '#24a8af',
    marginRight: 10,
  },
  star: {
    color: 'red',
    fontSize: 16,
  },
  shopBtn: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#24a8af',
    margin: 10,
    marginTop: 20,
  },
  suggestedtext:{
    color:'#000'
  }
});
