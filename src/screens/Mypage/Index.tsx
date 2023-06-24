import {Alert, Button, Platform, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS} from 'react-native-permissions';

import useAuth from '../../hooks/useAuth';
import permission from '../../modules/Permission';
import _ from 'lodash';
import {upload} from '../../lib/api/image';

function MyPageScreen(): JSX.Element {
  const {logout} = useAuth();

  const addImage = async () => {
    await permission(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.CAMERA,
    );

    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result.errorCode && result.errorCode === 'camera_unavailable') {
      Alert.alert('카메라 접근', '사용할수 없는 기기 입니다.', [
        {
          text: '확인',
        },
      ]);
    }

    const formData = new FormData();

    _.forEach(result.assets, image => {
      formData.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
    });

    const uploadResult = await upload(formData);

    // TODO: 내정보 페이지에 들어갈 부분 처리 필요.
    console.log(uploadResult);
  };
  return (
    <SafeAreaView style={{paddingVertical: 10}}>
      <Text>마이페이지</Text>
      <Button onPress={logout} title="로그아웃" />
      <Button onPress={addImage} title="이미지 업로드" />
    </SafeAreaView>
  );
}

export default MyPageScreen;
