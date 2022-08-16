import Header from '../components/Header/index'
import classes from '../styles/ActuForm.module.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'


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
  const titreInputRef = useRef()
  const textInputRef = useRef()
  const imgInputRef = useRef()

  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const valueTitre = titreInputRef.current.value
    const valueText = textInputRef.current.value
    const image = document.querySelector('input[type=file]').files[0]
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("id")
    const role = localStorage.getItem("role")


    const actu = {
      userId: userId,
      titre: valueTitre,
      message: valueText,
      image: image,
    }
     
   axios({
    method: 'POST',
    url: 'http://localhost:5000/api/actu',
    data: actu,
    headers: {'Content-type': 'multipart/form-data', 'Authorization' : 'Bearer ' + token}
   })
    .then((res) => {
      console.log(res)
      navigate("/Actu/" + userId + "/" + role)
    })
    .catch((error) => {
      console.log(error)
    })

  }

  const handleClick = (e) => {
    const userId = localStorage.getItem("id")
    const role = localStorage.getItem("role")
    navigate("/Actu/" + userId + "/" + role)
  }
    return(
      <div>
        <section className={classes.actu}>
        <Header />
        <div className={classes.form}>
            <h1>Nouvelle publication</h1>
            <form onSubmit={handleSubmit}>
            <div className={classes.inputTitre}>
                <label htmlFor="titre">Titre :</label>
                <input type="text" id="titre"  ref={titreInputRef} required/>
            </div>

            <div className={classes.inputTexte}>
                <label htmlFor="texte">Que voulez-vous raconter ?</label>
                <textarea id="texte" ref={textInputRef} />
            </div>
            <div className={classes.inputImage}>
                <input type="file"  accept='image/*' onChange={previewFile} />
                <img src="https://cdn-icons-png.flaticon.com/512/48/48639.png" height={200} alt="" className='imgForm' ref={imgInputRef} />
            </div>
            <div className={classes.bouton}>
            <button type="submit">Publier</button>
            <button className={classes.boutonRetour} onClick={handleClick}>Retour</button>
            </div>
        </form>
        </div>
        </section> 
      </div>
    )
    
  }

  
  
  export default ActuForm