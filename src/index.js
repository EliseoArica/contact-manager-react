import React, {useState} from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Functional Component
/* function Item(props) {
    return <div className="item">
        <b>Name: </b> {props.name} <br />
        <b>Price: </b> {props.price} <br />
    </div>;
} */

// Class Component
class Item extends React.Component {
    render() {
        return <div className="item">
            <b>Name: </b> {this.props.name} <br />
            <b>Price: </b> {this.props.price} <br /><br />
        </div>;
    }
}

class App extends React.Component {
    render() {
        return <>
            <Item name="Cheese" price="4.50" />
            <Item name="Bread" price="1.30" />
            <Item name="Ice cream" price="24.59" />
        </>
    }
}

class Hello extends React.Component {
    state = {
        name: "Ayaka",
        age: 20
    }
    checkCondition() {
        if (1 > 0) {
            this.setState({name: "Yoimiya", age: 19});
        }
    }
    render () {
        this.checkCondition();
        return <h1>Hello {this.state.name}, {this.state.age}</h1>;
    }
}

// App which increments the counter each time a button is clicked
class Counter extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({counter: this.state.counter + 1});
    }
    render() {
        return <div>
            <p>{this.state.counter}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}

// ------------------------------------------------------------------------
// --------- WORKING WITH HOOKS (STATES IN FUNCTIONAL COMPONENTS) --------
// ------------------------------------------------------------------------
function HelloFunctional() {
    const [name, setName] = useState("Ayaka");
    return <h1>Hello {name}.</h1>
}


root.render(
    <>
    <App></App>
    <Hello></Hello>
    <Counter></Counter>
    <HelloFunctional></HelloFunctional>
    </>
);