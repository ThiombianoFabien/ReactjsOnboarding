import React, { Component } from "react";
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [
        { action: "Buy flowers", done: false },
        { action: "Get shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false },
      ],
    };
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: task, done: false }],
      });
    }
  };

  toggleTodo = (todo) => {
    this.setState({ todoItems: this.state.todoItems.map((item) => (item.action === todo.action ? { ...item, done: !item.done } : item)) });
  };

  todoTableRows = () => this.state.todoItems.map((item) => <TodoRow key={item.action} item={item} callback={this.toggleTodo} />);

  render = () => (
    <div>
      <TodoBanner name={this.state.userName} task={this.state.todoItems} />
      <div className="container-fluid">
        <TodoCreator callback={this.createNewTodo} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
}
