import type { UserId } from '$/commonTypesWithClient/branded';
import { colorRepository } from './colorRepository';

const board: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 1, 2, 3, 0, 0],
  [0, 0, 3, 2, 1, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const directions: { y: number; x: number }[] = [
  { y: -1, x: 0 },
  { y: -1, x: 1 },
  { y: 0, x: 1 },
  { y: 1, x: 1 },
  { y: 1, x: 0 },
  { y: -1, x: -1 },
  { y: 0, x: -1 },
  { y: 1, x: -1 },
];
let turn = 1;

export const gameSystem = (
  x: number,
  y: number,
  isOrange: boolean,
  turn: number,
  newBoard: number[][]
) => {
  let isOrangePlace = false;
  for (const dir of directions) {
    for (let i = 1; i < 8; i++) {
      if (newBoard[y + dir.y * i] === undefined) {
        break;
      } else if (newBoard[y + dir.y * i][x + dir.x * i] === turn) {
        break;
      } else if (newBoard[y + dir.y * i][x + dir.x * i] === 0) {
        break;
      } else if (newBoard[y + dir.y * i][x + dir.x * i] === 3) {
        break;
      } else if (
        newBoard[y + dir.y * i][x + dir.x * i] === 3 - turn &&
        newBoard[y + dir.y * (i + 1)] !== undefined &&
        newBoard[y + dir.y * (i + 1)][x + dir.x * (i + 1)] === turn
      ) {
        if (!isOrange) {
          newBoard[y][x] = turn;
          for (let m = 1; m <= i + 1; m++) {
            newBoard[y + dir.y * m][x + dir.x * m] = turn;
          }
        } else {
          if (i > 0) {
            isOrangePlace = true;
          }
        }
        break;
      }
    }
  }
  return { board: newBoard, orange: isOrangePlace };
};

export const onClick = (x: number, y: number) => {
  console.table(board);
  console.log(x, y);
  if (board[y][x] === 3) {
    const stones = gameSystem(x, y, false, turn, board).board;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        stones[i][j] %= 3;
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (gameSystem(j, i, true, 3 - turn, stones).orange && stones[i][j] === 0) {
          stones[i][j] = 3;
        }
      }
    }

    let nextTurnColor = 3 - turn;
    if (!stones.some((row) => row.includes(3))) {
      nextTurnColor = turn;
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        stones[i][j] %= 3;
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (gameSystem(j, i, true, nextTurnColor, stones).orange && stones[i][j] === 0) {
          stones[i][j] = 3;
        }
      }
    }
    return { turnColor: turn, board, onClick };
  }
};

export const boardRepository = {
  getBoard: (): { board: number[][]; turn: number } => {
    return { board, turn };
  },
  clickBoard: (x: number, y: number, userId: UserId): number[][] => {
    console.log(111, x, y);
    if (turn === colorRepository.createColor(userId)) {
      onClick(x, y);
      turn = 3 - turn;
    }
    return board;
  },
};
