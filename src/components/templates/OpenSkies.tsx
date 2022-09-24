import { Fragment, ReactElement, ReactNode, useContext } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled, { ThemeContext } from 'styled-components';

import DarkBg from '@/assets/darkBg1.webp';
import LightBg from '@/assets/openSkyLight.webp';
import { Image } from '@/atoms';
import { TypeCommonProps } from '@/types';

type BottomImageProps = TypeCommonProps;

const BottomImage = styled(({ className }: BottomImageProps): ReactElement => {
  const themeContext = useContext(ThemeContext);

  return (
    <Parallax speed={-10}>
      <Image
        alt={''}
        className={`${className} bottomImage-root`}
        img={themeContext.theme === 'light' ? LightBg : DarkBg}
      />
    </Parallax>
  );
})`
  ${({
    theme: {
      palette: {
        switch: { openSkiesCoverup },
      },
    },
  }) => `
    background: ${openSkiesCoverup};
    position: relative;
    width: 100%;
    left: 0;
    bottom: 0;
    overflow: none;
    z-index: 1;
  `}
`;

type SexyTemplateProps = TypeCommonProps & {
  main?: ReactNode;
  footer?: ReactNode;
};

const SexyTemplate = styled(({ className, id, main, footer }: SexyTemplateProps): ReactElement => {
  return (
    <Fragment>
      <div className={`${className} sexyTemplate-root`} id={id}>
        <main className={'sexyTemplate-main'}>{main}</main>
        <footer className={'sexyTemplate-footer'}>{footer}</footer>
      </div>
      <BottomImage />
    </Fragment>
  );
})`
  ${({
    theme: {
      breakpoints: { tablet, desktop },
      palette: {
        common: { white, shadowOne },
        switch: { openSkiesBackground },
      },
    },
  }) => `
    background-image: ${openSkiesBackground};

    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    padding: 10px;
    z-index: 2;

    @media (min-width: ${tablet}px) {
      padding: 20px 40px;
    }

    @media (min-width: ${desktop}px) {
      padding: 20px 140px;
    }

    & > .sexyTemplate-main {
      background: ${white};
      border-radius: 4px;
      width: 100%;
      display: block;
      z-index: inherit;
      box-shadow: 0px 0px 7px 2px ${shadowOne};
      -moz-box-shadow: 0px 0px 7px 2px ${shadowOne};
      -webkit-box-shadow: 0px 0px 7px 2px ${shadowOne};
      -o-box-shadow: 0px 0px 7px 2px ${shadowOne};
    }

    & > .sexyTemplate-footer {
      width: 100%;
      display: flex;
      justify-content: center;
      z-index: inherit;
    }
  `}
`;

export default SexyTemplate;
