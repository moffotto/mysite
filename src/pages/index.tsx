import { NextPage } from 'next';
import { Fragment, useContext } from 'react';

import { Body, Headline } from '@/atoms';
import { ThemeModeContext } from '@/context';
import { TemplateFoliage } from '@/templates';

const Home: NextPage<unknown> = () => {
  const { mode } = useContext(ThemeModeContext);

  return (
    <TemplateFoliage backgroundDepth={2}>
      <Fragment>
        <Headline overrides={{ color: mode === 'light' ? 'red' : '#1c1c1c' }} size={'xl'}>
          Hi
        </Headline>
        <Body size={'xl'}>
          {`Welcome! I'm Sam. It has always been my dream to have an online space where I can do all
          the things social media allows me to do, but with 10x the work... and now here we are.
          What you're seeing is the earliest of the early iterations on this idea - the park from
          Westworld when it was still mostly Roombas. My hope is that this will one day become a
          mindmap, equal parts contemplative practice & monument to my own special brand of
          insanity.`}
        </Body>
        <Body size={'xl'}>Me casa es su casa, so feel free to look around.</Body>
      </Fragment>
    </TemplateFoliage>
  );
};

export default Home;
