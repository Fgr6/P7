/* eslint-disable no-template-curly-in-string */
import Header from '../components/Header/index'
import classes from '../styles/Actu.module.css'
import iconLike from '../assets/iconLike.svg'
import { useNavigate} from 'react-router-dom'
import { useEffect, useState} from 'react'
import axios from 'axios'
import React from 'react'




function Actu() {
const verifId = localStorage.getItem("id")
const token = localStorage.getItem("token")
let navigate = useNavigate()

useEffect(() => {
  if(verifId){  
  }
  else{
    navigate("/Login")
  }
})
const [data, setData] = useState([])
useEffect(() => {
  const getActu = () => {
    axios.get("http://localhost:5000/api/actu", {headers: {'Content-type': 'multipart/form-data', 'Authorization' : 'Bearer ' + token}})
     
    .then((res) => 
    setData(res.data))
      
    .catch((error) => console.log(error))      
  }
  getActu()
    // eslint-disable-next-line
},[])
useEffect(() => {
  
  for(let i = 0; i < data.length; i++){
  if(verifId  === data[i].userId){
    const bouton = document.querySelectorAll(`.${classes.boutonModif}`)
    bouton[i].style.display = "block"
  }else{
    const bouton = document.querySelectorAll(`.${classes.boutonModif}`)
    bouton[i].style.display = "none"
  }

}
})

const handleClick = (e)  => {
  const el = e.target.closest('article')
  const id = localStorage.getItem("id")
  const actu = {
    userId: id
  }

  axios.post(`http://localhost:5000/api/actu/${el.id}/like`, actu, {headers: { 'Authorization' : 'Bearer ' + token}})
  .then(res => {
    if(res.data.message === 'Annulation Like Ok'){
      const like = e.target.nextElementSibling
      like.innerHTML = (parseInt(like.innerText)-1)
      console.log(like)
    }else{
      const like =  e.target.nextElementSibling
      like.innerHTML = (parseInt(like.innerText)+1)
      console.log(like)
    }
  })
  .catch((error) => console.log(error.response))
  
}

const handleDelete = (e) => {
  const el = e.target.closest('article')
  axios.delete(`http://localhost:5000/api/actu/${el.id}`, {headers: { 'Authorization' : 'Bearer ' + token}})
  .then((res) => console.log(res))
  .catch((error) => console.log(error.response))

  window.location.reload()
}


const handleModif =  (e) => {
  const el = e.target.closest('article')
  const id = el.id

 navigate('/ModifForm/' +  id)
}

  return(
    <div>
      <Header />
      <section className={classes.actu}>
      <div className={classes.listePubli} id="listePubli">
      {data.map((actu) => (
        <article className={classes.publication} key={actu._id} id={actu._id}>
          <div className={classes.titrePubli}>
            <p className='titre' >{actu.titre}</p>
            </div>
            <div className={classes.textPubli}>
              <p className='message'>{actu.message}</p>
            </div>
            <div className={classes.imgPubli}>
            <img src={actu.imageUrl} alt='' id="image"/>
            </div>
            <div className={classes.like}>
            <button type='button' onClick={handleClick}><img src={iconLike} alt='' /><p className='like'>{actu.likes}</p></button>
            </div>
            <div className={classes.boutonModif} id="boutonModif">
            <button type='button' className={classes.modif} onClick={handleModif}>Modifier</button>
            <button type='button' className={classes.delete} onClick={handleDelete}>Supprimer</button>
            </div>
          </article>
      ))}   
      </div>
      </section> 
    </div>
  )
}

export default Actu

