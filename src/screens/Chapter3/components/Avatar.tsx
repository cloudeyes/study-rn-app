import type {FC} from 'react';
import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import TouchableView, {TouchableViewProps} from './TouchableView';

type Props = TouchableViewProps & {
  uri: string;
  size: number;
  imageStyle?: StyleProp<ImageStyle>;
};

const Avatar: FC<Props> = ({uri, size, imageStyle, ...props}: Props) => {
  return (
    <TouchableView {...props}>
      <Image
        source={{uri}}
        style={[
          imageStyle,
          {width: size, height: size, borderRadius: size / 2},
        ]}
      />
    </TouchableView>
  );
};

export default Avatar;
