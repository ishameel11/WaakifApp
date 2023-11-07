import {View, Text, Alert} from 'react-native';
import React from 'react';
import {styles} from '../../styles';

export default function ProfileScreen({navigation}) {
  return (
    <View style={(styles.flex, styles.justifyAlignC)}>
      <Text onPress={() => navigation.navigate('Home')}>Setting Screen</Text>
    </View>
  );
}
