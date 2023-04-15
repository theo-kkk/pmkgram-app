import {useEffect, useState} from 'react';
import {getData} from '../modules/Storage';

function useUser() {
  const [isLogin, setIsLogin] = useState(false);
  const getLogin = async () => {
    const user = await getData('user');
    console.log('user', user);

    if (user !== undefined) {
      setIsLogin(true);
    }
  };
  useEffect(() => {
    getLogin();
  }, []);

  return {isLogin};
}

export default useUser;
