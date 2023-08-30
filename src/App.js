import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './styles.css'

export default class App extends Component {
  //In your declared state, you declare an empty array called items, an id, an item, and editItem. The id is used to identify each item in the list.
  //The item is the actual text of the item. The editItem is used to determine if the item is being edited or not. The editItem is set to false by default.
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };

  //The handleChange method is used to set the state of the item. The handleChange method is called in the TodoInput component.
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  //The handleSubmit method is used to add the item to the list. The handleSubmit method is called in the TodoInput component.
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };

    console.log(newItem);

    //The items are added to the list using the spread operator. The id is incremented by one. The item is set to an empty string.
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: this.state.id + 1,
      editItem: false,
    });
  };

  //The clearList method is used to clear the list. The clearList method is called in the TodoList component.
  clearList = () => {
    this.setState({
      items: [],
    });
  };

  //The handleDelete method is used to delete an item from the list. The handleDelete method is called in the TodoItem component.
  handleDelete = (id) => {
    //The items are filtered to remove the item with the matching id.
    const filteredItems = this.state.items.filter((item) => item.id !== id);

    //The items are set to the filtered items.
    this.setState({
      items: filteredItems,
    });
  };

  //The handleEdit method is used to edit an item in the list. The handleEdit method is called in the TodoItem component.
  handleEdit = (id) => {
    //The items are filtered to remove the item with the matching id.
    const filteredItems = this.state.items.filter((item) => item.id !== id);

    //The item with the matching id is found.
    const selectedItem = this.state.items.find((item) => item.id === id);

    console.log(selectedItem);

    //The items are set to the filtered items. The item is set to the selectedItem. The editItem is set to true.
    this.setState({
      items: filteredItems,
      item: selectedItem.item,
      editItem: true,
      id: id,
    });
  };

  
  render() {
    return (
      //The TodoInput component is imported into the App component. The TodoList component is imported into the App component.
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} editItem={this.state.editItem}
            />
            <TodoList items={this.state.items} handleDelete={this.handleDelete} clearList={this.clearList} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
}
