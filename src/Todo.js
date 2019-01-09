import React, { Component } from 'react';
import NewTodo from './NewTodo';
import TodoList2 from './TodoList2';
class Todo extends React.Component {
    done(event) {
        event.preventDefault();

        this.props.toggle(this.props.todo);
    }

    render() {
        let todo = this.props.todo;
        if (todo.done) {
            return (
                <li>
                    <del>{todo.text}</del> <a href="" onClick={this.done.bind(this)}>✓</a>
                </li>
            );
        } else {
            return (
                <li>
                    {todo.text} <a href="" onClick={this.done.bind(this)}>✓</a>
                </li>
            );
        }
    }
}
export default Todo;
