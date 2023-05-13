import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {removeData} from '../../modules/Storage';
import RNRestart from 'react-native-restart';
import {Menu} from '../../components/common/svg/Menu';
import {Heart} from '../../components/common/svg/Heart';
import {SpeechBubble} from '../../components/common/svg/SpeechBubble';
import {Airplane} from '../../components/common/svg/Airplane';
import {BookMark} from '../../components/common/svg/BookMark';
import FeedItem from '../../components/feed/FeedItem';

function MainScreen(): JSX.Element {
  const deleteUser = async () => {
    await removeData('user');
    RNRestart.restart();
  };
  return (
    <SafeAreaView style={{paddingVertical: 10}}>
      <FlatList data={[...Array(5)]} renderItem={FeedItem} />
    </SafeAreaView>
  );
}

export default MainScreen;
