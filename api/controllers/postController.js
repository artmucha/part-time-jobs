const Post = require('../models/Post');
const validator = require('express-validator');

// Get all
module.exports.list = function (req, res, next) {
  Post.find({}, function(err, posts){
    if(err) {
      return res.status(500).json({
        message: 'Error getting records.'
      });
    }
    return res.json(posts);
  });
}


// Get one
module.exports.show = function(req, res) {
  var slug = req.params.slug;
  Post.findOne({slug}, function(err, post){
    if(err) {
      return res.status(500).json({
          message: 'Error getting record.'
      });
    }
    if(!post) {
      return res.status(404).json({
        message: 'No such record'
      });
    }
    return res.json(post);
  });
}


// Create
module.exports.create = [
  validator.body('title', 'Podaj nazwę stanowiska').isLength({ min: 1 }),
  validator.body('experience', 'Wybierz poziom doświadczenia').isLength({ min: 1 }),
  validator.body('language', 'Wybierz główną technologię').isLength({ min: 1 }),
  validator.body('description', 'Opisz swoja ofertę').isLength({ min: 20 }),
  validator.body('company', 'Podaj nazwę firmy lub zleceniodawcy').isLength({ min: 1 }),
  validator.body('min_salary', 'Nie zapomnij o widełkach ;)').isLength({ min: 1 }),
  validator.body('max_salary', 'Nie zapomnij o widełkach ;)').isLength({ min: 1 }),
  validator.body('email', 'Podaj email, na który można wysłać CV').isLength({ min: 1 }),
  validator.body('regulations', 'Zaakceptuj warunki serwisu').notEmpty(),

  function(req, res) {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    let post = new Post(req.body);

    post.save(function(err, post){
      if(err) {
        return res.status(500).json({
            message: 'Error saving record',
            error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: post._id
      });
    })
  }
];