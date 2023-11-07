import {View, Text, Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {styles} from '../styles';

const TopBar = () => {
  return (
    <View
      style={{
        ...styles.flexDirectionR,
        width: '100%',
        justifyContent: 'space-between',
        paddingTop: 52,
        paddingHorizontal: 20,
      }}>
      <View style={{...styles.flexDirectionC, alignItems: 'center'}}>
        <Image
          style={{marginTop: 6}}
          source={require('../images/logoWhite.png')}
        />
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../images/location.png')} />
          <Text style={{color: 'white', ...styles.fontSize12}}>Bangalore</Text>
        </View>
      </View>
      <View style={{...styles.flexDirectionR, alignItems: 'center', gap: 10}}>
        <Button style={{marginTop: 6}}>
          <Image source={require('../images/coin.png')} />
        </Button>
        <View style={{...styles.flexDirectionR, alignItems: 'center', gap: 10}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../images/scanner.png')}
          />
          <Image
            style={{width: 20, height: 20}}
            source={require('../images/bell.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default TopBar;
