import React, { Component } from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
import TodoList2 from './TodoList2';


class TodoApp extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {
                    text: 'Do stuff',
                    done: false
                },
                {
                    text: 'Done thing',
                    done: true
                },
                {
                    text: 'Other stuff',
                    done: false
                }
            ]
        };
    }

    createTask(text) {
        this.state.todos.push({
            text,
            done: false
        });

        this.setState({todos: this.state.todos});
    }

    toggleTask(todo) {
        let task =  _.find(this.state.todos, todo);
        task.done = !task.done;
        this.setState({todos: this.state.todos});
    }

    render() {
        return (
            <div>
                <NewTodo createTask={this.createTask.bind(this)} />
                <TodoList2 todos={this.state.todos} toggle={this.toggleTask.bind(this)} />
            </div>
        );
    }
}
export default TodoApp;
