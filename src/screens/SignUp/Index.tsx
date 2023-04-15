import {SafeAreaView, Text} from 'react-native';

function SignUpScreen({navigation}: any): JSX.Element {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>SignUp</Text>
    </SafeAreaView>
  );
}

export default SignUpScreen;
