import styles from '../styles/Card.module.css';
import { useState, useEffect } from 'react';

export default function CardHero () {
     
      const [article, setArticle] = useState ([]);
      
      useEffect(() => {
        fetch('http://localhost:3000/articles').then(response => response.json()).then((data) => {
          setArticle(data.data)
          });
          }, 
          []);
    
          const watch = article.map((e,i) => {
            return (
                <div className={styles.main}>
                    <div className={styles.imgCard}>
                        <img className={styles.img} src='./bracelet.jpg' ></img>
                    </div>
                    <div className={styles.priceCard}>
                        <h3 className={styles.price}>{e.price} €</h3>
                    </div>
                    <div className={styles.btnCard}>
                        <button className={styles.btn}>bouton</button>
                    </div> 
                </div>
            ) 
          })
    return (
        <>{watch}</>
    )
}