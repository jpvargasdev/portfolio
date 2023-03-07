import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import type { ImageInfo } from 'google-photos-album-image-url-fetch';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// cards
import Header from '../../Core/Cards/HomeHeader';
import Profile from '../../Core/Cards/Profile';
import Map from '../../Core/Cards/Map';
import Link from '../../Core/Cards/Link';
import TwitterCard from '../../Core/Cards/Twitter';
import CurriculumCard from '../../Core/Cards/Curriculum';
import { isTouchDevice } from '../../../utils';
import Photos from '../../Core/Cards/Photos';
import FunAndFreelance from '../../Core/Cards/FaF';
import Projects from '../../Core/Cards/Projects';
import Blog from '../../Core/Cards/Blog';

const ResponsiveGridLayout = WidthProvider(Responsive);
const isDraggable = !isTouchDevice();

const BREAKPOINTS = { xxs: 0, xs: 480, sm: 767, md: 1024, lg: 1280 };
const COLS = { xxs: 1, xs: 2, sm: 3, md: 4, lg: 4 };
const LAYOUTS = {
  xxs: [
    { i: 'header', x: 0, y: 0, w: 1, h: 2, isDraggable },
    { i: 'profile', x: 0, y: 1, w: 1, h: 1, isDraggable },
    { i: 'map', x: 0, y: 2, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 0, y: 3, w: 1, h: 1, isDraggable },
    { i: 'twitter', x: 0, y: 4, w: 1, h: 1, isDraggable },
    { i: 'funandfreelance', x: 0, y: 5, w: 1, h: 2, isDraggable },
    { i: 'projects', x: 0, y: 6, w: 1, h: 2, isDraggable },
    { i: 'curriculum', x: 0, y: 7, w: 1, h: 1, isDraggable },
    { i: 'link', x: 0, y: 8, w: 1, h: 1, isDraggable },
    { i: 'blog', x: 0, y: 9, w: 1, h: 1, isDraggable },
  ],
  xs: [
    { i: 'header', x: 0, y: 0, w: 1, h: 2, isDraggable },
    { i: 'profile', x: 1, y: 0, w: 1, h: 1, isDraggable },
    { i: 'map', x: 1, y: 1, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 1, y: 2, w: 1, h: 1, isDraggable },
    { i: 'twitter', x: 0, y: 2, w: 1, h: 1, isDraggable },
    { i: 'funandfreelance', x: 0, y: 3, w: 2, h: 1, isDraggable },
    { i: 'projects', x: 0, y: 4, w: 1, h: 2, isDraggable },
    { i: 'curriculum', x: 1, y: 4, w: 1, h: 1, isDraggable },
    { i: 'link', x: 1, y: 5, w: 1, h: 1, isDraggable },
    { i: 'blog', x: 0, y: 6, w: 2, h: 1, isDraggable },
  ],
  sm: [
    { i: 'header', x: 0, y: 0, w: 2, h: 2, isDraggable },
    { i: 'profile', x: 2, y: 0, w: 1, h: 1, isDraggable },
    { i: 'map', x: 2, y: 1, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 1, y: 3, w: 1, h: 1, isDraggable },
    { i: 'twitter', x: 0, y: 3, w: 1, h: 1, isDraggable },
    { i: 'funandfreelance', x: 0, y: 2, w: 2, h: 1, isDraggable },
    { i: 'projects', x: 2, y: 4, w: 1, h: 2, isDraggable },
    { i: 'curriculum', x: 0, y: 4, w: 1, h: 1, isDraggable },
    { i: 'link', x: 1, y: 4, w: 1, h: 1, isDraggable },
    { i: 'blog', x: 3, y: 4, w: 1, h: 1, isDraggable },
  ],
  md: [
    { i: 'header', x: 0, y: 0, w: 2, h: 2, isDraggable },
    { i: 'profile', x: 2, y: 0, w: 1, h: 1, isDraggable },
    { i: 'map', x: 3, y: 0, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 3, y: 0, w: 1, h: 1, isDraggable },
    { i: 'twitter', x: 3, y: 1, w: 1, h: 1, isDraggable },
    { i: 'funandfreelance', x: 0, y: 3, w: 2, h: 1, isDraggable },
    { i: 'projects', x: 2, y: 4, w: 1, h: 2, isDraggable },
    { i: 'curriculum', x: 1, y: 4, w: 1, h: 1, isDraggable },
    { i: 'link', x: 0, y: 5, w: 1, h: 1, isDraggable },
    { i: 'blog', x: 2, y: 6, w: 2, h: 1, isDraggable },
  ],
  lg: [
    { i: 'header', x: 0, y: 0, w: 2, h: 2, isDraggable },
    { i: 'profile', x: 2, y: 0, w: 1, h: 1, isDraggable },
    { i: 'map', x: 3, y: 0, w: 1, h: 1, isDraggable },
    { i: 'photos', x: 3, y: 0, w: 1, h: 1, isDraggable },
    { i: 'twitter', x: 3, y: 1, w: 1, h: 1, isDraggable },
    { i: 'funandfreelance', x: 0, y: 3, w: 2, h: 1, isDraggable },
    { i: 'projects', x: 2, y: 4, w: 1, h: 2, isDraggable },
    { i: 'curriculum', x: 1, y: 4, w: 1, h: 1, isDraggable },
    { i: 'link', x: 0, y: 5, w: 1, h: 1, isDraggable },
    { i: 'blog', x: 2, y: 6, w: 2, h: 1, isDraggable },
  ],
};

function MainGrid({ images }: { images: ImageInfo[] | null }) {
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
        <Header />
      </div>
      <div className={style} key="profile">
        <Profile />
      </div>
      <div className={style} key="map">
        <Map />
      </div>
      <div className={style} key="twitter">
        <TwitterCard
          link="https://twitter.com/jpvargasdev"
          label="Read mid tweets →"
        />
      </div>
      <div className={style} key="photos">
        <Photos images={images} />
      </div>
      <div className={style} key="funandfreelance">
        <FunAndFreelance />
      </div>
      <div className={style} key="projects">
        <Projects />
      </div>
      <div className={style} key="curriculum">
        <CurriculumCard />
      </div>
      <div className={style} key="link">
        <Link />
      </div>
      <div className={style} key="blog">
        <Blog />
      </div>
    </ResponsiveGridLayout>
  );
}

export default MainGrid;
