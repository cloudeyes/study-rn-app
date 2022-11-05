import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as D from '../data';

import {Colors} from 'react-native-paper';

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 36;

const {width, height} = Dimensions.get('window');
const Chapter3 = () => (
  <SafeAreaView style={[styles.safeAreaView]}>
    <Text style={[styles.text]}>os: {Platform.OS}</Text>
    <Text style={[styles.text]}>width: {width}px</Text>
    <Text style={[styles.text]}>height: {height}px</Text>
    <Text style={[styles.customText]}>Hello, World!</Text>
    <View style={[styles.box, styles.border]} />
    <View style={[styles.box, styles.border, {borderRadius: 10}]} />
    <Image source={{uri: avatarUrl}} style={[styles.box, styles.image]} />
  </SafeAreaView>
);

const paddingLeft = 20;
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.blue500,
    flex: 1,
    paddingLeft: Platform.select({android: paddingLeft}),
    paddingRight: Platform.select({android: paddingLeft}),
  },
  text: {
    fontSize: 18,
    marginLeft: Platform.select({ios: paddingLeft}),
  },
  customText: {
    fontSize: 24,
    marginLeft: Platform.select({ios: paddingLeft}),
    fontFamily: 'DancingScript-Bold',
  },
  box: {
    width: width - paddingLeft * 2,
    height: 100,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: Platform.select({ios: paddingLeft}),
  },
  border: {
    borderWidth: 10,
    borderColor: Colors.lime500,
  },
  image: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
  },
});

export default Chapter3;
