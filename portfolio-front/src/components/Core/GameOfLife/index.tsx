import React, { useEffect } from 'react';

import Grid from './grid';

const maxRows = 15;
const maxCols = 15;
const intervalTime = 250;
const maxIteration = 20;

function defaultGrid(grid: number[][]) {
  const newGrid = { ...grid };

  newGrid[0][0] = 1;
  newGrid[0][1] = 1;
  newGrid[1][0] = 1;
  newGrid[1][3] = 1;
  newGrid[2][1] = 1;
  newGrid[2][2] = 1;
  newGrid[4][3] = 1;
  newGrid[2][3] = 1;

  return newGrid;
}

function initializeRandomGrid(grid: number[][]) {
  const newGrid = { ...grid };

  const ri = Math.floor(Math.random() * maxRows) + 1; // between 0 and 30

  newGrid[0][0] = 1;
  newGrid[0][1] = 1;
  newGrid[1][0] = 1;
  newGrid[1][3] = 1;
  newGrid[2][1] = 1;
  newGrid[2][2] = 1;
  newGrid[4][3] = 1;
  newGrid[2][3] = 1;

  newGrid[ri][ri - 1] = 1;
  newGrid[ri - 1][ri] = 1;
  newGrid[ri - 1][ri - 1] = 1;
  newGrid[ri - 2][ri - 2] = 1;
  newGrid[ri - 3][ri - 3] = 1;

  return newGrid;
}

function checkNeighbours(grid: number[][], i: number, j: number) {
  let neighbours = 0;

  // top
  if (i < maxRows - 1 && grid[i + 1][j]) neighbours++;

  // bottom
  if (i > 0 && grid[i - 1][j]) neighbours++;

  // right
  if (j < maxCols - 1 && grid[i][j + 1]) neighbours++;

  // left
  if (j > 0 && grid[i][j - 1]) neighbours++;

  // Dg bottom-left
  if (i > 0 && j > 0 && grid[i - 1][j - 1]) neighbours++;

  // Dg bottom-right
  if (i < maxRows - 1 && j > 0 && grid[i + 1][j - 1]) neighbours++;

  // Dg top-left
  if (i > 0 && j < maxCols - 1 && grid[i - 1][j + 1]) neighbours++;

  // Dg top-right
  if (i < maxRows - 1 && j < maxCols - 1 && grid[i + 1][j + 1]) neighbours++;

  return neighbours;
}

function calculateNextStep(grid: number[][]) {
  const newGrid = { ...grid };

  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxRows; j++) {
      const neighbours = checkNeighbours(newGrid, i, j);

      // Any live cell with fewer than two live neighbors dies, as if by under population.
      if (grid[i][j] && neighbours < 2) newGrid[i][j] = 0;

      // Any live cell with more than three live neighbors dies, as if by overpopulation.
      if (grid[i][j] && neighbours > 3) newGrid[i][j] = 0;

      // Any live cell with two or three live neighbours lives on to the next generation.
      if ((grid[i][j] && neighbours === 2) || neighbours === 3)
        newGrid[i][j] = 1;

      // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      if (neighbours === 3 && !grid[i][j]) newGrid[i][j] = 1;
    }
  }

  return newGrid;
}

function GameOfLife() {
  const [grid, setGrid] = React.useState<number[][]>(() =>
    Array(maxCols)
      .fill(0)
      .map(() => Array(maxRows).fill(false)),
  );
  const [iteration, setIteration] = React.useState<number>(0);

  useEffect(() => {
    function initializeGrid() {
      let mGrid = [];
      try {
        mGrid = initializeRandomGrid(grid);
      } catch (ex) {
        mGrid = defaultGrid(grid);
      }
      setGrid(mGrid);
    }

    function nextStep() {
      setGrid(calculateNextStep(grid));
      setIteration(iteration + 1);
      if (iteration + 1 === maxIteration) {
        clearInterval(interval);
      }
    }

    initializeGrid();
    const interval = setInterval(nextStep, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Grid grid={grid} rows={maxRows} cols={maxCols} />
    </div>
  );
}

export default GameOfLife;
