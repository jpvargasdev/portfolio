import React from 'react';

type Props = {
  grid: number[][];
  rows: number;
  cols: number;
};

function Cell({ cellState, id }: { cellState: number; id: string }) {
  return <div className={cellState ? 'cell life' : 'cell dead'} id={id} />;
}

function Grid({ grid, rows, cols }: Props) {
  const rowsArray = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cellId = `${i}"-"${j}`;
      rowsArray.push(<Cell cellState={grid[i][j]} key={cellId} id={cellId} />);
    }
    rowsArray.push(<br key={`${i}br`} />);
  }

  return <div className="grid">{rowsArray}</div>;
}

export default React.memo(Grid);
