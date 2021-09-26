const Post = require('../models/Post');
const validator = require('express-validator');

// Get all
export const list = async (req, res) => {
  const language = req.query.language ? { 'language.value' : req.query.language } : {};
  const experience = req.query.experience ? { 'experience.value': req.query.experience } : {};

  try {
    const posts = await Post.find({...language, ...experience});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({message: 'Błąd serwera', error: error});
  }
}

// Get one
export const show = async (req, res) => {
  const slug = req.params.slug;

  try {
    const post = await Post.findOne({slug});
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({message: 'Błąd serwera', error: error});
  }
}

// Create
export const create = [
  validator.body('title', 'Podaj nazwę stanowiska').isLength({ min: 1 }),
  validator.body('experience', 'Wybierz poziom doświadczenia').isLength({ min: 1 }),
  validator.body('language', 'Wybierz główną technologię').isLength({ min: 1 }),
  validator.body('description', 'Opisz swoja ofertę').isLength({ min: 20 }),
  validator.body('company', 'Podaj nazwę firmy lub zleceniodawcy').isLength({ min: 1 }),
  validator.body('salary_min', 'Nie zapomnij o widełkach ;)').isLength({ min: 0 }).isNumeric().withMessage('Kwota w widełkach musi być liczbą'),
  validator.body('salary_max', 'Nie zapomnij o widełkach ;)').isLength({ min: 1 }).isNumeric().withMessage('Kwota w widełkach musi być liczbą'),
  validator.body('email', 'Podaj email, na który można wysłać CV').isLength({ min: 1 }),
  validator.body('regulations', 'Zaakceptuj warunki serwisu').matches("true"),

  async function(req, res) {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors);
    }

    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({message: 'Nie udało się zapisać ogłoszenia', error: error});
    }
  }
];