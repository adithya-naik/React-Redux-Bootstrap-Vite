import styles from "./App.module.css"
import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"

function App() {
  return  <div className={styles.calculator}>
    <Display></Display>
    {/* <input className={styles.display} type="text" /> */}
    <ButtonsContainer></ButtonsContainer>
    {/* <div className={styles.buttonsContainer}>
      <button className={styles.button}>C</button>
      <button className={styles.button}>C</button>
      <button className={styles.button}>C</button>
      <button className={styles.button}>C</button>
    </div> */}
  </div>
}

export default App
