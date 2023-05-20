import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

function SearchItem(): JSX.Element {
  return (
    <View style={styles.searchWrap}>
      <TouchableOpacity style={styles.imageWrap}>
        <Image
          source={require('../../../assets/images/github-mark.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.nicknameWrap}>
        <Text style={styles.text}>kwkang</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrap: {
    width: 42,
    height: 42,
    marginRight: 10,
  },
  image: {
    width: 42,
    height: 42,
  },
  nicknameWrap: {
    flexDirection: 'row',
  },
  text: {
    letterSpacing: -1,
    fontSize: 14,
  },

  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

export default SearchItem;
