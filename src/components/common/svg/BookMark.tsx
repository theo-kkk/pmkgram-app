import {Polygon, Svg} from 'react-native-svg';
import React from 'react';

export interface IconsContext {
  width?: number | string | undefined;
  height?: number | string | undefined;
  styles?: any;
  color?: string;
}
export function BookMark(props: IconsContext): JSX.Element {
  const {width = '24', height = '24', color = '#000'} = props;
  return (
    <Svg
      aria-label=""
      color={color}
      fill={color}
      width={width}
      height={height}
      role="img"
      viewBox="0 0 24 24"
      {...props}>
      <Polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
}
