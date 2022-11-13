import type {ComponentProps, FC} from 'react';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableViewProps} from '../../Chapter3/components';
import TouchableView from '../../Chapter3/components/TouchableView';

type Props = TouchableViewProps &
  ComponentProps<typeof Icon> & {
    iconStyle?: StyleProp<TextStyle>;
  };

const IconText: FC<Props> = ({
  name,
  size,
  color,
  iconStyle,
  ...props
}: Props) => {
  return (
    <TouchableView {...props} viewStyle={styles.view}>
      <Icon
        name={name ?? 'unknown'}
        color={color}
        size={size}
        style={[styles.icon, iconStyle]}
      />
    </TouchableView>
  );
};

const styles = StyleSheet.create({
  view: {},
  icon: {},
});

export default IconText;
