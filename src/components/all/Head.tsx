import NextHead from 'next/head';
import type { ReactElement } from 'react';

export type HeadProps = {
  description?: string;
  keywords?: string[];
  noFollow?: boolean;
  noIndex?: boolean;
  ogDescription?: string;
  ogImage?: string;
  ogTitle?: string;
  title?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
};

/**
 * @param description
 * @param keywords
 * @param noFollow
 * @param noIndex
 * @param ogDescription
 * @param ogImage
 * @param ogTitle
 * @param title
 * @param twitterCard
 * @param twitterCreator
 * @param twitterSite
 * @returns NextHead component - page metadata contained in the <Head> ... primarily used for SEO
 */
const Head = ({
  description,
  keywords,
  noFollow,
  noIndex,
  ogDescription,
  ogImage,
  ogTitle,
  title,
  twitterCard,
  twitterCreator,
  twitterSite,
}: HeadProps): ReactElement => {
  const metaKeywords = keywords ? keywords.filter((item?: string) => item != null) : [];

  const robots = [noIndex ? 'noindex' : undefined, noFollow ? 'nofollow' : undefined].filter(
    (item) => item !== undefined,
  );

  return (
    <NextHead>
      {title && <title>{title}</title>}
      {description && description.trim() !== '' && (
        <meta content={description} key={'description'} name={'description'} />
      )}
      {metaKeywords.length > 0 && <meta content={metaKeywords.join(',')} name={'keywords'} />}
      {ogDescription && <meta content={ogDescription} property={'og:description'} />}
      {ogImage && <meta content={ogImage} property={'og:image'} />}
      {ogTitle && <meta content={ogTitle} property={'og:title'} />}
      {robots.length > 0 && <meta content={robots.join(', ')} name={'robots'} />}
      {twitterCard && <meta content={twitterCard} property={'twitter:card'} />}
      {twitterCreator && <meta content={twitterCreator} property={'twitter:creator'} />}
      {twitterSite && <meta content={twitterSite} property={'twitter:site'} />}
    </NextHead>
  );
};

export default Head;
