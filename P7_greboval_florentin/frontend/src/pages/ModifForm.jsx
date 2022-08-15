import Header from '../components/Header/index'
import classes from '../styles/ActuForm.module.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {  useEffect, useState} from 'react'
import { useRef } from 'react'



function ModifForm() {
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

  const token = localStorage.getItem("token")

  const idPost = useParams()

  const titreInputRef = useRef()
  const textInputRef = useRef()
  const imgInputRef = useRef()

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/api/actu/${idPost.id}`, {headers: { 'Content-type': 'multipart/form-data','Authorization' : 'Bearer ' + token}})
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.response))
      
  // eslint-disable-next-line
  },[])

  useEffect(() => {
    const titrePost = document.getElementById('titre')
    titrePost.value = data.titre
    const messPost = document.getElementById('texte')
    messPost.value = data.message
    const imgPost = document.getElementById('image')
    imgPost.src = data.imageUrl
  })
   
 
  

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const valueTitre = titreInputRef.current.value
    const valueText = textInputRef.current.value
    const image = document.querySelector('input[type=file]').files[0]
    const userId = localStorage.getItem("id")
    const actu = {
      userId: userId,
      titre: valueTitre,
      message: valueText,
      image: image,
    }
    axios.put(`http://localhost:5000/api/actu/${idPost.id}`,actu, {headers: { 'Content-type': 'multipart/form-data','Authorization' : 'Bearer ' + token}})
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error.response))
   
    navigate('/Actu')

  }

  return(
    <div>
      <section className={classes.actu}>
      <Header />
      <div className={classes.form}>
          <h1>Modification</h1>
          <form>
          <div className={classes.inputTitre}>
              <label htmlFor="titre">Titre :</label>
              <input type="text" id="titre"  ref={titreInputRef} required/>
          </div>

          <div className={classes.inputTexte}>
              <label htmlFor="texte">Que voulez-vous raconter ?</label>
              <textarea id="texte" ref={textInputRef} />
          </div>
          <div className={classes.inputImage}>
              <input type="file"  accept='image/*' onChange={previewFile}  src=""/>
              <img src="https://cdn-icons-png.flaticon.com/512/48/48639.png" height={200} alt="" className='imgForm' ref={imgInputRef} id="image"/>
          </div>
          <div className={classes.bouton}>
          <button type="submit" onClick={handleSubmit}>Publier</button>
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

  
  
  export default ModifForm