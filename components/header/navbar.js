import styles from '../../styles/Header.module.css';

export default function Navbar () {
    return (
        <div className={styles.navbar}>
        <div className={styles.navbarLink}>
            <li>Lien 1</li>
            <li>Lien 2</li>
            <li>Lien 3</li>
            <li>Lien 4</li>
        </div>
        </div>
    )
}