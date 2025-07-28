import styles from '../styles/Header.module.css';
import Header from "./header/header";

function Home() {
  return (
    <div>
    <div className={styles.header}>
      <Header />
    </div>
      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Welcome to l'imaginarium
        </h1>
      </main>
    </div>
  );
}

export default Home;
