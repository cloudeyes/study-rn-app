import React, {useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';
import {createRandomPerson} from '../../../data';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useClock} from '../hooks/useClock';
import PersonV2 from './PersonV2';

type Props = {
  width: number;
};

const Memo = ({width}: Props) => {
  // const time = useClock();
  const people = useMemo(
    () => [...new Array(2)].map(createRandomPerson),
    [
      // time
    ],
  );

  return (
    <View style={[styles.view, {width}]}>
      <Text style={styles.text}>Memo</Text>
      <FlatList
        style={styles.flatList}
        data={people}
        renderItem={({item}) => <PersonV2 person={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  text: {},
  flatList: {
    width: '100%',
  },
  itemSeparator: {
    borderWidth: 1,
    borderColor: Colors.grey500,
  },
});

export default Memo;
