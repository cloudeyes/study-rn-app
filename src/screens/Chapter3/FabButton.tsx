import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

const FabButton = (_props: Props) => {
  return (
    <View style={styles.view}>
      <Icon name="feather" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    fontSize: 50,
    color: 'white',
  },
});

export default FabButton;
