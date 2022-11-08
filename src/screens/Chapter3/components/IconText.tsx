import type {ComponentProps, FC} from 'react';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Text} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableView, {TouchableViewProps} from './TouchableView';

type Props = TouchableViewProps &
  ComponentProps<typeof Icon> & {
    text: number | string;
    textStyle?: StyleProp<TextStyle>;
    iconStyle?: StyleProp<TextStyle>;
  };

const IconText: FC<Props> = ({
  name,
  size,
  color,
  text,
  textStyle,
  iconStyle,
  ...props
}: Props) => {
  return (
    <TouchableView {...props} viewStyle={styles.view}>
      <Icon
        name={name ?? 'unknown'}
        size={size}
        color={color ?? Colors.grey500}
        style={[styles.icon, iconStyle]}
      />
      <Text style={textStyle}>{text}</Text>
    </TouchableView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

export default IconText;
