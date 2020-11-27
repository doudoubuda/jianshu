import { GlobalStyled } from './style.js';
import Header from './common/header';
import { GlobalIconStyled } from './static/iconfont/iconfont';
import { Provider } from 'react-redux'
import  store from './store'

function App() {
  return (
    <div >
      <GlobalStyled />
      <GlobalIconStyled />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
