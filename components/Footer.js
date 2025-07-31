import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.footerList}>
                <li><Link href=''><a className={styles.textFooter}>Accueil</a></Link></li>
                <li><Link href=''><a className={styles.textFooter}>Conditions générales</a></Link></li>
                <li><Link href=''><a className={styles.textFooter}>A propos</a></Link></li>
                <li><Link href=''><a className={styles.textFooter}>Nous contacter</a></Link></li> 
            </div>
             <div className={styles.reseau}>
                <div>
                    <p>Nous suivre :</p>
                </div>
                <div className={styles.footerBrands}>
                    <Link href=''><a className={styles.footerBrandsLink}><FontAwesomeIcon icon={faFacebook} size='2xl' style={{color:'white'}} /></a></Link>
                    <Link href=''><a className={styles.footerBrandsLink}><FontAwesomeIcon icon={faInstagram} size='2xl' style={{color:'white'}} /></a></Link>
                </div>
            </div>
        </div>    
    )
}