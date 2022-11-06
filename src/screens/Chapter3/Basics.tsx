import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as D from '../../data';

import {Colors} from 'react-native-paper';

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 36;

const {width, height} = Dimensions.get('window');
const handleIconPress = () => {
  console.log('icon pressed');
};

const Basics = () => (
  <SafeAreaView style={[styles.safeAreaView]}>
    <Text style={[styles.text, fontStyles.regular]}>os: {Platform.OS}</Text>
    <Text style={[styles.text, fontStyles.bold]}>width: {width}px</Text>
    <Text style={[styles.text]}>height: {height}px</Text>
    <Text style={[styles.customText, fontStyles.regular]}>Hello, World!</Text>
    <Text style={[styles.customTextBold, fontStyles.bold]}>Hello, World!</Text>
    <View style={[styles.box, styles.border]} />
    <View style={[styles.box, styles.border, {borderRadius: 10}]} />
    <Image source={{uri: avatarUrl}} style={[styles.box, styles.image]} />
    <TouchableOpacity style={[styles.base]} onPress={handleIconPress}>
      <Icon name="home" size={50} color={Colors.lightBlue500} />
    </TouchableOpacity>
  </SafeAreaView>
);

const paddingLeft = 20;
const fontStyles = StyleSheet.create({
  regular: {
    fontWeight: '400',
  },
  bold: {
    fontWeight: Platform.select({ios: '700', android: '600'}),
  },
});
const styles = StyleSheet.create({
  base: {
    marginLeft: Platform.select({ios: paddingLeft}),
  },
  safeAreaView: {
    backgroundColor: Colors.blue100,
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
    fontFamily: 'DancingScript-Regular',
  },
  customTextBold: {
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
  icon: {
    fontFamily: 'Material Community Icons',
  },
});

export default Basics;
