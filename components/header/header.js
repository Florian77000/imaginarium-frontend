import Navbar from './navbar';
import styles from '../../styles/Header.module.css';

export default function Header () {
    return (
        <>
        <div className={styles.header}>
            <img className={styles.logo} src="../logo.PNG" />
            <img className={styles.imgNav}src='../barre.png'/>
        </div>
        <Navbar />
        </>
    )
}