export type Methods = {
  get: {
    resBody: number[][];
  };
  post: {
    reqBody: { x: number; y: number };
    resBody: number[][];
  };
};
