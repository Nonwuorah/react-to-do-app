import React, { Component } from 'react'

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  //The TodoList component is a list of items. The TodoList component is imported into the App component.
  //The TodoList component is imported into the App component.
  render() {
    //The items are destructured from the props.
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return ( 
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>
          {items.map(item => {
            //The TodoItem component is imported into the TodoList component.
            return (
              <TodoItem
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                key={items.id}
                title={item.item}
              />
            );
          })}
          
          <button type="button" className="btn btn-sm btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear list</button>
        </ul>
        
    );
  }
}
