import {Path, Svg} from 'react-native-svg';
import React from 'react';

export interface IconsContext {
  width?: number | string | undefined;
  height?: number | string | undefined;
  style?: any;
  color?: string;
}
export function Menu(props: IconsContext): JSX.Element {
  const {width = '24', height = '24'} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
    </Svg>
  );
}
