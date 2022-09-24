import { Fragment, ReactElement, ReactNode } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import FoliageOne from '@/assets/foliage1.webp';
import FoliageTwo from '@/assets/foliage2.webp';
import { Image, ImageProps } from '@/atoms';
import { TypeCommonProps } from '@/types';

// import styled, { ThemeContext } from 'styled-components';
// import { Fragment, ReactElement, ReactNode, useContext } from 'react';

type FoliageBackgroundImageProps = Pick<TypeCommonProps, 'className'> &
  Pick<ImageProps, 'img'> & {
    row: number;
  };

const FoliageBackgroundImage = styled(
  ({ className, img }: FoliageBackgroundImageProps): ReactElement => (
    <Image
      alt={''}
      className={`${className} foliageBackgroundImage-root`}
      img={img}
      objectFit={'contain'}
    />
  ),
)`
  ${({ row }) => `
    top: ${row * 440}px;
  `}
`;

type FoliageBackgroundProps = TypeCommonProps & {
  backgroundDepth: number;
};

const FoliageBackground = styled(
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
      // palette: {
      //   switch: { openSkiesCoverup },
      // },
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
`;

type FoliageTemplateProps = TypeCommonProps & {
  main?: ReactNode;
  footer?: ReactNode;
  backgroundDepth?: number;
};

const FoliageTemplate = styled(
  ({ className, id, main, footer, backgroundDepth }: FoliageTemplateProps): ReactElement => {
    return (
      <Fragment>
        <FoliageBackground backgroundDepth={backgroundDepth ?? 0} />
        <div className={`${className} foliageTemplate-root`} id={id}>
          <Parallax speed={15}>
            <main className={'foliageTemplate-main'}>{main}</main>
          </Parallax>
          <footer className={'foliageTemplate-footer'}>{footer}</footer>
        </div>
      </Fragment>
    );
  },
)`
  ${({
    theme: {
      breakpoints: { tablet, desktop, desktopXl, desktopXxl, desktopXxxl },
      palette: {
        common: { white, shadowOne },
        // switch: { openSkiesBackground },
      },
    },
  }) => `
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    z-index: 2;
    padding: 20px;

    @media (min-width: ${tablet}px) {
      padding: 30px 110px;
    }

    @media (min-width: ${desktop}px) {
      padding: 40px 140px;
    }

    & .foliageTemplate-main {
      max-width: 1160px;
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
      z-index: inherit;
      background: ${white};
      box-shadow: 0px 0px 7px 2px ${shadowOne};
      -moz-box-shadow: 0px 0px 7px 2px ${shadowOne};
      -webkit-box-shadow: 0px 0px 7px 2px ${shadowOne};
      -o-box-shadow: 0px 0px 7px 2px ${shadowOne};

      @media (min-width: ${tablet}px) {
        border-radius: 30px;
        box-shadow: 0px 0px 7px 2px ${shadowOne};
        -moz-box-shadow: 0px 0px 7px 2px ${shadowOne};
        -webkit-box-shadow: 0px 0px 7px 2px ${shadowOne};
        -o-box-shadow: 0px 0px 7px 2px ${shadowOne};
      }
  
      @media (min-width: ${desktop}px) {
        border-radius: 40px;
        box-shadow: 0px 0px 7px 2px ${shadowOne};
        -moz-box-shadow: 0px 0px 7px 2px ${shadowOne};
        -webkit-box-shadow: 0px 0px 7px 2px ${shadowOne};
        -o-box-shadow: 0px 0px 7px 2px ${shadowOne};
      }

      @media (min-width: ${desktopXl}px) {
        box-shadow: 0px 0px 20px 2px ${shadowOne};
        -moz-box-shadow: 0px 0px 20px 2px ${shadowOne};
        -webkit-box-shadow: 0px 0px 20px 2px ${shadowOne};
        -o-box-shadow: 0px 0px 20px 2px ${shadowOne};
      }

      @media (min-width: ${desktopXxl}px) {
        box-shadow: 0px 0px 34px 2px ${shadowOne};
        -moz-box-shadow: 0px 0px 34px 2px ${shadowOne};
        -webkit-box-shadow: 0px 0px 34px 2px ${shadowOne};
        -o-box-shadow: 0px 0px 34px 2px ${shadowOne};
      }

      @media (min-width: ${desktopXxxl}px) {
        box-shadow: 0px 0px 100px 10px ${shadowOne};
        -moz-box-shadow: 0px 0px 100px 10px ${shadowOne};
        -webkit-box-shadow: 0px 0px 100px 10px ${shadowOne};
        -o-box-shadow: 0px 0px 100px 10px ${shadowOne};
      }
    }

    & > .foliageTemplate-footer {
      width: 100%;
      display: flex;
      justify-content: center;
      z-index: inherit;
    }
  `}
`;

export default FoliageTemplate;
