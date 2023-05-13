import {Path, Svg} from 'react-native-svg';
import React from 'react';

export interface IconsContext {
  width?: number | string | undefined;
  height?: number | string | undefined;
  style?: any;
  color?: string;
}
export function SpeechBubble(props: IconsContext): JSX.Element {
  const {width = '24', height = '24', color = '#000'} = props;
  return (
    <Svg
      color={color}
      fill={color}
      width={width}
      height={height}
      role="img"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
}
