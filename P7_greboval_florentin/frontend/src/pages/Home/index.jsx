import classes from '../../styles/Home.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Home() {
  const texte = "Bienvenue sur l'intranet de Groupomania"
  return(
    <div>
    <section className={classes.home}>
    <div className={classes.logo}>
        <img src={logo} alt="Groupomania" className={classes.logoAcc} />
    </div>
    <h1 className={classes.titre}>{texte}</h1>
    <div className={classes.bouton}>
        <Link to="/login">
            <button className={classes.boutonCo}>Login</button>
          </Link>
          <Link to="/Insc">
            <button className={classes.boutonInsc}>Insciption</button>
          </Link>
    </div>
    </section>
    </div>
  )
}

export default Home