import styles from '../styles/Card.module.css'

export default function CardHero () {
    return (
        <div className={styles.main}>
            <div className={styles.imgCard}>
                <img className={styles.img} src='./bracelet.jpg' ></img>
            </div>
            <div className={styles.priceCard}>
                <h3 className={styles.price}>Price €</h3>
            </div>
            <div className={styles.btnCard}>
                <button className={styles.btn}>bouton</button>
            </div>        
        </div>
    )
}