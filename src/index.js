import React from 'react';
import ReactDOM from 'react-dom';

function Title(props) {
    return (
        <div className="container">
            <h1>{props.title}</h1>
        </div>
    );
}
ReactDOM.render(<Title title="Welcome to the zoo" />, document.getElementById('title'));


function Zoo(props) {
    return (
        <div className="zoo-img">
            {props.zoo.unlock ? <div><img src={props.zoo.img}/></div> : null}
            <h3>{props.zoo.name}</h3>
            <button onClick={props.onZoo}>close</button>
        </div>
    )
}

class Animal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            animals: [
                {unlock: true, name: 'fox', img: 'https://avatars.mds.yandex.net/get-pdb/245485/e3848caa-9719-4718-8d20-8f3a13f39a81/s1200'},
                {unlock: true, name: 'dog', img: 'https://avatars.mds.yandex.net/get-pdb/805781/c34b66ce-17f7-428b-b3e2-f5a4e5e62403/s1200'},
                {unlock: true, name: 'cat', img: 'https://avatars.mds.yandex.net/get-pdb/25978/cdad10ac-0117-4594-a6e1-a3dad44f1f41/s1200'}
            ]
        };
    }
    handleClick =(name) => {
        const animals = this.state.animals.concat();
        const animal = animals.find(elem => elem.name === name);
        animal.unlock = !animal.unlock;
        this.setState({ animals: animals });
    };
    render () {
        return (
            <div className="app">
                <div className="list">
                    {this.state.animals.map(animal => {
                        return (
                            <Zoo zoo={animal} key={animal.name} onZoo={this.handleClick.bind(this, animal.name)}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Animal />, document.getElementById('root'));