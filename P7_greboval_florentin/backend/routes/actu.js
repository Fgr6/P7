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

/*Affichage de l'actu sellectionné via l'id*/
router.get('/:id', auth, actuCtrl.uneActu);

/*Supprimer une actu*/
router.delete('/:id', auth, actuCtrl.suppActu);

/*Like */
router.post('/:id/like', auth, actuCtrl.likeActu);


module.exports = router;