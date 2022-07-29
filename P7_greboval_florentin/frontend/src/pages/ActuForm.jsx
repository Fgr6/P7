import Header from '../components/Header/index'
import classes from '../styles/ActuForm.module.css'
import { Link } from 'react-router-dom'

function ActuForm() {
  const {previewImg} = 'https://images.assetsdelivery.com/compings_v2/koblizeek/koblizeek1902/koblizeek190200055.jpg'
    return(
      <div>
        <section className={classes.actu}>
        <Header />
        <div className={classes.form}>
            <h1>Nouvelle publication</h1>
            <form onSubmit={() => {}}>
            <div className={classes.inputTitre}>
                <label htmlFor="titre">Titre :</label>
                <input type="text" id="titre"  required/>
            </div>

            <div className={classes.inputTexte}>
                <label htmlFor="texte">Que voulez-vous raconter ?</label>
                <input type="text" id="texte" />
            </div>
            <div className={classes.inputImage}>
                <input type="file" name="image-upload" id="input" accept='image/*'/>
                <img src={previewImg} id="img" alt=""/>
            </div>
            <div className={classes.bouton}>
            <Link to="/Actu">
            <button type="submit" onClick={() => {}}>Se connecter</button>
            </Link>
            <Link to="/Actu">
            <button className={classes.boutonRetour}>Retour</button>
            </Link>
            </div>
        </form>
        </div>
        </section> 
      </div>
    )
    
  }

  
  
  export default ActuForm