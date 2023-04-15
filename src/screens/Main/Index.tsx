import {View, Text, Button} from 'react-native';
import React from 'react';
import {removeData} from '../../modules/Storage';
import RNRestart from 'react-native-restart';

function MainScreen(): JSX.Element {
  const deleteUser = async () => {
    await removeData('user');
    RNRestart.restart();
  };
  return (
    <View>
      <Text>123123</Text>
      <Button onPress={deleteUser} title={'삭제'} />
    </View>
  );
}

export default MainScreen;
