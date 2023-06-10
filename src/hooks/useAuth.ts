import {Alert} from 'react-native';
import {logout} from '../lib/api/auth';
import {removeData} from '../modules/Storage';
import RNRestart from 'react-native-restart';

function useAuth() {
  const logoutOnPress = async () => {
    await removeData('accessToken');
    await removeData('refreshToken');
    RNRestart.restart();
  };
  const logoutFn = async () => {
    const res = await logout();

    if (res.status) {
      Alert.alert('로그아웃', '로그아웃 되었습니다.', [
        {
          text: '확인',
          onPress: async () => {
            await logoutOnPress();
          },
        },
      ]);
    } else {
      Alert.alert('로그아웃', '잠시후 다시 이용해주세요.', [
        {
          text: '확인',
          onPress: async () => {
            await logoutOnPress();
          },
        },
      ]);
    }
  };
  return {logout: logoutFn};
}

export default useAuth;
