import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const SplaceScreen = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);
  return (
    <View style={styles.container}>
      <LottieView
        style={{width: 350, height: 350}}
        source={require('../../src/Assets/Animactions/ToAnimaction.json')}
        autoPlay
        loop
      />
      <View style={{marginVertical: 100}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'darkred'}}>
          The Big Brand OF India
        </Text>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          textDecorationLine: 'underline',
        }}>
        The Nikey
      </Text>
    </View>
  );
};

export default SplaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24a8af',
  },
});
