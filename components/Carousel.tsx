import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import MainContainer from '../navigation/MainContainer';
import {styles} from '../styles';

const Carousel = () => {
  const data = [
    {
      image: require('../images/Gift.png'),
      title: 'Unleash the Power of Loyalty 🏆',
      description:
        'Offer Loyalty to Customers Who Love Shopping. Earning Rewards Has Never Been So Gratifying! Making custom offer is never this easy!',
    },
    {
      image: require('../images/search.png'),
      title: 'Powerful Customer Insights 📈',
      description:
        'Unravel the Magic of Insights. Understand Your Customers Better with . Data-Driven Success, Unlocked!',
    },
    {
      image: require('../images/campaign.png'),
      title: 'Campaign & Retention 📣',
      description:
        'Retain Customers with Custom Campaign, Create Tailored Campaigns That Convert your target audience to increase sales.',
    },
  ];

  const [showNewScreen, setShowNewScreen] = useState(false);

  const handleButtonPress = () => {
    setShowNewScreen(true);
  };

  return (
    <View style={{flex: 1}}>
      {showNewScreen ? (
        <MainContainer />
      ) : (
        <View style={{flex: 1, marginHorizontal: 16, marginBottom: 24}}>
          <View style={{top: 0, ...styles.justifyAlignC}}>
            <Image
              source={require('../images/waakiflogo.png')}
              style={{objectFit: 'contain', height: 150, width: 150}}
            />
          </View>
          <Swiper
            loop={false}
            dotStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              width: 8,
              height: 8,
              borderRadius: 4,
              margin: 3,
            }}
            activeDotStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              width: 8,
              height: 8,
              borderRadius: 4,
              margin: 3,
            }}>
            {data.map((item, index) => (
              <View
                key={index}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={item.image} style={{width: 300, height: 300}} />
                <View style={{}}>
                  <Text
                    style={{
                      marginVertical: 16,
                      fontWeight: '600',
                      fontSize: 24,
                      color: '#000000',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16,
                      color: '#4F4F4F',
                      textAlign: 'center',
                    }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </Swiper>
          <TouchableOpacity
            style={{
              backgroundColor: '#5775F1',
              borderRadius: 8,
              paddingVertical: 12,
              marginVertical: 16,
              ...styles.justifyAlignC,
            }}
            onPress={handleButtonPress}>
            <Text style={{fontWeight: '600', fontSize: 16, color: '#FFFFFF'}}>
              Let's Get Started
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Carousel;
