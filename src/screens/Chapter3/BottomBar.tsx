import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconNames = [
  'home',
  'table-search',
  'face-woman-profile',
  'account-settings',
];

const BottomBar = () => {
  return (
    <View style={styles.view}>
      {iconNames.map(it => (
        <Icon key={it} name={it} size={24} style={styles.icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    justifyContent: 'space-around',
    // justifyContent: 'space-evenly',
    // justifyContent: 'space-between',
    backgroundColor: Colors.blue900,
  },
  text: {fontSize: 20, color: 'white'},
  icon: {color: 'white', fontSize: 30},
});

export default BottomBar;
