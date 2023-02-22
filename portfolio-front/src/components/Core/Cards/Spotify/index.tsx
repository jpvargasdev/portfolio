import type React from 'react';
import type { HTMLAttributes } from 'react';

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any;
  url: string;
  background: string;
  wide?: boolean;
  width?: number | string;
  height?: number | string;
  frameBorder?: number | string;
  allow?: string;
}

const SpotifyCard = ({
  url,
  background,
  style = {},
  wide = false,
  width = '100%',
  height = 360,
  frameBorder = 0,
  allow = 'encrypted-media',
  ...props
}: SpotifyProps) => {
  return (
    <div
      className="h-full w-full rounded-3xl"
      style={{
        backgroundColor: background,
      }}
    >
      <iframe
        title="Spotify Web Player"
        src={url}
        width={width}
        height={height}
        allow={allow}
        style={{
          ...style,
        }}
        {...props}
      />
    </div>
  );
};

export default SpotifyCard;
