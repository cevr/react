const ROOT = document.querySelector('#root');

class helloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: new Date().getHours(),
            min: new Date().getMinutes(),
            seconds: new Date().getSeconds()
        }
        setInterval(() => this.setState({
            hour: new Date().getHours(),
            min: new Date().getMinutes(),
            seconds: new Date().getSeconds()
        }), 500)
    }

    render() {
        let h1 = React.createElement("h1", {
            key: "clock",
            className: "clock"
        }, `${this.state.hour}:${this.state.min}:${this.state.seconds}`)
        return React.createElement("div", {
            key: "1"
        }, h1)
    }
}


ReactDOM.render(React.createElement(helloWorld, null), ROOT);