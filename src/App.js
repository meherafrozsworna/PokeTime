import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
    state = {
        todos: [
            { id: 1, content: 'buy milk' },
            { id: 2, content: 'play football' },
        ],
    };

    deleteTodo = (id) => {
        const todos = this.state.todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({
            todos,
        });
    };

    addTodo = (todo) => {
        todo.id = Math.random();
        const newTodo = [...this.state.todos, todo];
        this.setState({
            todos: newTodo,
        });
    };

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todos's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddForm addTodo={this.addTodo} />
            </div>
        );
    }
}

export default App;
