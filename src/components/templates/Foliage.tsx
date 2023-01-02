import { Fragment, memo,ReactElement, ReactNode, useContext } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import FoliageOne from '@/assets/foliage1.webp';
import FoliageTwo from '@/assets/foliage2.webp';
import { FallingIconSwitchBtn,Image, ImageProps } from '@/atoms';
import { ThemeModeContext } from '@/context';
import { IconMoon, IconSun } from '@/icons';
import { TypeCommonProps } from '@/types';

const FOLIAGE_IMG_HEIGHT = 440;

type FoliageBackgroundImageProps = Pick<TypeCommonProps, 'className'> &
  Pick<ImageProps, 'img'> & {
    row: number;
  };

const FoliageBackgroundImage = memo(styled(
  ({ className, img }: FoliageBackgroundImageProps): ReactElement => (
    <Image
      alt={''}
      className={`${className} foliageBackgroundImage-root`}
      img={img}
      objectFit={'contain'}
    />
  ),
)`
  ${({ row, theme: { theme } }) => `
    top: ${row * FOLIAGE_IMG_HEIGHT}px;
    filter: ${theme === 'light' ? 'none' : 'brightness(0.2)'};
  `}
`);

type FoliageBackgroundProps = TypeCommonProps & {
  backgroundDepth: number;
};

const FoliageBackground = memo(styled(
  ({ className, backgroundDepth }: FoliageBackgroundProps): ReactElement => {
    const thingArray = [];

    for (let i = 0; i < backgroundDepth; i++) {
      thingArray.push(
        <Fragment>
          <FoliageBackgroundImage
            className={'foliageBackground-unite foliageBackground-one'}
            img={FoliageOne}
            row={i}
          />
          <FoliageBackgroundImage
            className={'foliageBackground-unite foliageBackground-two'}
            img={FoliageTwo}
            row={i}
          />
        </Fragment>,
      );
    }

    return (
      <div className={`${className} foliageBackground-root`} role={'none'}>
        <Parallax speed={-15}>{thingArray}</Parallax>
      </div>
    );
  },
)`
  ${({
    theme: {
      breakpoints: { tablet, desktop, desktopXl, desktopXxl, desktopXxxl },
    },
  }) => `
    width: 100%;
    overflow: none;
    z-index: 1;

    & .foliageBackground-unite {
      position: absolute;
      max-width: 300px;
    }

    & .foliageBackground-one {
      right: -130px;

      @media (min-width: ${tablet}px) {
        right: -130px;
      }
  
      @media (min-width: ${desktop}px) {
        right: -110px;
      }

      @media (min-width: ${desktopXl}px) {
        right: -40px;
      }

      @media (min-width: ${desktopXxl}px) {
        right: -30px;
      }

      @media (min-width: ${desktopXxxl}px) {
        right: -1px;
      }
    }

    & .foliageBackground-two {
      left: -150px;

      @media (min-width: ${tablet}px) {
        left: -145px;
      }
  
      @media (min-width: ${desktop}px) {
        left: -130px;
      }

      @media (min-width: ${desktopXl}px) {
        left: -40px;
      }

      @media (min-width: ${desktopXxl}px) {
        left: -30px;
      }

      @media (min-width: ${desktopXxxl}px) {
        left: -1px;
      }
    }
  `}
`);

type FoliageTemplateProps = TypeCommonProps & {
  children?: ReactNode;
  backgroundDepth?: number;
};

const FoliageTemplate = styled(
  ({ className, id, children, backgroundDepth }: FoliageTemplateProps): ReactElement => {
    const { mode, toggleMode } = useContext(ThemeModeContext);

    return (
      <Fragment>
        <FoliageBackground backgroundDepth={backgroundDepth ?? 0} />
        <div className={`${className} foliageTemplate-root`} id={id}>
          <header className={'foliageTemplate-header'}>
            <FallingIconSwitchBtn
              ariaLabel={'Toggle dark mode'}
              ariaPressed={mode === 'dark'}
              background={'linear-gradient(#000082, orange, yellow)'}
              circle
              height={'40px'}
              icons={[
                <IconMoon fill={'yellow'} key={`moon`} />,
                <IconSun fill={'black'} key={`sun`} />,
              ]}
              onClick={toggleMode}
              width={'40px'}
            />
          </header>
          {children && (
            <Parallax speed={15}>
              <main className={'foliageTemplate-main'}>{children}</main>
            </Parallax>
          )}
          <footer className={'foliageTemplate-footer'}>back to the top</footer>
        </div>
      </Fragment>
    );
  },
)`
  ${({
    theme: {
      breakpoints: { tablet, desktop, desktopXl, desktopXxl, desktopXxxl },
      palette: {
        switch: { foliageMainDropshadow, foliageMainBackground, foliageSiteBackground },
      },
    },
    backgroundDepth,
  }) => `
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    z-index: 2;
    padding: 20px;
    background: ${foliageSiteBackground};
    height: ${backgroundDepth ? `${(backgroundDepth + 1) * FOLIAGE_IMG_HEIGHT}px` : 'auto'};

    @media (min-width: ${tablet}px) {
      padding: 30px 110px;
    }

    @media (min-width: ${desktop}px) {
      padding: 40px 140px;
    }

    & .foliageTemplate-main, & > header {
      max-width: 1160px;
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
      z-index: inherit;
      background: ${foliageMainBackground};
      box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
      -moz-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
      -webkit-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
      -o-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
      padding: 10px 30px;

      @media (min-width: ${tablet}px) {
        padding: 10px 50px;
        border-radius: 30px;
        box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
        -moz-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
        -webkit-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
        -o-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
      }
  
      @media (min-width: ${desktop}px) {
        padding: 10px 100px;
        border-radius: 40px;
        box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
        -moz-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
        -webkit-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
        -o-box-shadow: 0px 0px 7px 2px ${foliageMainDropshadow};
      }

      @media (min-width: ${desktopXl}px) {
        box-shadow: 0px 0px 20px 2px ${foliageMainDropshadow};
        -moz-box-shadow: 0px 0px 20px 2px ${foliageMainDropshadow};
        -webkit-box-shadow: 0px 0px 20px 2px ${foliageMainDropshadow};
        -o-box-shadow: 0px 0px 20px 2px ${foliageMainDropshadow};
      }

      @media (min-width: ${desktopXxl}px) {
        box-shadow: 0px 0px 34px 2px ${foliageMainDropshadow};
        -moz-box-shadow: 0px 0px 34px 2px ${foliageMainDropshadow};
        -webkit-box-shadow: 0px 0px 34px 2px ${foliageMainDropshadow};
        -o-box-shadow: 0px 0px 34px 2px ${foliageMainDropshadow};
      }

      @media (min-width: ${desktopXxxl}px) {
        box-shadow: 0px 0px 100px 10px ${foliageMainDropshadow};
        -moz-box-shadow: 0px 0px 100px 10px ${foliageMainDropshadow};
        -webkit-box-shadow: 0px 0px 100px 10px ${foliageMainDropshadow};
        -o-box-shadow: 0px 0px 100px 10px ${foliageMainDropshadow};
      }
    }

    & > header {
      display: flex;
      justify-content: end;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
    }

    & > .foliageTemplate-footer {
      width: 100%;
      display: flex;
      justify-content: center;
      z-index: inherit;
    }
  `}
`;

export default memo(FoliageTemplate);
