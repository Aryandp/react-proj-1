import React, { Component } from 'react';
import './todolist.css';
import TodoItems from "./TodoItems";

class Todolist extends Component{
  constructor(props) {
  super(props);

  this.state = {
    items: [],

  };

  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
//this.handleToggleComplete=this.handleToggleComplete.bind(this);
}
     addItem(e) {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now(),
      done:false,
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputElement.value = "";
  }

  console.log(this.state.items);
  e.preventDefault();
}

deleteItem(key) {
  console.log(this.state.items);
  var filteredItems = this.state.items.filter(function (item) {


    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}

// handleToggleComplete(key) {
//   var data = this.state.items;
//   for (var i in data) {
//     if (data[i].key == key) {
//
//
//
//       data[i].done = data[i].done==='true'  ? 'false' : 'true';
//       break;
//
//     }
//   }
//   this.setState({data});
//
//
// }



  render(){
    return(
      <div className="container1">
       <div id="myDIV" className="header">
         <form onSubmit={this.addItem}>
           <input ref={(a) => this._inputElement = a}
                  id="myInput" placeholder="enter task">
           </input>
           <button type="submit" className="addBtn">add</button>
         </form>
       </div>
       <TodoItems entries={this.state.items} delete={this.deleteItem} complete={this.handleToggleComplete}   />


     </div>
    );
  }
}
export default Todolist;
