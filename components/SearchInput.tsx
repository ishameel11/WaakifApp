import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TextInput, IconButton} from 'react-native-paper';
import {styles} from '../styles';

const SearchInput = ({placeholder, onSearch}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View
      style={{
        ...styles.flexDirectionR,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20, // Adjust the radius to make it more or less rounded
        padding: 10,
      }}>
      {/* <Image source={{uri: 'search1.png'}} style={styles.searchIcon} /> */}
      <TextInput
        style={{flex: 1}}
        placeholder="Search"
        left={<TextInput.Icon name="search" color="black" />}
        onChangeText={text => setSearchText(text)}
      />
    </View>
  );
};

export default SearchInput;
