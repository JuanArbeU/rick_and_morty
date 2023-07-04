const { getCharById } = require('../controllers/getCharById')
const { login } = require('../controllers/login')
const { postFav, deleteFav } = require('../controllers/handleFavorites')

const router = require('express').Router(); // Router permite crear rutas en un archivo separado al index ppal


router.get('/character/:id', getCharById) 
router.get('/login', login) 
router.post('/fav', postFav) 
router.delete('/fav/:id', deleteFav) 

module.exports = router;