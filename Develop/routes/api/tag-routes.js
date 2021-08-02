const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
  // find all tags
  const tagData= await Tag.findAll({
    // be sure to include its associated Product data
    include: [{
      model: Product,
      through: ProductTag, 
      //attributes: ['product_name', 'price', 'stock', 'category_id']
    }],
  });
  res.status(200).json(tagData);
  } catch (e) {
  res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
  // find a single tag by its `id`
    const tagData= await Tag.findOne({
      // be sure to include its associated Product data
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        through: ProductTag, 
        //attributes: ['product_name', 'price', 'stock', 'category_id']
      },
    });

  res.status(200).json(tagData);
  } catch (e) {
  res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
  // create a new tag
  const createTag= await Tag.create({
    tag_name: req.body.tag_name,
  });

  res.status(200).json(createTag);
  } catch (e) {
  res.status(500).json(e);
  }
});

router.put('/:id', async (req, res) => {
  try {
  // update a tag's name by its `id` value
  const updateTag= await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(updateTag);
  } catch (e) {
  res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
  // delete on tag by its `id` value
  const deleteTag= await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!deleteTag){
    res.status(404).json({ message: 'No tag found with that id'});
    return;
  }
  res.status(200).json (deleteTag);
  } catch (e) {
  res.status(500).json(e);
  }
});

module.exports = router;
