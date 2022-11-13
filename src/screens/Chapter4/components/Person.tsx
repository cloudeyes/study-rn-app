import {FC, useCallback, useState} from 'react';
import React from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {IPerson} from '../../../data';

import moment from 'moment-with-locales-es6';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../Chapter3/components/Person.style';
import Avatar from '../../Chapter3/components/Avatar';
import IconText from '../../Chapter3/components/IconText';
moment.locale('ko');

type Props = {
  person: IPerson;
};

const Person: FC<Props> = ({person: initialPerson}: Props) => {
  const [person] = useState({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0},
  });
  const [comment, setComment] = useState(initialPerson.counts.comment);
  const [retweet, setRetweet] = useState(initialPerson.counts.retweet);
  const [heart, setHeart] = useState(initialPerson.counts.heart);

  const avatarPressed = useCallback(() => Alert.alert('avatar pressed'), []);
  const deletePressed = useCallback(() => Alert.alert('delete pressed'), []);
  const countIconPressed = useCallback(
    (name: string) => () => {
      switch (name) {
        case 'comment':
          setComment(it => it + 1);
          break;
        case 'retweet':
          setRetweet(it => it + 1);
          break;
        case 'heart':
          setHeart(it => it + 1);
          break;
        default:
          Alert.alert(`${name} pressed`);
      }
    },
    [],
  );
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
        <View style={styles.countsView}>
          <IconText
            name="comment"
            size={18}
            color={Colors.blue500}
            text={comment}
            textStyle={styles.iconText}
            viewStyle={styles.touchableIcon}
            onPress={countIconPressed('comment')}
          />
          <IconText
            name="repeat-variant"
            size={24}
            color={Colors.purple500}
            text={retweet}
            textStyle={styles.iconText}
            viewStyle={styles.touchableIcon}
            onPress={countIconPressed('retweet')}
          />
          <IconText
            name="heart"
            size={18}
            color={Colors.red500}
            text={heart}
            textStyle={styles.iconText}
            viewStyle={styles.touchableIcon}
            onPress={countIconPressed('heart')}
          />
        </View>
      </View>
    </View>
  );
};

export default Person;
