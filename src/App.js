import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Image from './components/Image';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Posts from './components/Posts';
import ItemDetail from './components/ItemDetail';

import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Switch } from 'react-router';

const history = createBrowserHistory();
const API = 'https://api.thecatapi.com/v1/images/search';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.state = {
            value: '',
            image: []
        }
    }
    componentWillMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ image: data }));
    }

    newRandom =(event) => {
        event.preventDefault();
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ image: data }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ value: this.textInput.current.value})
    };

    render() {
        const { image } = this.state;

        return (
            <Router history={history}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contact</Link></li>
                        <li><Link to="/image">Image</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                    </ul>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="number" ref={this.textInput} />
                            <button>Отправить</button>
                        </form>
                        <div>
                            {image.map(images =>
                                    <div key={images.id}>
                                        <img src={images.url}/>
                                    </div>
                            )}
                            <button onClick={this.newRandom}>обновить</button>
                        </div>
                    </div>
                    <hr />
                    <h3>Value: {this.state.value}</h3>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contact} />
                        <Route path="/image" component={Image} />
                        <Route path="/counter" component={Counter} />
                        <Route exact path="/posts" component={Posts} />
                        <Route path="/posts/:slug" component={ItemDetail} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Menu;