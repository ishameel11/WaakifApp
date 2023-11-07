import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Modal,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../styles';
import {Icon, TextInput} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const FoodOption = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const bottomSheetHeight = 700;

  const bottomSheetY = useRef(new Animated.Value(bottomSheetHeight)).current;

  const showBottomSheet = () => {
    Animated.timing(bottomSheetY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setBottomSheetVisible(true);
  };

  const hideBottomSheet = () => {
    Animated.timing(bottomSheetY, {
      toValue: bottomSheetHeight,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setBottomSheetVisible(false);
    });
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);
    // You can perform search or filtering based on the query here
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '20%',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            ...styles.flex,
            paddingBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={showBottomSheet}>
          <Text>Show Bottom Sheet</Text>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.bottomSheet,
            {
              height: bottomSheetHeight,
              transform: [{translateY: bottomSheetY}],
            },
          ]}>
          <View style={{}}>
            <TextInput
              style={{
                backgroundColor: '#F8F9FE',
                borderRadius: 15,
                borderWidth: 2,
                borderColor: 'white',
                height: 40,
                width: '100%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              placeholder="Search Name"
              left={<TextInput.Icon name="search" color="black" />}
            />

            <View
              style={{
                ...styles.flexDirectionR,
                justifyContent: 'space-between',
                marginVertical: 20,
              }}>
              <View style={styles.selectItem}>
                <Image source={{uri: 'pizza.png'}} />
                <TouchableOpacity>
                  <Text style={styles.selectItemFont}>Food</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.selectItem}>
                <Image source={{uri: 'entertain.png'}} />
                <Text style={styles.selectItemFont}>Entertainment</Text>
              </View>
              <View style={styles.selectItem}>
                <Image source={{uri: 'edu.png'}} />
                <Text style={styles.selectItemFont}>Education</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.flexDirectionR,
              flexWrap: 'wrap',
              //...styles.justifyAlignC,
            }}>
            <View>
              <Text></Text>
            </View>
            <View
              style={{
                ...styles.selectItem,
                paddingHorizontal: 0,
                paddingVertical: 0,
                backgroundColor: '#F8F9FE',
              }}>
              <Image source={require('../images/kfcFood.png')} />
              <View
                style={{
                  ...styles.flexDirectionC,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}>
                <View
                  style={{
                    ...styles.flexDirectionR,
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                  }}>
                  <Text style={styles.fontSize12}>KFC</Text>
                  <AwesomeIcon source="unlock-alt" size={20} />
                  <Text
                    onPress={openModal}
                    style={{fontSize: 12, fontWeight: '500', color: 'green'}}>
                    Unlocked
                  </Text>
                  <Modal
                    visible={modalVisible}
                    animationType="slide" // You can choose the animation type you prefer
                    transparent={true}
                    onRequestClose={closeModal}>
                    <View
                      style={{
                        ...styles.flex,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      }}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          padding: 20,
                          borderRadius: 10,
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 36,
                          }}>
                          <Image
                            style={{}}
                            source={require('../images/unlocked.png')}
                          />
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: 10,
                            }}>
                            <Text style={{fontSize: 20, fontWeight: '600'}}>
                              Unlock The Offer Now!
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: '500',
                                  color: '#4F4F4F',
                                }}>
                                Unlock the offer now for&nbsp;
                              </Text>
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: '500',
                                  color: '#5775F1',
                                }}>
                                25 Waakif Coins.
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#5775F1',
                            borderRadius: 6,
                            paddingHorizontal: 90,
                            paddingVertical: 4,
                            marginTop: 40,
                          }}>
                          <Button
                            color={'white'}
                            title="Swipe to Unlock"
                            onPress={closeModal}
                          />
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>
                <View style={{}}>
                  <Text style={styles.fontSize14}>Buy 1 Get 1</Text>
                  <Text style={styles.fontSize14}>Everything at ₹199</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                ...styles.selectItem,
                paddingHorizontal: 0,
                paddingVertical: 0,
                backgroundColor: '#F8F9FE',
              }}>
              <Image source={require('../images/Starbucks.png')} />
              <View
                style={{
                  ...styles.flexDirectionC,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}>
                <View
                  style={{
                    ...styles.flexDirectionR,
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                  }}>
                  <Text style={styles.fontSize12}>STARBUCKS</Text>
                  <AwesomeIcon source="unlock-alt" size={20} />
                  <Text style={{fontSize: 12, fontWeight: '500', color: 'red'}}>
                    Locked
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={styles.fontSize14}>Buy 1 Get 1</Text>
                  <Text style={styles.fontSize14}>Everything at ₹199</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                ...styles.selectItem,
                paddingHorizontal: 0,
                paddingVertical: 0,
                backgroundColor: '#F8F9FE',
              }}>
              <Image source={require('../images/Subway.png')} />
              <View
                style={{
                  ...styles.flexDirectionC,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}>
                <View
                  style={{
                    ...styles.flexDirectionR,
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                  }}>
                  <Text style={styles.fontSize12}>SUBWAY</Text>
                  <View></View>
                </View>
                <View style={{}}>
                  <Text style={styles.fontSize14}>Buy 1 Get 1</Text>
                  <Text style={styles.fontSize14}>Everything at ₹199</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                ...styles.selectItem,
                paddingHorizontal: 0,
                paddingVertical: 0,
                backgroundColor: '#F8F9FE',
              }}>
              <Image source={require('../images/macd.png')} />
              <View
                style={{
                  ...styles.flexDirectionC,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}>
                <View
                  style={{
                    ...styles.flexDirectionR,
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                  }}>
                  <Text style={{fontSize: 12, fontWeight: '400'}}>
                    MACDONALD's
                  </Text>
                  <View></View>
                </View>
                <View style={{}}>
                  <Text style={styles.fontSize14}>Buy 1 Get 1</Text>
                  <Text style={styles.fontSize14}>Everything at ₹199</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                ...styles.selectItem,
                paddingHorizontal: 0,
                paddingVertical: 0,
                backgroundColor: '#F8F9FE',
              }}>
              <Image source={require('../images/timhorton.png')} />
              <View
                style={{
                  ...styles.flexDirectionC,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}>
                <View
                  style={{
                    ...styles.flexDirectionR,
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                  }}>
                  <Text style={styles.fontSize12}>TIM HORTON</Text>
                  <View></View>
                </View>
                <View style={{}}>
                  <Text style={styles.fontSize14}>Buy 1 Get 1</Text>
                  <Text style={styles.fontSize14}>Everything at ₹199</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                ...styles.selectItem,
                paddingHorizontal: 0,
                paddingVertical: 0,
                backgroundColor: '#F8F9FE',
              }}>
              <Image source={require('../images/pizzahut.png')} />
              <View
                style={{
                  ...styles.flexDirectionC,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}>
                <View
                  style={{
                    ...styles.flexDirectionR,
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                  }}>
                  <Text style={{fontSize: 12, fontWeight: '400'}}>
                    PIZZA HUT
                  </Text>
                  <View></View>
                </View>
                <View style={{}}>
                  <Text style={styles.fontSize14}>Buy 1 Get 1</Text>
                  <Text style={styles.fontSize14}>Everything at ₹199</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <TouchableOpacity onPress={hideBottomSheet}>
            <Text>Close Bottom Sheet</Text>
          </TouchableOpacity> */}
          {/* <Text>content bottom sheet</Text> */}
        </Animated.View>
      </View>
    </View>
  );
};

export default FoodOption;
