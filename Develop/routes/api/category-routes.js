const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const categoryData = await Category.findAll({
    attributes: ['id', 'category_id'],
      // be sure to include its associated Products
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {

      // be sure to include its associated Products
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'category_id']
      }]
    });
    if (!categoryData) {
      res.status(404).json({ message: 'Category not found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (e) {
    res.status(400).json(e);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    const updateCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id
        }
      },
    );

    res.status(200).json(updateCategory);

  } catch (e) {
    res.status(400).json(e)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCategory) {
      res.status(404).json({ message: 'No category found with that id' });
      return;
    }
    res.status(200).json(deleteCategory);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
