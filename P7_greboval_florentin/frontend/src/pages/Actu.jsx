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

  useEffect(() => {
    const bouton = document.getElementById('boutonModif')
    for(let i = 0; i < data.length; i++)
    if(verifId !== data[i].userId){
      console.log(bouton)
    }else{
      console.log("test")
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
  },[token]) 
 


  
  return(
    <div>
      <Header />
      <section className={classes.actu}>
      <div className={classes.listePubli} id="listePubli">
      {data.map((actu) => (
        <div className={classes.publication} key={actu._id}>
          <div className={classes.titrePubli} id="titrePubli">
            <p>{actu.titre}</p>
            </div>
            <div className={classes.textPubli}>
              <p>{actu.message}</p>
            </div>
            <div className={classes.imgPubli}>
            <img src={actu.imageUrl} alt='' />
            </div>
            <div className={classes.like}>
            <button type='button' ><img src={iconLike} alt='' /></button>
            <p>{actu.likes}</p>
            </div>
            <div className={classes.boutonModif} id="boutonModif">
            <button type='button' className={classes.modif}>Modifier</button>
            <button type='button' className={classes.delete}>Supprimer</button>
            </div>
          </div>
      ))}   
      </div>
      </section> 
    </div>
  )
}

export default Actu