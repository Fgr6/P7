const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer');
const auth = require('../middleware/auth');
const actuCtrl = require('../controllers/actu');

/*Nouvelle Actu*/
router.post('/', auth, multer, actuCtrl.createActu);

/*Affichage des actus sur la page*/
router.get('/', auth,  actuCtrl.listeActu );

/*Modifier l'actu*/
router.put('/:id', auth, multer, actuCtrl.modifyActu);

/*Supprimer une actu*/
router.delete('/:id', auth, actuCtrl.suppActu);

/*Like */
router.post('/:id/like', auth, actuCtrl.likeActu);


module.exports = router;