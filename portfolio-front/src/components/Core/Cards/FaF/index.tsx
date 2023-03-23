import React from 'react';
import Button from '../../../Base/Button';
import GameOfLife from '../../GameOfLife';

import './faf.css';

function FunAndFreelance() {
  return (
    <div className="p-4 flex flex-col justify-between h-full w-full">
      <div className="flex flex-col xs:flex-row justify-around content-center items-center">
        <div className="rounded-3xl flex flex-row rotate-0 xs:-rotate-12 bg-font_primary h-40 w-40 mt-10 hover:scale-110 justify-center items-center border shadow">
          <GameOfLife />
        </div>
        <div className="rounded-3xl flex flex-row  bg-[#FFDC25] h-40 w-40 hover:scale-110 border shadow mt-10 xs:mt-0">
          <img src="/img/routte.png" className="object-cover" />
        </div>
        <div className="rounded-3xl flex flex-row rotate-0 xs:rotate-12 bg-background_light h-40 w-40 mt-10 hover:scale-110 border shadow">
          <img src="/img/artgrama.webp" />
        </div>
      </div>

      <Button>
        <a>Check my projects →</a>
      </Button>
    </div>
  );
}

export default FunAndFreelance;
