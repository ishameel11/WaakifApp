import {
  View,
  Text,
  Alert,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import TopBar from '../../components/TopBar';
import SearchInput from '../../components/SearchInput';
import {TextInput} from 'react-native-paper';
import {styles} from '../../styles';
import FoodOption from '../../components/FoodOption';

export default function OffersScreen({navigation}) {
  return (
    <View style={{...styles.flex, backgroundColor: '#5775F1'}}>
      <TopBar />
      <ScrollView>
        <FoodOption />
      </ScrollView>
    </View>
  );
}
