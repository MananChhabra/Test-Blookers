
import express from 'express';
import { addPost, getPosts } from '../controllers/posts-controller';
const postRouter = express.Router();


postRouter.get('/', getPosts);
postRouter.post('/add', addPost );

export default postRouter;
