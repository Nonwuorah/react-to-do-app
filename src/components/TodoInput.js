import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    //The item and handleChange are destructured from the props.
    const { item, handleChange, handleSubmit, editItem } = this.props;

    //The TodoInput component is a form that allows the user to add items to the list. The TodoInput component is imported into the App component.
    //The TodoInput component is imported into the App component. The TodoInput component is imported into the App component.
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>

            {/* //The value of the input is set to the item in the state.
            //The onChange event is set to the handleChange method. The handleChange method is used to set the state of the item.
            //The handleChange method is used to set the state of the item. */}
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Enter Todo Items"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="list-group">
            <button
              type="submit"
              className= {editItem ? "btn btn-sm btn-block btn-success mt-3 text-capitalize" : "btn btn-sm btn-block btn-primary mt-3 text-capitalize" }
              onClick={handleSubmit}
            >
            {/* //The editItem is used to determine the text of the button. */}
              {editItem ? "Edit Item" : "add Item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
