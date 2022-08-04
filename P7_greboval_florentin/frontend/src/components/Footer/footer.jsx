import classes from '../../styles/Footer.module.css'


function Footer() {
  return(
    <div>
    <section className={classes.footer}>
    <div className={classes.liens}>
            <a href="/#">Contact</a>
            <a href="/#">Plan du site</a>
            <a href="/#">Groupomania</a>
    </div>
    </section>
    </div>
  )
}

export default Footer