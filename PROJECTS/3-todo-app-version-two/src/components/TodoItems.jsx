import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"
function TodoItems({ list }) {
  return (
    <div className={styles.itemsContainer}>
        {list.map(item => <TodoItem TodoName={item.name} TodoDate={item.dueDate} ></TodoItem>)}
    </div>
  );
}

export default TodoItems;
