import { NextPage } from 'next';

import { SexyTemplate } from '@/templates';

const Home: NextPage<unknown> = () => {
  return <SexyTemplate footer={'back to the top'} main={<h1>Hi! Welcome to my site :)</h1>} />;
};

export default Home;
