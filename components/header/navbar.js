import styles from '../../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function Navbar () {
    return (
        <div className={styles.navbar}>
        <div className={styles.navbarLink}>
            <li><Link href=''><a className={styles.navbarText}>Accueil</a></Link></li>
            <li><Link href=''><a className={styles.navbarText}>Les bracelets</a></Link></li>
            <li><Link href=''><a className={styles.navbarText}>Les colliers</a></Link></li>
            <li><Link href=''><a className={styles.navbarText}>Les boucles d'oreilles</a></Link></li>
            <li><Link href=''><a className={styles.navbarText}>Les bagues</a></Link></li>
            <li><Link href=''><a className={styles.navbarText}>Les mères/filles</a></Link></li>
            <li><Link href=''><a className={styles.navbarText}>Les éphémères</a></Link></li>
            <li><Link href=''><a className={styles.navbarText}>Les personnalisables</a></Link></li>
            <Link href='../formAddCard'><FontAwesomeIcon icon={faUser} size="2xl" style={{color: "#7ea99a",}} /></Link>
        </div>
        </div>
    )
}