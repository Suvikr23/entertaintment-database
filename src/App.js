import './App.css';
import MovieDb from './components/MovieDb'
import ItemDetail from './components/ItemDetail'
import Login from './components/Login'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact component={Login}/>
          <Route path="/home"  component={MovieDb}/>
          <Route path="/item/:id" component={ItemDetail}/>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
