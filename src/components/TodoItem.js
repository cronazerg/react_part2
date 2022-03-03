import React from "react"

const TodoItem = props => {
  const chaneHandler = () => props.itemClicked(props.element.id)

  return (
    <div className={`card ${props.element.isCompleted ? 'complited' : ''}`} key={props.element.id}>
      {props.element.title}
      <button onClick={chaneHandler}>End Task</button>
    </div>
  )
}

export default TodoItem
