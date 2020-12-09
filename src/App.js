import { GlobalStyled } from './style.js';
import Header from './common/header';
import { GlobalIconStyled } from './static/iconfont/iconfont';
import { BrowserRouter, Route} from 'react-router-dom';
import  Home  from '../src/pages/home' 
import  Detail  from '../src/pages/detail'
import { Provider } from 'react-redux'
import  store from './store'

function App() {
  return (
    <div >
      <GlobalStyled />
      <GlobalIconStyled />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
