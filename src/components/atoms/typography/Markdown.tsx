import { ReactElement } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import styled from 'styled-components';

import { TypeCommonProps } from '@/types';

type Props = Pick<TypeCommonProps, 'className'> & {
  transformationMap: Components;
  children: string;
};

const Markdown = styled(({ className, children, transformationMap }: Props): ReactElement => {
  return (
    <ReactMarkdown
      className={`${className} markdown-root`}
      components={transformationMap}
      linkTarget={'_blank'}
      rehypePlugins={[rehypeRaw, [rehypeSanitize, { allowComments: false, allowDoctypes: false }]]}
    >
      {children}
    </ReactMarkdown>
  );
})`
  & * {
    margin: 0 0 0 0;
  }
  & em {
    font-style: italic;
  }
  & strong {
    font-weight: 700;
  }
  & a:link {
    color: inherit;
  }
  & sup {
    line-height: 0;
  }
  & sub {
    line-height: 0;
  }
`;

export default Markdown;
