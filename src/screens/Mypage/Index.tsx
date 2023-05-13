import {Button, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {removeData} from '../../modules/Storage';
import RNRestart from 'react-native-restart';

function MyPageScreen(): JSX.Element {
  const deleteUser = async () => {
    await removeData('user');
    RNRestart.restart();
  };
  return (
    <SafeAreaView style={{paddingVertical: 10}}>
      <Text>마이페이지</Text>
      <Button onPress={deleteUser} title="로그아웃" />
    </SafeAreaView>
  );
}

export default MyPageScreen;
