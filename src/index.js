import React, {useState, useEffect} from "react";
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
            <p className="p"><b>Name: </b> {this.props.name} </p>
            <p className="p"><b>Price: </b> {this.props.price} </p> <br />
        </div>;
    }
}

class App extends React.Component {
    render() {
        return <div className="section">
            <h1>First steps with React</h1>
            <h2 className="subtitle">Using props</h2>
            <Item name="Cheese" price="4.50" />
            <Item name="Bread" price="1.30" />
            <Item name="Ice cream" price="24.59" />
        </div>
    }
}

class Hello extends React.Component {
    state = {
        name: "Ayaka",
        age: 20
    }
    render () {
        return <div className="section">
            <h2 className="subtitle">Hello {this.state.name}, {this.state.age}</h2>
        </div>;
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
        return <div className="section">
            <h2 className="subtitle">Counter using setState in class Components</h2>
            <p className="p">{this.state.counter}</p>
            <button className="button bg-blue" onClick={this.increment}>Increment</button>
        </div>
    }
}

// ------------------------------------------------------------------------
// --------- WORKING WITH HOOKS (STATES IN FUNCTIONAL COMPONENTS) ---------
// ------------------------------------------------------------------------
function HelloFunctional() {
    const [name] = useState("Yoimiya"); // Not setName cause will not use it.
    return <div className="section">
        <h2 className="subtitle">Hello {name}.</h2>
    </div>
}

// Counter app but using hooks and functional components
function CounterHooked() {
    const [counter, setCounter] = useState(0); // setCounter YES Here

    function increment() {
        setCounter(counter + 1);
    }

    return <div className="section">
        <h2 className="subtitle">Counter using Hooks in Functional Components</h2>
        <p className="p">{counter}</p>
        <button className="button bg-blue" onClick={increment}>Increment</button>
    </div>
}

// ------------------------------------------------------------------------
// ---------- LIFECYCLE METHODS (ONLY WORK IN CLASS COMPONENTS) -----------
// ------------------------------------------------------------------------
class CounterLifecycleMethods extends React.Component {
    state = {
        counter: 0
    }
    // Set initial value of the counter when Component is rendered
    componentDidMount() {
        this.setState({counter: 30});
    }
    componentDidUpdate() {
        console.log("Number of clicks so far: " + this.state.counter);
    }
    increment = () => {
        this.setState({counter: this.state.counter + 1});
    }
    render() {
        return <div className="section">
            <h2 className="subtitle">Counter with Lifecycle Methods</h2>
            <p className="p">{this.state.counter}</p>
            <p className="p">Checkout the console! 😁</p>
            <button className="button bg-blue" onClick={this.increment}>Increment</button>
        </div>
    }
}

// ------------------------------------------------------------------------
// ------ useEffect: LIFECYCLE METHODS (BUT IN FUNC. COMPS)----------------
// ------------------------------------------------------------------------
function CounterUseEffect() {
    const [counter, setCounter] = useState(0);
    useEffect( () => {
        // document.title = "Number of clicks so far: " + counter;
        if (counter !== 0) { // Little hack, only render Component if counter changes
            document.title = "Number of clicks so far: " + counter;
        }

        return () => {
            // To mimic componentWillUnmount, useEffect may return a function that cleans up after it:
            // cleanup
        }
    }, [counter]); // Second arg indicates to component only will fires useEffect hook when the comp is rendered and also when $counter value changes.
    const increment = () => {
        setCounter(counter + 1);
    }
    return <div className="section">
        <h2 className="subtitle">Counter using useEffect: Lifecycle methods in Functional Components</h2>
        <p className="p">{counter}</p>
        <p className="p">Look at the page title 😎</p>
        <button className="button bg-blue" onClick={increment}>Increment</button>
    </div>
}

function ToggleButton() {
    const [val, setVal] = useState("OFF");
    const [colorButton, setColorButton] = useState("bg-red");
    function toggle() { // Toggle function
        setVal((val==="ON") ? "OFF" : "ON");
    }
    useEffect( () => { // Update the color button when component is rendered
        setColorButton((val==="ON") ? "bg-green" : "bg-red");
    }, [val]);
    
    return <div className="section">
        <h2 className="subtitle">Button with Toggle ON/OFF</h2>
        <p className="p">Click the button below</p>
        {/* Concat classnames with template literals */}
        <button onClick={toggle} className={`button ${colorButton}`}>{val}</button>
    </div>
}

function Converter() {
    const [km, setKm] = useState(0);

    function handleChange(e) {
        /* event.target -> La propiedad target de la interfaz del event.currentTarget, es una referencia al objeto en el cual se lanzo el evento. */
        setKm(e.target.value);
    }
    function convert(km) {
        return (km / 1.609).toFixed(2);
    }

    return <div className="section">
        <h2 className="subtitle">Handling Events I "Km To Miles Converter"</h2>
        <input className="input number" type="number" value={km} onChange={handleChange} />
        <p className="p">{km} km is {convert(km)} miles!</p>
    </div>
}

function AddForm() {
    const [num, setNum] = useState(0);
    const [sum, setSum] = useState(0);

    function handleChange(e) {
        setNum(e.target.value);
    }
    function handleSubmit(e) {
        setSum(sum + Number(num));
        // Para que no me refresque la página cuando hagamos Submit
        e.preventDefault();
    }

    return <div className="section">
        <h2 className="subtitle">Handling Events II "React Form"</h2>
        <form onSubmit={handleSubmit} className="form">
            <input className="input number" onChange={handleChange} type="number" value={num} />
            <input className="button bg-blue" type="submit" />
            <p className="p">Sum is {sum}</p>
        </form>
    </div>
}


root.render(
    <div className="container">
        <App></App><hr />
        <Hello></Hello><hr />
        <Counter></Counter><hr />
        <HelloFunctional></HelloFunctional><hr />
        <CounterHooked></CounterHooked><hr />
        <CounterLifecycleMethods></CounterLifecycleMethods><hr />
        <CounterUseEffect></CounterUseEffect><hr />
        <ToggleButton></ToggleButton><hr />
        <Converter></Converter><hr />
        <AddForm></AddForm>
    </div>
);