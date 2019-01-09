import React, { Component } from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
class TodoList2 extends React.Component {
    render() {
        let items = [];
        let todos = array.sortBy(this.props.todos, 'done');

        for (let index in todos) {
            items.push(
                <Todo todo={todos[index]} key={index} toggle={this.props.toggle}/>
            );
        }

        return (
            <ul>
                {items}
            </ul>
        );
    }
}
export default TodoList2;
