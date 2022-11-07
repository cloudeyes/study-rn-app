import type {FC} from 'react';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {IPerson} from '../../../data';
import {styles} from './Person.style';

import moment from 'moment-with-locales-es6';
moment.locale('ko');

type Props = {
  person: IPerson;
};

const Person: FC<Props> = ({person}: Props) => {
  return (
    <View style={styles.view}>
      <Image source={{uri: person.avatar}} style={styles.avatar} />
      <View style={styles.nameEmailView}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.email}>{person.email}</Text>
      </View>
      <View style={styles.dateView}>
        <Text>{moment(person.createdDate).startOf('day').fromNow()}</Text>
      </View>
      <Text style={styles.comment}>{person.comments}</Text>
      <Image source={{uri: person.image}} style={styles.image} />
      <View style={styles.countsView}>
        <Text>{person.counts.comment}</Text>
        <Text>{person.counts.retweet}</Text>
        <Text>{person.counts.heart}</Text>
      </View>
    </View>
  );
};

export default Person;
