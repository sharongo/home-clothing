import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shopPage'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header'




class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount(){
    console.log(this.state.currentUser)
  }

  componentWillMount(){
    console.log(this.state.currentUser)
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
