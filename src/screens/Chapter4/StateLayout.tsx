import React, {useMemo, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Colors} from 'react-native-paper';
import {createRandomPerson} from '../../data';
import BottomBar from '../Chapter3/components/BottomBar';
import FabButton from '../Chapter3/components/FabButton';
import Person from './components/Person';
import PersonV2 from './components/PersonV2';
import TopBar from './components/TopBar';

const {width} = Dimensions.get('window');

type StateLayoutProps = {};

const stateComponents = [
  {title: 'ValueState', Component: Person},
  {title: 'ObjectState', Component: PersonV2},
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StateLayout = (props: StateLayoutProps) => {
  const [people, setPeople] = useState(
    [...new Array(1)].map(createRandomPerson),
  );
  const children = useMemo(
    () =>
      stateComponents.map(({title, Component}) => (
        <View key={title}>
          <FlatList
            style={styles.flatList}
            data={people}
            renderItem={({item}) => <Component person={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      )),
    [people],
  );
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar people={people} setPeople={setPeople} />
        <ScrollView horizontal>{children}</ScrollView>
        <BottomBar />
      </SafeAreaView>
      <FabButton />
    </>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  scrollView: {
    width: width * stateComponents.length,
    flex: 1,
  },
  flatList: {
    width,
  },
  itemSeparator: {
    borderColor: Colors.grey500,
    borderWidth: 0.5,
  },
});

export default StateLayout;
