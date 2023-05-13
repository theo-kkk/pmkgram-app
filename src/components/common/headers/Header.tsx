import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Heart} from '../svg/Heart';
import {Airplane} from '../svg/Airplane';

function Header(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.wrap}>
        <View>
          <Image
            source={require('../../../../assets/images/logo/loginLogo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={styles.iconWrap}>
          <TouchableOpacity>
            <Heart width={22} height={22} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Airplane width={22} height={22} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 60,
  },
  iconWrap: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
});

export default Header;
