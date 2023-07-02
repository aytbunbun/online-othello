export type Methods = {
  get: {
    resBody: { board: number[][]; yourColor: number; turnColor: number };
  };
  post: {
    reqBody: { x: number; y: number };
    resBody: number[][];
  };
};
