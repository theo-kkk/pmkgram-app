import React, {useRef} from 'react';
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {RootStackParamList} from '../../../App';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {setData} from '../../modules/Storage';
import RNRestart from 'react-native-restart';
import {login} from '../../lib/api/auth';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function LoginScreen({navigation}: Props): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const refInput = useRef(null);

  const onSubmit = async (data: {email: string; password: string}) => {
    const response = await login(data);

    if (
      response.status &&
      response.data &&
      'access_token' in response.data &&
      'refresh_token' in response.data
    ) {
      setData('accessToken', response.data.access_token);
      setData('refreshToken', response.data.refresh_token);
      Alert.alert('로그인', response.message, [
        {
          text: '확인',
          onPress: () => {
            RNRestart.restart();
          },
        },
      ]);
    } else {
      Alert.alert('로그인', response.message, [
        {
          text: '확인',
        },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar barStyle="default" />
      <View style={styles.imageWrap}>
        <Image
          source={require('../../../assets/images/logo/loginLogo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.formWrap}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="이메일"
              autoFocus={true}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={() => {
                if (refInput.current) {
                  refInput.current?.focus();
                }
              }}
              blurOnSubmit={false}
              value={value}
              style={styles.input}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.errorText}>필수 항목입니다.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="패스워드"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              ref={refInput}
              secureTextEntry={true}
              style={styles.input}
              blurOnSubmit={false}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
          name="password"
        />
        {errors.email && <Text style={styles.errorText}>필수 항목입니다.</Text>}
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text style={styles.button}>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpWrap}>
        <Text style={styles.signUpText}>계정이 없으세요?</Text>
        <TouchableOpacity>
          <Text
            style={[styles.signUpText, styles.signUpButton]}
            onPress={() => navigation.navigate('SignUp')}>
            회원가입하기
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
    backgroundColor: '#fff',
  },
  imageWrap: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    // flex: 1,
    width: 200,
    // height: 100,
  },
  input: {
    marginBottom: 10,
    borderColor: '#e6e6e6',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  formWrap: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3f99ed',
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    textAlign: 'center',
  },
  errorText: {
    marginBottom: 5,
  },
  signUpWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    letterSpacing: -0.5,
    marginLeft: 10,
  },
  signUpButton: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
