import {Button, SafeAreaView, Text} from 'react-native';
import React from 'react';

import useAuth from '../../hooks/useAuth';

function MyPageScreen(): JSX.Element {
  const {logout} = useAuth();
  return (
    <SafeAreaView style={{paddingVertical: 10}}>
      <Text>마이페이지</Text>
      <Button onPress={logout} title="로그아웃" />
    </SafeAreaView>
  );
}

export default MyPageScreen;
