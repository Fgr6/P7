
import classes from '../../styles/Header.module.css'
import logoHeader from '../../assets/logoHeader.svg'
import logoMenu from '../../assets/burger-bar.png'


function Header() {
    function handleClick(e) {
        const navLinks = document.querySelector(`.${classes.navLinks}`)
        if(navLinks.style.marginLeft === "-100%"){
            navLinks.style.marginLeft = "0px"
        } else {
            navLinks.style.marginLeft = "-100%"
        }
        
    }
    function handleLogout(e) {
        localStorage.removeItem("id")
        localStorage.removeItem("token")
    }
    return (
        <div>
            <section className={classes.header}>
                <nav className={classes.boutonHeader}>
                    <a href="/"><img src={logoHeader} alt="Groupomania" className={classes.logoHeader} /></a>
                    <div className={classes.navLinks}>
                        <ul>
                            <li><a href="/ActuForm" className={classes.publication}>Nouvelle publication</a></li>
                            <li><a href="/" className={classes.logout} onClick={handleLogout}>Déconnexion</a></li> 
                        </ul>
                    </div>
                    <img src={logoMenu} alt="Menu hamburger" className={classes.menuHamb} onClick={handleClick}/>
                </nav>
            </section>
        </div>
    )
}

export default Header 