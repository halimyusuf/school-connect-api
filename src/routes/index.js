import userRouter from './user';

const baseRoute = '/api/v1';

export default (app) => {
    app.use(`${baseRoute}/user`, userRouter);
};
