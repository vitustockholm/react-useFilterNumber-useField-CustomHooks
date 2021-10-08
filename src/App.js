import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Router>
        <header>
          <nav>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            <li>
              <Link to='/todos'>Todos</Link>
            </li>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' compponent={HomePage}>
            <HomePage />
          </Route>
          <Route path='/posts' compponent={PostPage}>
            <PostPage />
          </Route>
          <Route path='/todos' compponent={TodosPage}>
            <TodosPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
