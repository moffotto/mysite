import { NextPage } from 'next';
import { Fragment } from 'react';

import { Body,Headline } from '@/atoms';
import { SexyTemplate } from '@/templates';

const Home: NextPage<unknown> = () => {
  return (
    <SexyTemplate
      footer={'back to the top'}
      main={
        <Fragment>
          <Headline overrides={{ color: 'red' }} size={'xl'}>
            Sam
          </Headline>
          <Body>
            Look at me go, look at me go, lorem ipsum dolerus somethingoranother ancye ooyea
            nuderstanduyeah athway Iyeay mayeah ayingseay?
          </Body>
        </Fragment>
      }
    />
  );
};

export default Home;
