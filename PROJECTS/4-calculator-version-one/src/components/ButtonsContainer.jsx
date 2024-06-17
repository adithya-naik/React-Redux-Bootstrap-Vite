import styles from "./ButtonsContainer.module.css"

function ButtonsContainer(){
    let keys = ['1','2','3','4','5','6','7','8','9','0','+','-','/','*','.','=','C']
    return <div className={styles.buttonsContainer}>
        {keys.map(keyButton => <button key={keyButton} className={styles.button}>{keyButton}</button>)}

  </div>
}

export default ButtonsContainer;