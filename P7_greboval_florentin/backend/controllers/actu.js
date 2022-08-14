const fs = require('fs');
const Actu = require('../models/Actu');


exports.createActu =  (req, res, next) => {
    const actuObject = req.body.actu;
    const actu = new Actu({
        ...actuObject,
        titre: req.body.titre,
        message: req.body.message,
        userId: req.auth.userId, 
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        usersLiked: []
    });
    actu.save()
      .then(() => res.status(201).json({ message: 'Actu enregistré !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.listeActu = (req, res, next) => {
    Actu.find().sort({"_id": -1})
      .then(actu => res.status(200).json(actu))
      .catch(error => res.status(400).json({ error }));
      
};

exports.uneActu= (req, res, next) => {
  Actu.findOne({ _id: req.params.id })
    .then(actu => res.status(200).json(actu))
    .catch(error => res.status(404).json({ error }));
};

exports.modifyActu = (req, res, next) => {
    const actuObject = req.file ? {
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body};
    Actu.findOne({_id: req.params.id})
        .then((actu) => {
            if (actu.userId != req.auth.userId) {
                res.status(401).json({ message : 'Non authorizé'});
            } else {
                const nomFichier = actu.imageUrl.split('images')[1];
                fs.unlink(`images/${nomFichier}`, ()=> {
                Actu.updateOne({ _id: req.params.id}, { ...actuObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Objet modifié!'}))
                .catch(error => res.status(401).json({ error }));
                })
                
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
  };

  exports.suppActu = (req, res, next) => {
    Actu.findOne({ _id: req.params.id })
      .then(actu => {
        const nomFichier = actu.imageUrl.split('images')[1];
        fs.unlink(`images/${nomFichier}`, () => {
          Actu.deleteOne({_id: req.params.id })
            .then(() => res.status(200).json({ message : 'Actu supprimé' }))
            .catch(error => res.status(400).json({ error }));
        });
      }) 
      .catch(error => res.status(500).json({ error }));
  };
  
  exports.likeActu= (req, res, next) => {
    const uId = req.body.userId;
    Actu.findOne({ _id: req.params.id })
      .then(actu => {
      if(!actu.usersLiked.includes(uId)){
        Actu.updateOne({_id:req.params.id},{$inc:{likes:1},$push:{usersLiked:uId}})
        .then(() => res.status(201).json({message : 'Like Ok' }))
        .catch(error => res.status(400).json( error ))
      }
        if(actu.usersLiked.includes(uId)){
        Actu.updateOne({_id:req.params.id},{$inc:{likes:-1},$pull:{usersLiked:uId}})
        .then(() => res.status(201).json({message : 'Annulation Like Ok' }))
        .catch(error => res.status(400).json( error ))
        }

      })
      .catch(error => res.status(500).json( error ));
  };