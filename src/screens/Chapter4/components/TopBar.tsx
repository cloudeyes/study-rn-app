import React, {Dispatch, SetStateAction, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';
import {createRandomPerson, IPerson} from '../../../data';
import TouchIcon from './TouchIcon';

type Props = {
  people: Readonly<IPerson[]>;
  setPeople: Dispatch<SetStateAction<IPerson[]>>;
};

const TopBar = ({people, setPeople}: Props) => {
  const handleAddPerson = useCallback(() => {
    //
    setPeople(it => [createRandomPerson(), ...it]);
  }, [setPeople]);

  const handleDeleteAll = useCallback(() => {
    setPeople(_ => []);
  }, [setPeople]);

  return (
    <View style={styles.view}>
      <TouchIcon
        size={24}
        iconStyle={styles.icon}
        name="plus"
        onPress={handleAddPerson}
      />
      <Text style={styles.text}>Count: {people.length}</Text>
      <TouchIcon
        size={24}
        iconStyle={styles.icon}
        name="delete"
        onPress={handleDeleteAll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: Colors.amber500,
    alignItems: 'center',
  },
  text: {flex: 1, fontSize: 20, textAlign: 'center'},
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  icon: {
    backgroundColor: Colors.blue500,
    color: 'white',
  },
});

export default TopBar;
