import { Router } from 'express';
import * as Categories from '../controllers/category';

const router = Router();

router.get('/', async (req, res) => {
    const categories = await Categories.getCategories();
    return res.send(categories);
});

export default router;