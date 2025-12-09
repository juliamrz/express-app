import { Router } from 'express';
const router = Router();

import { getGoods } from '../utilities/goods.js';

router.get('/', async (req, res) => {
  const goods = await getGoods();
  const categories = Object.keys(goods);
  res.render('category', { categories });
})

router.get('/:categoryUrl', async (req, res) => {
  const { categoryUrl } = req.params;
  const goods = await getGoods();
  if (!goods[categoryUrl]) {
    return res.status(404).send('Category not found');
  }
  const categories = [
    {
      title: `${categoryUrl} catalog`,
      items: goods[categoryUrl]
    }
  ];

  res.render('main', { categories });
})

export default router;
