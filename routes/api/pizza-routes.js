const router = require('express').Router();
const { getAllpiza, getPizzaById, createPizza, updatePizza, deletePizza } = require('../../controllers/pizza-controller');

router
    .route('/')
    .get(getAllpiza)
    .post(createPizza);

router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;