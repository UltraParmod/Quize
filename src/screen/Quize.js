import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const Quize = () => {
  const [CurrentQuize, SetCurrentQuize] = useState(0);
  const quizeData = [
    {
      id: 1,
      question: 'What is the Capital of India',
      options: ['Chandigarh', 'Goa', 'Delhi', 'Shimla'],
      answer: 'Delhi',
    },
    {
      id: 2,
      question: 'Large animal in the World',
      options: ['Elephant', 'Blue Whale', 'Hippopotanum', 'Zirraf'],
      answer: 'Blue Whale',
    },
  ];
  const handAnswer = selectedAnswer => {
    const answer = quizeData[CurrentQuize]?.answer;
    if (answer === selectedAnswer) {
      Alert.alert(`Your Answer is Right `, answer, [
        {
          text: 'GO to Next question',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    } else {
      Alert.alert('Your Answer is', 'Wrong : ', [
        {
          text: 'Ok ',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    }
  };
  return (
    <ImageBackground
      source={require('./../../src/Assets/img/Quize01.jpg')}
      style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="purple" />
      <View style={styles.opacity}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.title}>Welcome to </Text>
          <Text style={[styles.title, styles.QUIZETxt]}>QUIZE</Text>
        </View>
        <View style={styles.QuizeContainer}>
          <Text
            style={{
              color: 'purple',
              fontSize: 18,
              fontWeight: '700',
              marginBottom: 25,
            }}>
            Que. {quizeData[CurrentQuize]?.question}
          </Text>
          {quizeData[CurrentQuize]?.options.map(item => {
            return (
              <TouchableOpacity onPress={() => handAnswer(item)}>
                <Text style={{color: '#fff', fontSize: 16, marginVertical: 5}}>
                  {' '}
                  &#9679; &nbsp; {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Quize;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  opacity: {
    width: '100%',
    borderWidth: 5,
    backgroundColor: 'rgba(0,0,0,.8)',
    flex: 1,
    justifyContent: 'center',
  },
  QuizeContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    marginLeft: 20,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginTop: -120,
  },
  QUIZETxt: {
    textAlign: 'left',
    color: 'purple',
    fontWeight: '900',
  },
});
