import type {FC} from 'react';
import React from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {IPerson} from '../../../data';
import {styles} from './Person.style';

import moment from 'moment-with-locales-es6';
import {Colors} from 'react-native-paper';
import Avatar from './Avatar';
import IconText from './IconText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
moment.locale('ko');

type Props = {
  person: IPerson;
};

const avatarPressed = () => Alert.alert('avatar pressed');
const deletePressed = () => Alert.alert('delete pressed');
const countIconPressed = (name: string) => () => Alert.alert(`${name} pressed`);

const Person: FC<Props> = ({person}: Props) => {
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
            text={person.counts.comment}
            textStyle={styles.iconText}
            viewStyle={styles.touchableIcon}
            onPress={countIconPressed('comment')}
          />
          <IconText
            name="repeat-variant"
            size={24}
            color={Colors.purple500}
            text={person.counts.retweet}
            textStyle={styles.iconText}
            viewStyle={styles.touchableIcon}
            onPress={countIconPressed('retweet')}
          />
          <IconText
            name="heart"
            size={18}
            color={Colors.red500}
            text={person.counts.heart}
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
