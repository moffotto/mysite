import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  id?: string;
  main?: ReactNode;
  footer?: ReactNode;
};

const SexyTemplate = styled(({ className, id, main, footer }: Props): ReactElement => {
  return (
    <div className={`${className} sexyTemplate-root`} id={id}>
      <main className={'sexyTemplate-main'}>{main}</main>
      <footer className={'sexyTemplate-footer'}>{footer}</footer>
    </div>
  );
})`
  ${({
    theme: {
      breakpoints: { tablet, desktop },
      palette: {
        common: { white },
        switch: { siteBackground },
      },
    },
  }) => `
    background: ${siteBackground};
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    padding: 10px;

    @media (min-width: ${tablet}px) {
      padding: 25px;
    }

    @media (min-width: ${desktop}px) {
      padding: 25px;
    }

    & > .sexyTemplate-main {
      background: ${white};
      border-radius: 4px;
      width: 100%;
      display: flex;
    }

    & > .sexyTemplate-footer {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `}
`;

export default SexyTemplate;
