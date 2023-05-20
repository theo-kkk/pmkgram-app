import React, {useCallback, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchItem from '../../components/search/SearchItem';
import {setData} from '../../modules/Storage';
import RNRestart from 'react-native-restart';

interface Search {
  name: string;
}

function SearchScreen(): JSX.Element {
  const {control, handleSubmit, reset, watch} = useForm<Search>({
    defaultValues: {name: ''},
  });
  const name = watch('name');

  // const onSubmit = useCallback((data: {name: string}) => {
  //   Alert.alert('검색완료', '검색', [
  //     {
  //       text: data.name,
  //     },
  //   ]);
  // }, []);
  // useEffect(() => {
  //   handleSubmit(onSubmit);
  // }, [handleSubmit, name, onSubmit]);

  return (
    <SafeAreaView style={styles.androidWrap}>
      <View style={styles.wrap}>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'검색'}
              autoFocus={true}
              onBlur={onBlur}
              onChangeText={onChange}
              style={styles.searchInput}
              value={value}
            />
          )}
          name="name"
        />
        {name.length > 0 && (
          <TouchableOpacity onPress={() => reset()} style={styles.resetButton}>
            <Text>취소</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <FlatList data={[...Array(5)]} renderItem={SearchItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#ddd',
    paddingHorizontal: 5,
    borderRadius: 10,
    flex: 1,
    height: 45,
  },
  resetButton: {
    paddingHorizontal: 5,
  },
  androidWrap: {
    paddingTop: 10,
  },
});

export default SearchScreen;
