import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type ExampleComponentProps = {
  className?: string;
  id?: string;
  children?: ReactNode;
};

const ExampleComponent = styled(
  ({ className, id, children }: ExampleComponentProps): ReactElement => {
    return (
      <section className={`${className} exampleComponent-container`} id={id ?? undefined}>
        {children && <div className={'exampleComponent-innerText'}>{children}</div>}
      </section>
    );
  },
)`
  ${({
    theme: {
      breakpoints: { tablet, desktop },
      palette: {
        common: { white, black },
      },
    },
  }) => `
    &&& {
      background: ${white};
      border-radius: 0px;
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

export default ExampleComponent;
