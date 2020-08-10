import React, { Component } from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

class App extends Component {
    
    render() {
        return (
          <BrowserRouter>
            <div className="todo-app">
                <Navbar/>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </div>
          </BrowserRouter>
            
        );
    }
}

export default App;
