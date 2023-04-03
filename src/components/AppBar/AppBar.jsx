import {TaskCounter} from "components/TaskCounter/TaskCounter";
import {StatusFilter} from "components/StatusFilter/StatusFilter";
import css from "./AppBar.module.css"

export const AppBar = () => {
return(
  <header className={css.container}>
    <section className={css.section}>
      <h2 className={css.title}>Tasks</h2>
      <TaskCounter/>
    </section>
    <h1>TODO List</h1>
    <section className={css.section}>
      <h2 className={css.title}>Filter by status</h2>
      <StatusFilter/>
    </section>
  </header>
)

}
