import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// cards
import TwitterCard from '../../Core/Cards/Twitter';
import { isTouchDevice } from '../../../utils';
import ContactCard from '../../Core/Cards/Contact';
import LinkCard from '../../Core/Cards/Link';

const ResponsiveGridLayout = WidthProvider(Responsive);
const isDraggable = !isTouchDevice();

const BREAKPOINTS = { xxs: 0, xs: 480, sm: 768, md: 1024, lg: 1280 };
const COLS = { xxs: 1, xs: 1, sm: 2, md: 2, lg: 2 };
const LAYOUTS = {
  xxs: [
    { i: 'contact', x: 0, y: 0, w: 1, h: 1, isDraggable },
    { i: 'twitter', x: 0, y: 0, w: 1, h: 1, isDraggable },
    { i: 'link', x: 0, y: 0, w: 1, h: 1, isDraggable },
  ],
  xs: [
    { i: 'contact', x: 0, y: 0, w: 2, h: 1, isDraggable },
    { i: 'twitter', x: 0, y: 1, w: 1, h: 1, isDraggable },
    { i: 'link', x: 0, y: 2, w: 1, h: 1, isDraggable },
  ],
  sm: [
    { i: 'contact', x: 0, y: 0, w: 2, h: 1, isDraggable },
    { i: 'twitter', x: 0, y: 1, w: 1, h: 1, isDraggable },
    { i: 'link', x: 1, y: 2, w: 1, h: 1, isDraggable },
  ],
  md: [
    { i: 'contact', x: 0, y: 0, w: 2, h: 1, isDraggable },
    { i: 'twitter', x: 0, y: 1, w: 1, h: 1, isDraggable },
    { i: 'link', x: 2, y: 1, w: 1, h: 1, isDraggable },
  ],
  lg: [
    { i: 'contact', x: 0, y: 0, w: 2, h: 1, isDraggable },
    { i: 'twitter', x: 0, y: 1, w: 1, h: 1, isDraggable },
    { i: 'link', x: 2, y: 1, w: 1, h: 1, isDraggable },
  ],
};

function AboutGrid() {
  const style = 'bg-card_light rounded-3xl hover:shadow-md cursor-grab';

  return (
    <div className="lg:px-22 xl:px-40 xxl:px-60 sm:px-0">
      <ResponsiveGridLayout
        layouts={LAYOUTS}
        cols={COLS}
        breakpoints={BREAKPOINTS}
        rowHeight={360}
        isResizable={false}
        margin={[24, 24]}
      >
        <div className={style} key="contact">
          <ContactCard />
        </div>
        <div className={style} key="twitter">
          <TwitterCard
            link='https://twitter.com/messages/1248228351459950592-1248228351459950592?text="Hey"'
            label="DM Me →"
          />
        </div>
        <div className={style} key="link">
          <LinkCard />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default AboutGrid;
