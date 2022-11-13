import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {createRandomPerson} from '../../../data';
import {createOrUse} from '../createOrUse';
import {Colors} from 'react-native-paper';
import Person from './Person';

type Props = {
  width: number;
};

const Cache = ({width}: Props) => {
  const people = createOrUse('people', () =>
    [...new Array(2)].map(createRandomPerson),
  );

  return (
    <View style={[styles.view, {width}]}>
      <Text style={styles.text}>Cache</Text>
      <FlatList
        style={styles.flatList}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  text: {},
  flatList: {},
  itemSeparator: {
    borderWidth: 1,
    borderColor: Colors.grey500,
  },
});

export default Cache;
