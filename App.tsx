import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login/Index';
import SignUpScreen from './src/screens/SignUp/Index';
import BackHeader from './src/components/common/headers/BackHeader';
import MainScreen from './src/screens/Main/Index';
import useUser from './src/hooks/useUser';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPageScreen from './src/screens/Mypage/Index';
import Header from './src/components/common/headers/Header';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  TabNavigator: undefined;
};

export type RootTabParamList = {
  Main: undefined;
  MyPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function App() {
  const {isLogin} = useUser();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigater}
              options={{headerShown: false}}
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

const TabNavigater = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{header: () => <Header />}}
      />
      <BottomTab.Screen name="MyPage" component={MyPageScreen} />
    </BottomTab.Navigator>
  );
};

export default App;
