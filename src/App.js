import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store/index.js'
import { GlobalStyledicon } from './static/iconfont/iconfont.js'
import { GlobalStyled } from './style.js'
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header></Header>
        </Provider>
        <GlobalStyled></GlobalStyled>
        <GlobalStyledicon></GlobalStyledicon>
      </div>
    );
  }
}
export default App;