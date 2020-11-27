import express from 'express';
const Router = express.Router();
import * as cont from '../controllers/user';

/**
 * @swagger
 * /api/v1/user:
 *  get:
 *      description: Greetings
 *      responses:
 *          '200':
 *              description: Successful greeting
 *              schema:
 *                   type: array
 *                   items:
 *                   $ref: '#/definitions/User'
 */
Router.get('/', (req, res) => res.send('Hello world'));
Router.post('/', cont.login);

export default Router;
