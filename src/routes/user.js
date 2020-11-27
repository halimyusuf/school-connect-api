import express from 'express';
const Router = express.Router();
import * as cont from '../controllers/user';

Router.get('/', (req, res) => res.send('Hello world'));
Router.post('/', cont.login);

export default Router;
