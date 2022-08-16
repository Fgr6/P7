import classes from '../styles/AuthForm.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import logo from '../assets/logo.png'
import axios from 'axios';


function Login() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    let navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const valueEmail = emailInputRef.current.value;
        const valuePassword = passwordInputRef.current.value;

        const userLogin = {
            email: valueEmail,
            password: valuePassword,
        }
        axios.post("http://localhost:5000/api/auth/login", userLogin)
        .then((res) => {
            const userId = res.data.userId
            const token = res.data.token
            const role = res.data.roles
            localStorage.setItem("role", role)
            localStorage.setItem("id", userId)
            localStorage.setItem("token", token)
            navigate("/Actu/" + userId + "/" + role)
        })
        .catch((error) => {
            console.log('Erreur')
        })
        
}
    
    return (
        <div>
        <section className={classes.auth}>
        <div className={classes.logo}>
        <img src={logo} alt="Groupomania" className={classes.logoAcc} />
        </div>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
            <div className={classes.inputEmail}>
                <label htmlFor="email">Saisir votre email :</label>
                <input type="email" id="email" ref={emailInputRef} />
            </div>

            <div className={classes.inputPassword}>
                <label htmlFor="password">Saisir votre mot de passe :</label>
                <input type="password" id="password" ref={passwordInputRef} />
            </div>
            <div className={classes.bouton}>
            <button type="submit" >Se connecter</button>
            <Link to="/">
            <button className={classes.boutonRetour}>Retour</button>
            </Link>
            </div>
        </form>
        </section>
        </div>
    )
}
export default Login