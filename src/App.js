import { GlobalStyled } from './style.js';
import Header from './common/header';
import { GlobalIconStyled } from './static/iconfont/iconfont';
import { BrowserRouter, Route} from 'react-router-dom';
import  Home  from '../src/pages/home'
import { Provider } from 'react-redux'
import  store from './store'

function App() {
  return (
    <div >
      <GlobalStyled />
      <GlobalIconStyled />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
