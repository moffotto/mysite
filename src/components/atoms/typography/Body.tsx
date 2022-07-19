import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  id?: string;
  children?: ReactNode;
  component?: 'div' | 'p' | 'span';
  justify?:
    | 'left'
    | 'right'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'revert'
    | 'revert-layer'
    | 'unset'
    | 'normal';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  alignContent?:
    | 'stretch'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  italic?: boolean;
  overrides?: {
    fontSize: number | { mobile?: number; tablet?: number; desktop?: number };
    letterSpacing: number | { mobile?: number; tablet?: number; desktop?: number };
    fontWeight: number | { mobile?: number; tablet?: number; desktop?: number };
  };
};

interface ITypographyBody {
  props: Props;
  defaultComponent: 'div';
}

const Body: OverridableComponent<ITypographyBody> = styled(
  ({ component, className, id, children }: Props): ReactElement => {
    const Component = component || 'div';

    return (
      <Component className={`${className} body-root`} id={id ?? undefined}>
        {children}
      </Component>
    );
  },
)`
  ${({
    theme: {
      breakpoints: { tablet, desktop },
      palette: {
        common: { black },
      },
    },
  }) => `
    &&& {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 12px;

      @media (min-width: ${tablet}px) {
        padding: 24px;;
      }

      @media (min-width: ${desktop}px) {
        padding: 32px;
      }

      & .exampleComponent-innerText {
          color: ${black};
          font-size: 1rem;

          @media (min-width: ${tablet}px) {
            padding: 24px;;
          }
    
          @media (min-width: ${desktop}px) {
            padding: 32px;
          }
      }
    }
  `}
`;

export default Body;
