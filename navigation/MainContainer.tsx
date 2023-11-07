import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OffersScreen from './screens/OffersScreen';
import ProfileScreen from './screens/ProfileScreen';
import {styles} from '../styles';

const carouselName = 'Carousel';
const offersName = 'Offers';
const ProfileName = 'Profile';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTransparent: true,
          headerShadowVisible: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === offersName) {
              iconName = focused
                ? require('../images/offers.png')
                : require('../images/profile.png');
            } else if (rn === ProfileName) {
              iconName = focused
                ? require('../images/offers.png')
                : require('../images/profile.png');
            }
            return (
              <Image
                source={iconName}
                style={{resizeMode: 'contain', height: 30, width: 30}}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5775F1',
          inactiveTintColor: 'grey',
          labelStyle: {
            paddingBottom: 10,
            fontSize: 11,
            fontWeight: '500',
            ...styles.justifyAlignC,
          },
          style: {
            padding: 10,
            height: 70,
          },
        }}>
        <Tab.Screen
          name={offersName}
          options={({navigation, route}) => ({
            headerTitle: '',
          })}
          component={OffersScreen}
        />
        <Tab.Screen
          name={ProfileName}
          options={({navigation, route}) => ({
            headerTitle: '',
          })}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
