import {Dispatch, FC, SetStateAction, useCallback, useState} from 'react';
import React from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {IPerson, IPersonCounts, randomAvatarUrl} from '../../../data';

import moment from 'moment-with-locales-es6';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../Chapter3/components/Person.style';
import Avatar from '../../Chapter3/components/Avatar';
import {PersonIcons} from './PersonIcons';
moment.locale('ko');

type Props = {
  person: IPerson;
};

export type CountFields = keyof IPersonCounts;
export type PersonIconsProps = {
  person: IPerson;
  setPerson: Dispatch<SetStateAction<IPerson>>;
};

const Person: FC<Props> = ({person: initialPerson}: Props) => {
  const [person, setPerson] = useState({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0},
  });

  const avatarPressed = useCallback(() => {
    setPerson(it => ({...it, avatar: randomAvatarUrl()}));
  }, []);
  const deletePressed = useCallback(() => Alert.alert('delete pressed'), []);

  return (
    <View style={styles.view}>
      <View style={styles.leftView}>
        <Avatar
          uri={person.avatar}
          size={50}
          imageStyle={styles.avatar}
          onPress={avatarPressed}
        />
      </View>
      <View style={styles.rightView}>
        <View style={styles.nameEmailView}>
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.email}>{person.email}</Text>
        </View>
        <View style={styles.dateView}>
          <Text>{moment(person.createdDate).startOf('day').fromNow()}</Text>
          <Icon
            name="trash-can-outline"
            style={styles.trashIcon}
            onPress={deletePressed}
          />
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.comments}>
          {person.comments}
        </Text>
        <Image source={{uri: person.image}} style={styles.image} />
        <PersonIcons person={person} setPerson={setPerson} />
      </View>
    </View>
  );
};

export default Person;
