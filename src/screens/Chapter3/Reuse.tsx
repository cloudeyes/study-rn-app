// 컴포넌트 재사용
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';
import {createRandomPerson} from '../../data';
import Person from './components/Person';

type Props = {};

const people = [...new Array(10)].map(createRandomPerson);

const Reuse = (_props: Props) => {
  return (
    <>
      <SafeAreaView style={styles.view}>
        <FlatList
          data={people}
          renderItem={({item}) => <Person person={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  itemSeparator: {
    borderWidth: 0.5,
    borderColor: Colors.grey500,
  },
});

export default Reuse;
