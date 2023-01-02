import { OverridableComponent } from '@mui/material/OverridableComponent';
import { memo,ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import { TypeCommonProps, TypePositioningProps, TypeTypographyProps } from '@/types';
import { extractOverrideValues, pxToRem } from '@/utils';

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
      breakpoints: { mobile, tablet, desktop },
      palette: {
        switch: { typoOne },
      },
    },
  }) => {
    const override = extractOverrideValues(overrides);
    let smallFontSize;
    let mobileFontSize;
    let tabletFontSize;
    let desktopFontSize;
    let mobileLineSize;
    let tabletLineSize;
    let desktopLineSize;

    switch (size) {
      case 'small':
        smallFontSize = 20;
        mobileFontSize = 20;
        tabletFontSize = 30;
        desktopFontSize = 40;
        mobileLineSize = 1.14;
        tabletLineSize = 1.14;
        desktopLineSize = 1.14;
        break;
      case 'medium':
        smallFontSize = 20;
        mobileFontSize = 20;
        tabletFontSize = 30;
        desktopFontSize = 40;
        mobileLineSize = 1.14;
        tabletLineSize = 1.14;
        desktopLineSize = 1.14;
        break;
      case 'xl':
        smallFontSize = 100;
        mobileFontSize = 155;
        tabletFontSize = 250;
        desktopFontSize = 350;
        mobileLineSize = 1.14;
        tabletLineSize = 1.14;
        desktopLineSize = 1.14;
        break;
      default:
        smallFontSize = 40;
        mobileFontSize = 40;
        tabletFontSize = 50;
        desktopFontSize = 60;
        mobileLineSize = 1.14;
        tabletLineSize = 1.14;
        desktopLineSize = 1.14;
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
      font-size: ${pxToRem(smallFontSize)}rem;
      letter-spacing: ${pxToRem(override?.letterSpacing?.mobile ?? mobileLineSize)}rem;

      @media (min-width: ${mobile}px) {
        font-size: ${pxToRem(override?.fontSize?.mobile ?? mobileFontSize)}rem;
      }

      @media (min-width: ${tablet}px) {
        padding: 24px;
        font-size: ${pxToRem(override?.fontSize?.tablet ?? tabletFontSize)}rem;
        letter-spacing: ${pxToRem(override?.letterSpacing?.tablet ?? tabletLineSize)}rem;
      }

      @media (min-width: ${desktop}px) {
        padding: 32px;
        font-size: ${pxToRem(override?.fontSize?.desktop ?? desktopFontSize)}rem;
        letter-spacing: ${pxToRem(override?.letterSpacing?.desktop ?? desktopLineSize)}rem;
      }
    `;
  }}
`;

export default memo(Headline);
