import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Cache from './components/Cache';
import Fibo from './components/Fibo';
import Memo from './components/Memo';

const {width} = Dimensions.get('window');

type Props = {};

const numberOfComponents = 3;

const MemoCallback = (_props: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
        <Cache width={width} />
        <Memo width={width} />
        <Fibo width={width} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemoCallback;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    width: width * numberOfComponents,
  },
});
