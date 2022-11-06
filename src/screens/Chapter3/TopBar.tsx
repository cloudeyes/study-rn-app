import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {randomAvatarUrl} from '../../data';

type Props = {};

const avatarUrl = randomAvatarUrl();

const TopBar = (_props: Props) => {
  return (
    <View style={styles.view}>
      <Image source={{uri: avatarUrl}} style={styles.avatar} />
      <Text style={styles.text}>TopBar</Text>
      <Icon size={24} style={styles.icon} name="menu" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: Colors.amber500,
    alignItems: 'center',
  },
  text: {flex: 1, fontSize: 20, textAlign: 'center'},
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  icon: {},
});

export default TopBar;
