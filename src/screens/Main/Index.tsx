import {FlatList, Platform, SafeAreaView, Text} from 'react-native';
import React from 'react';

import FeedItem from '../../components/feed/FeedItem';
import {useQuery} from 'react-query';
import {common} from '../../lib/api/common';

function MainScreen(): JSX.Element {
  const {data, isError, error} = useQuery(['base'], common);

  console.log(Platform.OS, isError);
  return (
    <SafeAreaView style={{paddingVertical: 10}}>
      {/* <Text>{error ? JSON.stringify(error) : JSON.stringify(data)}</Text> */}
      <FlatList data={[...Array(5)]} renderItem={FeedItem} />
    </SafeAreaView>
  );
}

export default MainScreen;
