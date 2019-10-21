import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { fetchAllMovies } from './actions/index';
import MovieList from './containers/MovieList';
import MovieDetail from './containers/MovieDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import rootReducer from './reducers';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllMovies());

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  componentDidMount(){
    document.addEventListener("scroll", function () {console.log(window.scrollY)});
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={ stylesApp } className="App">
            <Switch>
                <Route exact path="/" component={MovieList} />
                <Route path="/:id" component={MovieDetail} />
              </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
