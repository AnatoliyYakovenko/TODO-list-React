import { Button } from "components/Button";
import { useSelector } from "react-redux";
import { getStatusFilter } from "redux/selectors";
import { statusFilters } from "redux/constants";
import css from "./StatusFilter.module.css";

export const StatusFilter= () =>{
  const filter=useSelector(getStatusFilter)
  // console.log(filter);
  return (
    <div className ={css.container}>
<Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  )
}
