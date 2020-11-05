import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Restaurants } from './components/Restaurants/Restaurants';

class App extends Component {

    state = {
        users: [
            { name: 'Max', age: 28, id: 0 },
            { name: 'Manu', age: 25, id: 1 },
            { name: 'Marta', age: 30, id: 2 },
        ]
    }

    render() {
        return(
            <BrowserRouter>
                <div className="App">
                    <Header />

                    <Switch>
                        <Route path="/" exact component={ Home }/>

                        <Route path="/about" component={ About }/>

                        <Route path="/restaurants" component={ Restaurants } />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
