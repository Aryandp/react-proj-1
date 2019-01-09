import React, { Component } from 'react';
import './todolist.css';


class ItemList extends Component {
  createTasks(item) {
      return <li name={item.name}></li>
    }

  render() {
var list=this.props.list.name;
var listItems = list.map(this.createTasks);


    return (
      <ul id="myUL">
      <li><p>Hit the gym</p></li>
      <li className="checked"><p>Pay bills</p></li>
      <li><p>Meet George</p></li>
      <li><p>Buy eggs</p></li>
      <li><p>Read a book</p></li>
      <li><p>Organize office</p></li>
    <li><p>{listItems}</p></li>

      </ul>
    );
  }
};

export default ItemList;
