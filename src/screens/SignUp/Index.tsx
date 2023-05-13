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

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

function SignUpScreen({navigation}: Props): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  const refInput = useRef(null);

  const onSubmit = (data: any) => Alert.alert(JSON.stringify(data));

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
              placeholderTextColor={'#aaa'}
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
              placeholderTextColor={'#aaa'}
            />
          )}
          name="password"
        />
        {errors.email && <Text style={styles.errorText}>필수 항목입니다.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="닉네임"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              ref={refInput}
              style={styles.input}
              blurOnSubmit={false}
              onSubmitEditing={handleSubmit(onSubmit)}
              placeholderTextColor={'#aaa'}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={styles.errorText}>필수 항목입니다.</Text>
        )}
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text style={styles.button}>회원가입</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SignInWrap}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.SignInText}>이미 계정이 있으신가요?</Text>
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
  SignInWrap: {
    position: 'absolute',
    bottom: 10,
  },
  SignInText: {
    color: '#3f99ed',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SignUpScreen;
