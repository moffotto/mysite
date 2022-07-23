import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import { pxToRem, extractOverrideValues } from '@/utils';
import { TypeCommonProps, TypePositioningProps, TypeTypographyProps } from '@/types';

type Props = TypeCommonProps &
  TypePositioningProps &
  TypeTypographyProps<
    'h2' | 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div',
    'small' | 'medium' | 'large' | 'xl'
  > & {
    children?: ReactNode;
  };

interface IHeadline {
  props: Props;
  defaultComponent: 'h2';
}

const Headline: OverridableComponent<IHeadline> = styled(
  ({ component, className, id, children, ...rest }: Props): ReactElement => {
    const Component = component || 'h2';

    return (
      <Component {...rest} className={`${className} headline-root`} id={id ?? undefined}>
        {children}
      </Component>
    );
  },
)`
  ${({
    size,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    overrides,
    theme: {
      breakpoints: { tablet, desktop },
      palette: {
        switch: { typoOne },
      },
    },
  }) => {
    const override = extractOverrideValues(overrides);
    let mobileFS, tabletFS, desktopFS, mobileLS, tabletLS, desktopLS;

    switch (size) {
      case 'small':
        mobileFS = 20;
        tabletFS = 30;
        desktopFS = 40;
        mobileLS = 1.14;
        tabletLS = 1.14;
        desktopLS = 1.14;
        break;
      case 'medium':
        mobileFS = 20;
        tabletFS = 30;
        desktopFS = 40;
        mobileLS = 1.14;
        tabletLS = 1.14;
        desktopLS = 1.14;
        break;
      case 'xl':
        mobileFS = 200;
        tabletFS = 300;
        desktopFS = 400;
        mobileLS = 1.14;
        tabletLS = 1.14;
        desktopLS = 1.14;
        break;
      default:
        mobileFS = 40;
        tabletFS = 50;
        desktopFS = 60;
        mobileLS = 1.14;
        tabletLS = 1.14;
        desktopLS = 1.14;
        break;
    }

    return `
      width: 100%;
      display: flex;
      justify-content: ${justifyContent ?? 'inherit'};
      justify-items: ${justifyItems ?? 'inherit'};
      align-content: ${alignContent ?? 'inherit'};
      align-items: ${alignItems ?? 'inherit'};
      font-family: ${
        override?.fontFamily ? override.fontFamily + ', ' : ''
      }GlacialIndifference, sans-serif;
      font-weight: ${override?.fontWeight ?? 700};
      color: ${override?.color ?? typoOne};
      padding: 12px;
      font-size: ${pxToRem(override?.fontSize?.mobile ?? mobileFS)}rem;
      letter-spacing: ${pxToRem(override?.letterSpacing?.mobile ?? mobileLS)}rem;

      @media (min-width: ${tablet}px) {
        padding: 24px;
        font-size: ${pxToRem(override?.fontSize?.tablet ?? tabletFS)}rem;
        letter-spacing: ${pxToRem(override?.letterSpacing?.tablet ?? tabletLS)}rem;
      }

      @media (min-width: ${desktop}px) {
        padding: 32px;
        font-size: ${pxToRem(override?.fontSize?.desktop ?? desktopFS)}rem;
        letter-spacing: ${pxToRem(override?.letterSpacing?.desktop ?? desktopLS)}rem;
      }
    `;
  }}
`;

export default Headline;
