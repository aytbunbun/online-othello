import { boardUseCase } from '$/useCase/boardUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: boardUseCase.getBoard() }),
  post: ({ body, user }) => ({
    status: 201,
    body: boardUseCase.clickBoard(body.x, body.y, user.id),
  }),
}));
