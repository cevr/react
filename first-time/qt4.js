const ROOT = document.querySelector('#root');

class helloWorld extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return React.createElement("button", {
            onClick: () => {
                ReactDOM.render(React.createElement("h1", null, `${Math.floor(Math.random() * 100 + 1)}`), document.querySelector('#div'))
            }
        }, "Click me!");

    }
}

ReactDOM.render(React.createElement([
    [helloWorld, null],
    ["div", {
        id: "div"
    }, null]
]), ROOT);