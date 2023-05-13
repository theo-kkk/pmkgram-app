import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';

import FeedItem from '../../components/feed/FeedItem';

function MainScreen(): JSX.Element {
  return (
    <SafeAreaView style={{paddingVertical: 10}}>
      <FlatList data={[...Array(5)]} renderItem={FeedItem} />
    </SafeAreaView>
  );
}

export default MainScreen;
