import {useCallback} from 'react';
import React from 'react';
import {View} from 'react-native';
import {Colors} from 'react-native-paper';
import {styles} from '../../Chapter3/components/Person.style';
import IconText from '../../Chapter3/components/IconText';
import {PersonIconsProps, CountFields} from './PersonV2';

export const PersonIcons = ({person, setPerson}: PersonIconsProps) => {
  const countIconPressed = useCallback(
    (name: CountFields) => () => {
      setPerson(it => ({
        ...it,
        counts: {...it.counts, [name]: it.counts[name] + 2},
      }));
    },
    [setPerson],
  );

  return (
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
  );
};
