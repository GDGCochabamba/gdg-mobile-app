import * as React from 'react';
import Svg, { type SvgProps, Path } from 'react-native-svg';

interface Props extends SvgProps {
  isActive?: boolean;
}

const DirectionsSvg = ({ isActive = false, ...props }: Props) => {
  return (
    <Svg width={34} height={34} fill="none" {...props}>
      <Path
        fill={isActive ? '#2475E5' : '#6D757A'}
        d="M10.333 22h3.334v-5H19.5v4.167l5.833-5.834L19.5 9.5v4.167H12c-.472 0-.868.16-1.188.479-.319.32-.479.715-.479 1.187V22ZM17 33.667a3.19 3.19 0 0 1-1.23-.25 3.39 3.39 0 0 1-1.103-.75L1.333 19.333a3.388 3.388 0 0 1-.75-1.104A3.188 3.188 0 0 1 .333 17c0-.417.084-.826.25-1.23a3.39 3.39 0 0 1 .75-1.103L14.667 1.333a3.39 3.39 0 0 1 1.104-.75c.403-.166.812-.25 1.229-.25.417 0 .826.084 1.23.25.402.167.77.417 1.103.75l13.334 13.334c.333.333.583.701.75 1.104.166.403.25.812.25 1.229 0 .417-.084.826-.25 1.23a3.39 3.39 0 0 1-.75 1.103L19.333 32.667a3.39 3.39 0 0 1-1.104.75 3.19 3.19 0 0 1-1.229.25Z"
      />
    </Svg>
  );
};
export default DirectionsSvg;
