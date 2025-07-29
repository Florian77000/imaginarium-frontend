import styles from '../../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
    return (
        <div className={styles.navbar}>
        <div className={styles.navbarLink}>
            <li>Les bracelets</li>
            <FontAwesomeIcon icon={faCaretDown} />
            <li>Les colliers</li>
            <li>Les boucles d'oreilles</li>
            <li>Les bagues</li>
            <li>Les mères / filles</li>
            <li>Les best friends</li>
            <li>Les ephemères</li>
            <li>Les personnalisables</li>
        </div>
        </div>
    )
}