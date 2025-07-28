import styles from '../../styles/Header.module.css';

export default function Header () {
    return (
        <>
            <img className={styles.logo} src="../logo.PNG" />
            <img className={styles.imgNav}src='../barre.png'/>
        </>
    )
}