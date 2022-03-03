import React from "react"
import TodoItem from "./TodoItem"

class Todo extends React.Component {
  state = {
    elements: [
      { id: '45631283', isComplited: true, title: 'make money'},
      { id: '65812323', isComplited: false, title: 'make cars'},
      { id: '45643123', isComplited: false, title: 'make house'},
      { id: '23211232', isComplited: false, title: 'make something'},
      { id: '23768768', isComplited: false, title: 'make laptop'},
    ],
    inputValue: ''
  }

  itemClicked(id) {
    const index = this.state.elements
      .findIndex(x => x.id === id)
    const newElements = this.state.elements
    newElements[index].isCompleted = true
    
    this.setState({ elements: newElements})
  }

  addItem() {
    const item = {
      id: Math.random(),
      title: this.state.inputValue
    }
    const newElements = [item, ...this.state.elements]
    this.setState({ elements: newElements })
    this.setState({ inputValue: '' })
  }

  inputHandler(event) {
    const message = event.target.value
    this.setState({ inputValue: message })
  }

  render() {
    const elements = this.state.elements.map(e => {
      return <TodoItem element={e} itemClicked={this.itemClicked.bind(this)} />
    })

    return (
      <div>
        <h1>TODO app</h1>
        <div className="addNew">
          <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
          <button onClick={this.addItem.bind(this)}>Add to list</button>
        </div>
        {elements}
      </div>
    )
  }
}

export default Todo
