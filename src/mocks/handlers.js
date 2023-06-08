import { rest } from 'msw';

export const handlers = [
  // /user へのGETリクエストを処理
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'usuda',
        age: 29,
      })
    );
  }),
];
