const Post = require('../models/Post');

// Get all not accepted
export const listToAccept = async (req, res) => {
	const admin = process.env.ADMIN == req.query.admin;
	if(!admin) res.redirect('/');
	try {
		const posts = await Post.find({accepted: false}).sort({createdAt: 'desc'});
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json({message: 'Błąd serwera', error: error});
	}
}

// Get Single Post for admin

export const showToAccept = async (req, res) => {
  const slug = req.params.slug;
  const admin = process.env.ADMIN == req.query.admin;

	if(!admin) res.redirect('/');
  try {
    const post = await Post.findOne({slug});
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({message: 'Błąd serwera', error: error});
  }
}

// update Single Post
export const updateToAccept = async (req, res) => {
	console.log(req.body)
	const { slug } = req.body;
	try {
		const post = await Post.findOneAndUpdate({'slug' : slug}, req.body, {new: true});
		res.status(201).json(post);
	} catch (error) {
		res.status(500).json({message: 'Nie udało się zapisać ogłoszenia', error: error});
	}
}