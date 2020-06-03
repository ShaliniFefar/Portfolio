import React, {Component} from 'react';
import myImage from '../images/image-3.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    display() {
        this.setState({show: !this.state.show});
    }

    render() {
    return (
        <div>
            <h1>Hello, Welcome to my portfolio..!!!</h1>
            <div className="aboutMeDiv">
            <div><h2 id="aboutMeHeading" onClick={this.display.bind(this)}>Want to know about me? <br/>Click here..!</h2> </div>
            <div id="aboutMe" 
                    className={"collapse" + (this.state.show ? ' in' : '')}>
                    <p> Hello, My name is Shalini Fefar. I have recently completed my masters of Computer Science.
                    Prior to my masters I have overall two years of experience as front end developer. 
                    I have good command over JavaScript, React JS, HTML and CSS. I have passion for building interesting applications. 
                    </p>
            </div>  
            </div>         
        </div>
        )
    }
}

export default Home;