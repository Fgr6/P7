import Header from '../components/Header/index'
import classes from '../styles/Actu.module.css'
import iconLike from '../assets/iconLike.svg'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'


function Actu() {
  const verifId = localStorage.getItem("id")
  let navigate = useNavigate()

  useEffect(() => {
    if(verifId){
      console.log("Bravo")
    }
    else{
      navigate("/Login")
    }
  })
  
  return(
    <div>
      <Header />
      <section className={classes.actu}>
      <div className={classes.listePubli}>

      <div className={classes.publication}>
        <div className={classes.titrePubli}>
            <p>Titre</p>
        </div>
        <div className={classes.textPubli}>
            <p>Loriduntgiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={classes.imgPubli}>
            <img src='https://www.photobox.fr/blog/wp-content/uploads/sites/3/2017/05/types-de-lumiere-photo-ideales-768x513.jpg' alt='' />
        </div>
        <div className={classes.like}>
          <button type='button' ><img src={iconLike} alt=''/></button>
          <p>1</p>
        </div>
      </div>
      
      <div className={classes.publication}>
        <div className={classes.titrePubli}>
            <p>Titre</p>
        </div>
        <div className={classes.textPubli}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={classes.imgPubli}>
            <img src='https://cdn-icons-png.flaticon.com/512/48/48639.png' alt='' />
        </div>
        <div className={classes.like}>
          <button type='button' ><img src={iconLike} alt=''/></button>
          <p>1</p>
        </div>
        <div className={classes.boutonModif}>
          <button type='button' className={classes.modif}>Modifier</button>
          <button type='button' className={classes.delete}>Supprimer</button>
        </div>
      </div>
      <div className={classes.publication}>
        <div className={classes.titrePubli}>
            <p>Titre</p>
        </div>
        <div className={classes.textPubli}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={classes.imgPubli}>
            <img src='https://www.photobox.fr/blog/wp-content/uploads/sites/3/2017/05/types-de-lumiere-photo-ideales-768x513.jpg' alt='' />
        </div>
        <div className={classes.like}>
          <button type='button' ><img src={iconLike} alt=''/></button>
          <p>1</p>
        </div>
      </div>
      </div>
      </section> 
    </div>
  )
}

export default Actu