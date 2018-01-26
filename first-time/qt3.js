const ROOT = document.querySelector('#root');

class helloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    render() {
        let buttonUp = React.createElement("button", {
            onClick: () => {
                this.setState({
                    counter: this.state.counter + 1
                })
            },
            key: 0
        }, "Click me to count up!")
        let buttonReset = React.createElement("button", {
            onClick: () => {
                this.setState({
                    counter: 0
                })
            },
            key: 1

        }, "Click me to reset!")
        let h1 = React.createElement("h1", {
            key: 2
        }, this.state.counter > 10 ? `${this.state.counter} STOP` : `${this.state.counter} times!`)
        return React.createElement("div", {
            id: "counter"
        }, [buttonUp, h1, buttonReset])

    }
}


ReactDOM.render(React.createElement(helloWorld, null), ROOT);