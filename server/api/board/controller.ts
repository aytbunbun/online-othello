import { boardRepository } from '$/repository/boardRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: boardRepository.getBoard() }),
  post: ({ body, user }) => ({
    status: 201,
    body: boardRepository.clickBoard(body.x, body.y, user.id),
  }),
}));
