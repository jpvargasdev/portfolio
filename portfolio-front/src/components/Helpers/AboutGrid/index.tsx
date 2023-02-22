import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// cards
import AboutHeader from '../../Core/Cards/AboutHeader';
import TwitterCard from '../../Core/Cards/Twitter';
import { isTouchDevice } from '../../../utils';
import SpotifyCard from '../../Core/Cards/Spotify';
import PhotosCard from '../../Core/Cards/Photos';
import ContactCard from '../../Core/Cards/Contact';

const ResponsiveGridLayout = WidthProvider(Responsive);
const isDraggable = !isTouchDevice();

const BREAKPOINTS = { xxs: 0, xs: 480, sm: 768, md: 1024, lg: 1280 };
const COLS = { xxs: 1, xs: 2, sm: 2, md: 4, lg: 4 };
const LAYOUTS = {
  xxs: [{ i: 'header', x: 0, y: 0, w: 1, h: 3, isDraggable }],
  xs: [
    { i: 'header', x: 0, y: 0, w: 1, h: 3, isDraggable },
    { i: 'twitter', x: 1, y: 1, w: 1, h: 1, isDraggable },
    { i: 'podcast', x: 1, y: 2, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 1, y: 3, w: 1, h: 1, isDraggable },
    { i: 'music', x: 1, y: 4, w: 1, h: 1, isDraggable },
  ],
  sm: [
    { i: 'header', x: 0, y: 0, w: 2, h: 2, isDraggable },
    { i: 'twitter', x: 2, y: 0, w: 1, h: 1, isDraggable },
    { i: 'podcast', x: 3, y: 0, w: 1, h: 1, isDraggable },
    { i: 'music', x: 2, y: 0, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 3, y: 0, w: 1, h: 1, isDraggable },
  ],
  md: [
    { i: 'header', x: 0, y: 0, w: 2, h: 3, isDraggable },
    { i: 'twitter', x: 2, y: 0, w: 1, h: 1, isDraggable },
    { i: 'podcast', x: 3, y: 0, w: 1, h: 1, isDraggable },
    { i: 'music', x: 2, y: 0, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 3, y: 0, w: 1, h: 1, isDraggable },
    { i: 'contact', x: 2, y: 0, w: 2, h: 1, isDraggable },
  ],
  lg: [
    { i: 'header', x: 0, y: 0, w: 2, h: 3, isDraggable },
    { i: 'twitter', x: 2, y: 0, w: 1, h: 1, isDraggable },
    { i: 'podcast', x: 3, y: 0, w: 1, h: 1, isDraggable },
    { i: 'music', x: 2, y: 1, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 3, y: 1, w: 1, h: 1, isDraggable },
    { i: 'contact', x: 2, y: 0, w: 2, h: 1, isDraggable },
  ],
};

function AboutGrid() {
  const style = 'bg-card_light rounded-3xl hover:shadow-md cursor-grab';

  return (
    <ResponsiveGridLayout
      layouts={LAYOUTS}
      cols={COLS}
      breakpoints={BREAKPOINTS}
      rowHeight={360}
      isResizable={false}
      margin={[24, 24]}
    >
      <div className={style} key="header">
        <AboutHeader />
      </div>
      <div className={style} key="twitter">
        <TwitterCard
          link="https://twitter.com/jpvargasdev"
          label="Read mid tweets →"
        />
      </div>
      <div className={style} key="podcast">
        <SpotifyCard
          url="https://open.spotify.com/embed/episode/1xV0Of0FJyqjEch5ZpwE7v?utm_source=generator"
          background="#5820c0"
        />
      </div>
      <div className={style} key="photos">
        <PhotosCard />
      </div>
      <div className={style} key="music">
        <SpotifyCard
          url="https://open.spotify.com/embed/playlist/2EJYdiT8e1i33nsyOiBYY4?utm_source=generator&theme=0"
          background="#282828"
        />
      </div>
      <div className={style} key="contact">
        <ContactCard />
      </div>
    </ResponsiveGridLayout>
  );
}

export default AboutGrid;
