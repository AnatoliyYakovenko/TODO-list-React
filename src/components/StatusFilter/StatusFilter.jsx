import { Button } from "components/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter= () =>{
  return (
    <div className ={css.container}>
<Button>All</Button>
<Button>Active</Button>
<Button>Completed</Button>
    </div>
  )
}
