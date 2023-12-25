import React, {Component} from "react";
import ReactDOM from "react-dom";

class Hello extends Component{
    render() {
        return (
            <div className="message-box">
            </div>
        )
    }
}

const element = document.body
ReactDOM.render(<Hello name='SAM' />, element)
 