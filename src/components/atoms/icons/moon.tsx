import { ReactElement } from 'react';
import styled from 'styled-components';

import { TypeSvgIcon } from '@/types';

const Moon = styled(({ className, fill, height }: TypeSvgIcon): ReactElement => {
  const svgHeight = height ?? 21;
  //   const scaledXY = svgHeight / 80;

  //   <svg
  //   className={`${className} svgIcon-accessories-root`}
  //   fill={'none'}
  //   height={svgHeight}
  //   preserveAspectRatio={'xMidYMid meet'}
  //   viewBox={`0 0 ${svgHeight} ${svgHeight}`}
  // >
  //   <path
  //     clipRule={'evenodd'}
  //     d={
  //       'M27.7842 64.1132C21.0779 64.1132 14.1785 61.6011 10.8719 60.3632V61.2945C11.3493 61.465 11.9018 61.6644 12.499 61.8799L12.5058 61'
  //     }
  //   fill={fill ?? 'black'}
  //     fillRule={'evenodd'}
  //     transform={height ? `scale(${scaledXY}, ${scaledXY})` : undefined}
  //   />
  // </svg>

  return (
    <svg
      className={`${className} icon-moon-root`}
      height={svgHeight}
      preserveAspectRatio={'xMidYMid meet'}
      viewBox={`0 0 ${svgHeight} ${svgHeight}`}
    >
      <path
        d={`m7.5.5c1.3280962 0 2.5698071.36985953 3.6277499 1.01219586-3.14075981.19184303-5.6277499 2.79938976-5.6277499 5.98780414 0 3.1884144 2.48699009 5.7959611 5.6269199 5.9885898-1.0571128.6415507-2.2988237 1.0114102-3.6269199 1.0114102-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7z`}
        fill={'none'}
        stroke={fill ?? 'currentColor'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        transform={'translate(4 3)'}
      />
    </svg>
  );
})`
  overflow: visible;
  pointer-events: none;
`;

export default Moon;
