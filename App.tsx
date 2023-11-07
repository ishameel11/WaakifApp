import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Carousel from './components/Carousel';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainContainer from './navigation/MainContainer';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Carousel />
    </View>
  );
}

export default App;
