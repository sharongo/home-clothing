import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shopPage'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/header/header'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'




class App extends Component {


  componentDidMount() {
    const { setCurrentUser } = this.props;
    const userAuth = {
      email: '',
      password: ''
    }
    setCurrentUser(userAuth);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
              )
          } />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
