import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

import {Menu} from '../../components/common/svg/Menu';
import {Heart} from '../../components/common/svg/Heart';
import {SpeechBubble} from '../../components/common/svg/SpeechBubble';
import {Airplane} from '../../components/common/svg/Airplane';
import {BookMark} from '../../components/common/svg/BookMark';

function FeedItem(): JSX.Element {
  return (
    <View>
      {/* <Text>123123</Text>
    <Button onPress={deleteUser} title={'삭제'} /> */}
      <View style={styles.headWrap}>
        <View style={styles.headLeft}>
          <TouchableOpacity style={styles.imageWrap}>
            <Image
              source={require('../../../assets/images/github-mark.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
          <View>
            <View style={styles.nicknameWrap}>
              <Text style={styles.text}>강경원</Text>
              <Text style={[styles.text, styles.timeText]}>• 3시간</Text>
            </View>
            <Text>설명</Text>
          </View>
        </View>
        <View>
          <Menu />
        </View>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://intro.kwkang.dev/img/my.02d7c309.jpeg',
          }}
          resizeMode="cover"
          style={styles.contentImage}
        />
      </View>
      <View style={styles.contentWrap}>
        <View style={styles.contentIconWrap}>
          <View style={styles.contentIconLeft}>
            <Heart style={styles.contentIcon} />
            <SpeechBubble style={styles.contentIcon} />
            <Airplane style={styles.contentIcon} />
          </View>
          <BookMark />
        </View>
        <View style={{marginBottom: 5}}>
          <Text>좋아요 26,000개</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 5}}>
          <Text>
            <Text style={{fontWeight: '500', color: '#000'}}>kwkang</Text>{' '}
            팬들을 대상으로 488개의 캐릭터 순위를 선정하는 투표를 진행했습니다.
            무려 460만명의 팬들이 투표에 참여했는데요.
          </Text>
          <TouchableOpacity>
            <Text>더보기</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 5}}>
          <TouchableOpacity>
            <Text>댓글 모두 보기</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput placeholder="댓글 달기" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headWrap: {
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  headLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageWrap: {
    width: 42,
    height: 42,
    marginRight: 5,
  },
  image: {
    width: 42,
    height: 42,
  },
  nicknameWrap: {
    flexDirection: 'row',
  },
  text: {
    letterSpacing: -1,
    fontSize: 14,
  },
  timeText: {
    color: '#ccc',
  },
  contentImage: {
    height: 400,
  },
  contentWrap: {paddingHorizontal: 10, paddingVertical: 10},
  contentIconWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contentIconLeft: {flexDirection: 'row'},
  contentIcon: {marginRight: 10},
});

export default FeedItem;
