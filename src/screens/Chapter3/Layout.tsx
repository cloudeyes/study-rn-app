import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import BottomBar from './BottomBar';
import Content from './Content';
import FabButton from './FabButton';
import TopBar from './TopBar';

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
