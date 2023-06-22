import type { UserId } from '$/commonTypesWithClient/branded';

const colorDict: { black?: UserId; white?: UserId } = {};
export const colorUseCase = {
  createColor: (userId: UserId): number => {
    if (colorDict.black === userId) {
      return 1;
    } else if (colorDict.white === userId) {
      return 2;
    } else if (colorDict.black === undefined) {
      colorDict.black = userId;
      return 1;
    } else {
      colorDict.white = userId;
      return 2;
    }
  },
};
