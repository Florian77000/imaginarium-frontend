import styles from '../styles/Card.module.css'

export default function CardHero () {
    return (
        <div className={styles.main}>
            <div className={styles.imgCard}>
                <img className={styles.img} src='./bracelet.jpg' ></img>
            </div>
            <div className={styles.textCard}>
                <h2 className={styles.text}>Title</h2>
                <p className={styles.text}>Texte explicatif</p>
            </div>
            <div className={styles.btnCard}>
                <button className={styles.btn}>bouton</button>
            </div>        
        </div>
    )
}