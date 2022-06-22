const router = require('express').Router();

module.exports = () => {
  router.get('/', (req, res) => {
    const cats = ['Rosey', 'Puma', 'Mr Buttons', 'Aya'];
    res.json(cats);
  });

  return router;
}