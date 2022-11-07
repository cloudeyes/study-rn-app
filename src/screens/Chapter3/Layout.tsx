import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import BottomBar from './components/BottomBar';
import Content from './components/Content';
import FabButton from './components/FabButton';
import TopBar from './components/TopBar';

type LayoutProps = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Layout = (props: LayoutProps) => {
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <FabButton />
    </>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
});

export default Layout;
