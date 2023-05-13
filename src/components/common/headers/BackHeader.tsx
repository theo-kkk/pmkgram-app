import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {WithLocalSvg} from 'react-native-svg';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

function BackHeader(props: NativeStackHeaderProps): JSX.Element {
  const {
    options: {title},
  } = props;

  const natigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.wrap}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => natigation.goBack()}>
          <WithLocalSvg
            width={15}
            height={15}
            asset={require('../../../../assets/images/svg/ico_head_back.svg')}
          />
        </TouchableOpacity>
        {title && (
          <View style={styles.textWrap}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    position: 'absolute',
    zIndex: 1,
  },
  BeforeImage: {
    width: 10,
    height: 10,
  },
  wrap: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    // height: 20,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  textWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
  },
});
export default BackHeader;
