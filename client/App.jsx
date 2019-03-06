import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Main from './components/Main';
import ComposeMessage from './components/ComposeMessage';
import ConfirmMessage from './components/ConfirmMessage';

// Components

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        loggedIn : false,
        displayCompose : false,

        pigeons :[
            {name: 'pigi', speed: 'C', stamina: 'C', success: 'B', image: "../assets/pigeon-standard.png"},
            {name: 'mugi', speed: 'B', stamina: 'D', success: 'B', image: "../assets/courier_pidgeon.jpg"},
            {name: 'pugi', speed: 'F', stamina: 'A', success: 'C'}
        ],
        increment : 0
        };
    }
    incrementPigi = () =>{
        
        if((this.state.increment + 1) >= this.state.pigeons.length){
            this.setState({increment: 0});
        }else{
            this.setState({increment: this.state.increment + 1});
        }       
    };
    click = () =>{
        this.setState({loggedIn: !this.state.loggedIn})
    };
<<<<<<< HEAD
  }
  
  click = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => (
              this.state.loggedIn ? <Main /> : <SignIn click={this.click} />
            )}
          />
          <Route path="/compose" component={ComposeMessage} />
          <Route path="/confirm" component={ConfirmMessage} />
        </div>
      </BrowserRouter>
    );
  }
}
=======
    showCompose = () =>{
        this.setState({displayCompose: !this.state.displayCompse})
    }
    render (){ 
    return (<div>
             {/* {this.state.loggedIn ? 
             <Main click={this.click}/> : <SignIn click={this.click}/>} */}
             {this.state.displayCompose ? <ComposeMessage/> : this.state.loggedIn ? 
             <Main showCompose={this.showCompose} displayPigi={this.state.pigeons[this.state.increment]} incrementPigi={this.incrementPigi}/> : <SignIn click={this.click}/>}
            </div>
    )};
};
>>>>>>> dev

export default App;
