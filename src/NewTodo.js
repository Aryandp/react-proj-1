import React, { Component } from 'react';
import Todo from './Todo';
import TodoList2 from './TodoList2'
class NewTodo extends React.Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.newTodoText.value;
        if (text) {
            this.props.createTask(text);
            this.refs.newTodoText.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <label>New TODO:</label> <input type="text" ref="newTodoText"/> <button type="submit">+</button>
            </form>
        );
    }
}
export default NewTodo;
