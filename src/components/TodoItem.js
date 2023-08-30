import React, { Component } from "react";

export default class TodoItem extends Component {
  //The TodoItem component is a single item in the list. The TodoItem component is imported into the TodoList component.
  render() {
    //The title is destructured from the props.
    const { title, handleDelete, handleEdit } = this.props;

    return (
      //The TodoItem component is a single item in the list. The TodoItem component is imported into the TodoList component.
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
