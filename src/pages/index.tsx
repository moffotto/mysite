import { NextPage } from 'next';
import { Fragment } from 'react';

import { ExampleComponent } from '@/atoms';

const Home: NextPage<unknown> = () => {
  return (
    <Fragment>
      <main>
        <h1>
          Welcome to <a href={'https://nextjs.org'}>Next.js!</a>
        </h1>
        <ExampleComponent>
          Get started by editing <code>pages/index.tsx</code>
        </ExampleComponent>
      </main>
    </Fragment>
  );
};

export default Home;
