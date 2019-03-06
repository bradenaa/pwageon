import React,  { Component } from 'react';
import SignIn from './components/SignIn';
import Main from './components/Main';
import ComposeMessage from './components/ComposeMessage';


// Components

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        loggedIn : false
        };
    }
    click = () =>{
        this.setState({loggedIn: !this.state.loggedIn})
        console.log(this.state.loggedIn);
    };
    render (){ 
    return (<div>
             {this.state.loggedIn ? 
             <Main click={this.click}/> : <SignIn click={this.click}/>}
             <ComposeMessage/>
            </div>
    )};
};

export default App;
