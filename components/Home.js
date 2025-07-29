import styles from '../styles/Home.module.css';

import Header from "./header/header";
import Navbar from './header/navbar';

function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>  
        <h1 className={styles.title}>
          Welcome to l'imaginarium
        </h1>
        <div className={styles.carroussel}>
          <img src='./femme.jpg'></img>
        </div>
      </main>
      </>
  );
}

export default Home;
