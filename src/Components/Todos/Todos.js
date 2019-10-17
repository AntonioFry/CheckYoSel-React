import React from 'react';

const Todos = ({taskName, tasks}) => {
  const formattedTasks = tasks.map(task => {
    return (
      <div>
        <input type="checkbox" name={task}/>
        <label for={task.currentTask}>{task.currentTask}</label>
      </div>
    )
  })
  return (
    <article>
      <div>
        <h3>{taskName}</h3>
      </div>
      <form>
        {formattedTasks}
      </form>
      <div>

      </div>
    </article>
  )
}

export default Todos;