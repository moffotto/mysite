import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import { TypeCommonProps, TypePositioningProps, TypeTypographyProps } from '@/types';

type Props = TypeCommonProps &
  TypePositioningProps &
  TypeTypographyProps<'div' | 'p' | 'span', 'small' | 'medium' | 'large'> & {
    children?: ReactNode;
    bold?: boolean;
    italic?: boolean;
  };

interface IBody {
  props: Props;
  defaultComponent: 'div';
}

const Body: OverridableComponent<IBody> = styled(
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
  `}
`;

export default Body;
