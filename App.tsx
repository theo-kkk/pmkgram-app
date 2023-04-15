import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login/Index';
import SignUpScreen from './src/screens/SignUp/Index';
import BackHeader from './src/components/common/BackHeader';
import {useEffect, useState} from 'react';
import {getData} from './src/modules/Storage';
import MainScreen from './src/screens/Main/Index';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const getLogin = async () => {
    const user = await getData('user');
    if (user !== undefined) {
      setIsLogin(true);
    }
  };
  useEffect(() => {
    getLogin();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{headerShown: true, title: 'Home'}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                header: props => <BackHeader {...props} />,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
