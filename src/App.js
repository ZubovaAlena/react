import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Switch } from 'react-router'

const history = createBrowserHistory();

const Home = () => (
    <div>
        <h2>добро пожаловать на наш сайт</h2>
    </div>
);
const About = () => (
    <div>
        <h2>React-route</h2>
    </div>
);
const Contact = () => (
    <div>
        <h2>+79999999999</h2>
    </div>
);
const Image = () => (
    <div>
        <img src="https://im0-tub-ru.yandex.net/i?id=1e12e9bd384e571bc70f162d1293355b&n=13&exp=1"/>
    </div>
);
class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.textInput = React.createRef();
        this.state = {
            value: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ value: this.textInput.current.value})
    };
    render() {
        return (
            <BrowserRouter history={history}>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contacts">Contact</Link></li>
                            <li><Link to="/image">Image</Link></li>
                        </ul>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" ref={this.textInput} />
                                <button>Отправить</button>
                            </form>
                        </div>
                        <hr />
                        <h3>Value: {this.state.value}</h3>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contacts" component={Contact} />
                            <Route path="/image" component={Image} />
                        </Switch>
                    </div>
            </BrowserRouter>
        )
    }
}
export default Menu;