import { Router } from 'express';
const router = Router();

import { getGoods } from '../utilities/goods.js';
import getRandomItems from '../utilities/getRandomItems.js';

router.get('/', async (req, res) => {
  const data = await getGoods();
  const categories = Object.keys(data).map(itemKey => {
    return {
      title: itemKey,
      items: getRandomItems(data[itemKey], 4),
    }
  });

  res.render('main', { categories });
});

export default router;
