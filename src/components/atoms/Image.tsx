import NextImage, { ImageProps as NextImageProps } from 'next/image';
import type { ReactElement } from 'react';

import { TypeAriaProps, TypeCommonProps } from '@/types';
import { clamps } from '@/utils';

export type ImageProps = TypeCommonProps &
  Pick<TypeAriaProps, 'ariaHidden'> &
  Pick<
    NextImageProps,
    'quality' | 'placeholder' | 'sizes' | 'layout' | 'priority' | 'height' | 'width'
  > & {
    img: StaticImageData;
    alt?: string;
    xCoord?: number;
    yCoord?: number;
    layout?: 'intrinsic' | 'fixed' | 'responsive' | 'fill';
    objectFit?: 'contain' | 'fill' | 'cover' | 'scale-down' | 'none';
  };

/**
 *
 * @param {StaticImageData} img
 * @param {number | undefined} layout
 * @param {number | undefined} xCoord
 * @param {number | undefined} yCoord
 *
 * @see See [Next.js Docs](https://nextjs.org/docs/api-reference/next/image) for properties
 */
const Image = ({
  alt,
  ariaHidden,
  className,
  height,
  id,
  img,
  layout = 'intrinsic',
  objectFit = 'cover',
  placeholder,
  priority,
  quality,
  sizes,
  xCoord,
  yCoord,
  width,
}: ImageProps): ReactElement => (
  <div className={`${className} image-root`}>
    <NextImage
      alt={alt}
      aria-hidden={ariaHidden}
      height={height}
      id={id}
      layout={layout}
      objectFit={objectFit}
      objectPosition={`${xCoord ? `${clamps(xCoord)}%` : 'center'} ${
        yCoord ? `${clamps(yCoord)}%` : 'center'
      }`}
      placeholder={placeholder}
      priority={priority}
      quality={quality}
      sizes={sizes}
      src={img}
      width={width}
    />
  </div>
);

export default Image;
