import {Router} from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchControllers';
const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fischer', PageController.fischer);

router.search('/search', SearchController.search);

export default router;