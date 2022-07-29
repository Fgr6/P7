
import classes from '../../styles/Header.module.css'
import logoHeader from '../../assets/logoHeader.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <section className={classes.header}>
                <img src={logoHeader} alt="Groupomania" className={classes.logoHeader} />
                <div className={classes.boutonHeader}>
                    <Link to ="/ActuForm">
                    <button type='button'className={classes.publication}>Nouvelle publication</button>
                    </Link>
                    <Link to ="/">
                    <button type='button'className={classes.logout}>Déconnexion</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Header 