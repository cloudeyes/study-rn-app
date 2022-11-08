import type {ComponentProps, FC} from 'react';
import type {StyleProp} from 'react-native';
import React from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>;
export type TouchableViewProps = TouchableOpacityProps & {
  viewStyle?: StyleProp<ViewStyle>;
};

const TouchableView: FC<TouchableViewProps> = ({
  children,
  viewStyle,
  ...props
}: TouchableViewProps) => {
  return (
    <TouchableOpacity {...props}>
      <View style={viewStyle}>{children}</View>
    </TouchableOpacity>
  );
};

export default TouchableView;
