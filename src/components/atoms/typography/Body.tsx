import { OverridableComponent } from '@mui/material/OverridableComponent';
import { memo,ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import { TypeCommonProps, TypePositioningProps, TypeTypographyProps } from '@/types';
import { extractOverrideValues, pxToRem } from '@/utils';

type Props = TypeCommonProps &
  TypePositioningProps &
  TypeTypographyProps<'div' | 'p' | 'span', 'small' | 'medium' | 'large' | 'xl'> & {
    children?: ReactNode;
    bold?: boolean;
    italic?: boolean;
  };

interface IBody {
  props: Props;
  defaultComponent: 'p';
}

const Body: OverridableComponent<IBody> = styled(
  ({ component, className, id, children, ...rest }: Props): ReactElement => {
    const Component = component || 'p';

    return (
      <Component {...rest} className={`${className} body-root`} id={id ?? undefined}>
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

    let mobileFS;
    let tabletFS;
    let desktopFS;

    let mobileLS;
    let tabletLS;
    let desktopLS;

    let mobileLH;
    let tabletLH;
    let desktopLH;

    switch (size) {
      case 'small':
        mobileFS = 12;
        tabletFS = 14;
        desktopFS = 16;
        mobileLS = 1.14;
        tabletLS = 1.14;
        desktopLS = 1.14;
        mobileLH = 'initial';
        tabletLH = 'initial';
        desktopLH = 'initial';
        break;
      case 'medium':
        mobileFS = 14;
        tabletFS = 16;
        desktopFS = 18;
        mobileLS = 1.14;
        tabletLS = 1.14;
        desktopLS = 1.14;
        mobileLH = 'initial';
        tabletLH = 'initial';
        desktopLH = 'initial';
        break;
      case 'xl':
        mobileFS = 22;
        tabletFS = 30;
        desktopFS = 36;
        mobileLS = 0.5;
        tabletLS = 0.5;
        desktopLS = 0.5;
        mobileLH = '30px';
        tabletLH = '40px';
        desktopLH = '50px';
        break;
      default:
        mobileFS = 16;
        tabletFS = 18;
        desktopFS = 20;
        mobileLS = 1.14;
        tabletLS = 1.14;
        desktopLS = 1.14;
        mobileLH = 'initial';
        tabletLH = 'initial';
        desktopLH = 'initial';
        break;
    }

    return `
      width: 100%;
      display: flex;
      justify-content: ${justifyContent ?? 'inherit'};
      justify-items: ${justifyItems ?? 'inherit'};
      align-content: ${alignContent ?? 'inherit'};
      align-items: ${alignItems ?? 'inherit'};
      font-family: ${override?.fontFamily ? override.fontFamily + ', ' : ''}Inter, sans-serif;
      font-weight: ${override?.fontWeight ?? 400};
      color: ${override?.color ?? typoOne};
      padding: 12px;
      font-size: ${pxToRem(override?.fontSize?.mobile ?? mobileFS)}rem;
      letter-spacing: ${pxToRem(override?.letterSpacing?.mobile ?? mobileLS)}rem;
      line-height: ${mobileLH};

      @media (min-width: ${tablet}px) {
        padding: 24px;
        font-size: ${pxToRem(override?.fontSize?.tablet ?? tabletFS)}rem;
        letter-spacing: ${pxToRem(override?.letterSpacing?.tablet ?? tabletLS)}rem;
        line-height: ${tabletLH};
      }

      @media (min-width: ${desktop}px) {
        padding: 32px;
        font-size: ${pxToRem(override?.fontSize?.desktop ?? desktopFS)}rem;
        letter-spacing: ${pxToRem(override?.letterSpacing?.desktop ?? desktopLS)}rem;
        line-height: ${desktopLH};
      }
    `;
  }}
`;

export default memo(Body);
