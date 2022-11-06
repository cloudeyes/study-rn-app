import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {randomAvatarUrl} from '../../data';

type Props = {};

const avatarUrls = [...new Array(200)].map(_ => randomAvatarUrl());

console.log('avatarUrls:', avatarUrls);

const Content = (_props: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.view}>
      {avatarUrls.map(uri => (
        <Image key={uri} source={{uri}} style={styles.avatar} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    // overflow: 'hidden',
    //flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
  },
  text: {fontSize: 20, color: 'white'},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Content;
