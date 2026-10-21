import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import sizes from '@/lib/image-sizes.json';

interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
}

const sizeMap = sizes as unknown as Record<string, [number, number]>;

/** A framed, zoomable screenshot with an optional caption. Click to enlarge. */
export function Screenshot({ src, alt, caption }: ScreenshotProps) {
  const [width, height] = sizeMap[src] ?? [1080, 593];

  return (
    <figure className="sn-figure" style={{ maxWidth: Math.min(width, 860) }}>
      <ImageZoom
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 900px) 100vw, 860px"
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
