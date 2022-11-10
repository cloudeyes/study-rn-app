import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';
import {useClock} from './hooks/useClock';

const DigitalClock = () => {
  const time = useClock();

  return (
    <SafeAreaView style={styles.view}>
      <Text style={[styles.digiText, styles.time]}>
        {time.toLocaleTimeString('en')}
      </Text>
      <Text style={[styles.digiText, styles.date]}>
        {time.toLocaleDateString('en')}
      </Text>
    </SafeAreaView>
  );
};

export default DigitalClock;

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  digiText: {
    fontFamily: 'LCD',
  },
  time: {
    fontSize: 50,
  },
  date: {
    fontSize: 25,
    color: Colors.grey500,
  },
});
