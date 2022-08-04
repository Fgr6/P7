import Header from '../components/Header/index'
import classes from '../styles/ActuForm.module.css'
import { Link } from 'react-router-dom'

function ActuForm() {
  function previewFile() {
    const preview = document.querySelector('.imgForm')
    const file = document.querySelector('input[type=file]').files[0]
    const reader = new FileReader()

    reader.addEventListener("load", function () {
      preview.src = reader.result
    }, false)

    if(file) {
      reader.readAsDataURL(file);
    }

  }
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
                <textarea id="texte" />
            </div>
            <div className={classes.inputImage}>
                <input type="file"  accept='image/*' onChange={previewFile}/>
                <img src="https://cdn-icons-png.flaticon.com/512/48/48639.png" height={200} alt="" className='imgForm'/>
            </div>
            <div className={classes.bouton}>
            <Link to="/Actu">
            <button type="submit" onClick={() => {}}>Publier</button>
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