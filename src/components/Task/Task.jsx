import{MdClose} from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask } from "redux/actions";
import css from "./Task.module.css";

export const Task =({task}) => {
  const dispatch = useDispatch();
  const handleDelete = () =>dispatch(deleteTask(task.id))
  return(
    <div className={css.container}>
    <input
    type="checkbox"
    className={css.checkbox}
    checked={task.completed}
    />
    <p className={css.text}>{task.text}</p>
    <button className={css.btn} onClick={handleDelete}>
     <MdClose size={24} />
    </button>
    </div>
  )
}
