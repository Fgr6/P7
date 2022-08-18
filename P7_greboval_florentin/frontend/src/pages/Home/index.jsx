import classes from '../../styles/Home.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useEffect } from 'react'



function Home() {

  const verifId = localStorage.getItem("id")
  const role = localStorage.getItem("role")
  let navigate = useNavigate()

  useEffect(() => {
    if(verifId){
      navigate("/Actu/" + verifId + "/" + role)
    }
  })
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