import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';

const DigitalClock = () => {
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
