import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store/index.js'
import { GlobalStyledicon } from './static/iconfont/iconfont.js';
import { GlobalStyled } from './style.js';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Login from './pages/login/index';
import Write from './pages/write/index';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/write" exact component={Write}></Route>
            </div>
          </BrowserRouter>
        </Provider>
        <GlobalStyled></GlobalStyled>
        <GlobalStyledicon></GlobalStyledicon>
      </div>
    );
  }
}
export default App;