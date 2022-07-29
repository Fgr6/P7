import classes from '../styles/AuthForm.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import logo from '../assets/logo.png'


function Insc() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    let navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()

        const valueEmail = emailInputRef.current.value;
        const valuePassword = passwordInputRef.current.value;
        console.log(valueEmail, valuePassword)


        if(valueEmail.trim().length === 0 || valuePassword.trim().length === 0){
            return
        }
        
        const regExEmail = (value) => {
            // eslint-disable-next-line
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        }

        if(!regExEmail(valueEmail)){
            return;
        }
        
        navigate('/Actu')
        console.log(valueEmail, valuePassword)
        emailInputRef.current.value = ""
        passwordInputRef.current.value = ""
    }


    return (
        <div>
        <section className={classes.auth}>
        <div className={classes.logo}>
        <img src={logo} alt="Groupomania" className={classes.logoAcc} />
        </div>
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
            <div className={classes.inputEmail}>
                <label htmlFor="email">Saisir votre email :</label>
                <input type="email" id="email" ref={emailInputRef} required/>
            </div>

            <div className={classes.inputPassword}>
                <label htmlFor="password">Saisir votre mot de passe :</label>
                <input type="password" id="password"  ref={passwordInputRef} required/>
            </div>
            <div className={classes.bouton}>
            <button type="submit" onClick={() => {}}>Se connecter</button>
            <Link to="/">
            <button className={classes.boutonRetour}>Retour</button>
            </Link>
            </div>
        </form>
        </section>
        </div>
    )
}
export default Insc