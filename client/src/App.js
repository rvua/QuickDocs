import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import ViewRecord from './views/ViewRecord';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/" className="main-link">QuickDocs</Link>
      </div>

      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/records/create">
          <Create/>
        </Route>

        <Route exact path="/records/:_id/edit">
          <Edit/>
        </Route>

        <Route exact path="/records/:_id">
          <ViewRecord/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
