import React, { Component } from 'react';

class EventDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: "session 03",
            btnName: "Button 4"
        }
    }
    handleClick1 = () => {
        console.log("Bạn vừa click vào button 1");
    }
    handleClick2 = () => {
        console.log("Bạn vừa click vào button 2");
    }
    handleClick3 = (buttonName) => {
        console.log("Bạn vừa click vào " + buttonName);
    }
    handleClick4 = () => {
        console.log("Bạn vừa click vào " + this.state.btnName);
    }
    handleClick5 = (event) => {
        event.preventDefault();
        alert("Xin chào các bạn");
    }
    render() {
        return (
            <div>
                <form>
                    <input type={'text'} name="className" id='className' />
                    <button onClick={this.handleClick5}>Submit</button>
                </form>
                {/* Gọi khi render */}
                <button onClick={this.handleClick1()}>Button 1</button>
                {/* Gọi khi click vào button 2 */}
                <button onClick={this.handleClick2}>Button 2</button>
                {/* Gọi hàm có tham số thì phải gọi theo arrow function */}
                <button onClick={() => this.handleClick3("Button 3")}>Button 3</button>
                {/* Gọi hàm có sử dụng props, state */}
                <button onClick={this.handleClick4}>Button 4</button>
            </div>
        );
    }
}

export default EventDemo;