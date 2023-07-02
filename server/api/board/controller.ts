import { boardRepository } from '$/repository/boardRepository';
import { colorRepository } from '$/repository/colorRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: ({ user }) => ({
    status: 200,
    body: {
      board: boardRepository.getBoard().board,
      yourColor: colorRepository.createColor(user.id),
      turnColor: boardRepository.getBoard().turn,
    },
  }),
  post: ({ body, user }) => ({
    status: 201,
    body: boardRepository.clickBoard(body.x, body.y, user.id),
  }),
}));
