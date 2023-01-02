import { HTMLProps,memo, ReactElement, useState } from 'react';
import styled from 'styled-components';

import { TypeCommonProps } from '@/types';

type Props = TypeCommonProps &
  Pick<HTMLProps<HTMLButtonElement>, 'onClick'> & {
    // Accepts up to 2 icons
    icons?: ReactElement[];
    // Must be valid CSS 'height' & 'width'
    height?: string;
    width?: string;
    // Should use border-radius = 50%
    circle?: boolean;
    background?: string;
    ariaLabel?: string;
    ariaPressed?: string;
  };

/**
 * Intended to be a switch that does something onClick. Should be given 2 icons to act
 * as option 1 and option 2 of the switcher
 */
const FallingIconSwitchBtn = styled(
  ({ className, icons, onClick, ...rest }: Props): ReactElement => {
    const [animation, setAnimation] = useState<'paused' | 'play'>('paused');
    let running = false;

    return (
      <button
        className={`${className} iconSwitchBtn-root`}
        onClick={(event) => {
          if (onClick) {
            onClick(event);
          }
          if (!running) {
            running = true;
            setAnimation('play');
            setTimeout(function () {
              setAnimation('paused');
              running = false;
            }, 500);
          }
        }}
        {...rest}
      >
        <div className={`iconSwitchBtn-iconsContainer animate ${animation}`}>
          {icons?.map(
            (item, index) =>
              index <= 1 && <div className={`${index === 0 ? 'iconOne' : 'iconTwo'}`}>{item}</div>,
          )}
        </div>
      </button>
    );
  },
)`
  ${({ height, width, circle, background }) => {
    return `
        padding: 5px;
        border: none;
        background: none;
        border-radius: ${circle ? '50%' : 'initial'};
        height: ${height ?? 'initial'};
        width: ${width ?? 'initial'};
        cursor: pointer;
        overflow: hidden;

        & > .iconSwitchBtn-iconsContainer {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-image: ${background ?? 'none'};
          margin-top: -135px;
          margin-left: -5px;
          width: ${width};

          & > .iconOne {
            padding-top: 15px;
            margin-bottom: 100px;
          }

          & > .iconTwo {
            padding-bottom: 15px;
          }
        }

        .animate {
          transform: translateY(0);
          animation: moveIcon 1s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
          animation-fill-mode: forwards;
        }

        @keyframes moveIcon {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(125px);
          }
          100% {
            transform: translateY(0);
          }
        }

        & .paused {
          animation-play-state: paused;
        }

        & .play {
          animation-play-state: running;
        }
  `;
  }}
`;

export default memo(FallingIconSwitchBtn);
