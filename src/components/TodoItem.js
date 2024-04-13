import React, { Component } from "react";

export default class TodoItem extends Component {
  //The TodoItem component is a single item in the list. The TodoItem component is imported into the TodoList component.
  state = {
    showConfirm: false,
    checked: false // New state for checkbox
  };

  toggleConfirm = () => {
    this.setState({ showConfirm: !this.state.showConfirm });
  };

  toggleCheckbox = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    //The title is destructured from the props.
    const { title, handleDelete, handleEdit } = this.props;
    const { showConfirm, checked } = this.state;

    const styles = {
      textDecoration: checked ? "line-through" : "none",
    };

    return (
      //The TodoItem component is a single item in the list. The TodoItem component is imported into the TodoList component.
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={this.toggleCheckbox}
        />
        <h6 style ={styles}>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={this.toggleConfirm}>
            <i className="fas fa-trash"></i>
          </span>
        </div>

        {showConfirm && (
          <div className="confirm-dialog d-flex flex-column text-white g-5 bg-black p-2 rounded-3 border-0 pointer">
            <p>
              Are you sure you want <br /> to delete this item?
            </p>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={this.toggleConfirm}>No</button>
          </div>
        )}
      </li>
    );
  }
}
