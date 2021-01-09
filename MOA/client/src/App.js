//import './App.css';
import { Router, Route } from 'react-router-dom';

import RegisterPage from './RegisterPage/RegisterPage';

function App() {
  return (
    <div>
      <RegisterPage/>
      {/* <Router>
        <switch>
          <Route exact path="/" component={RegisterPage} />
        </switch>
      </Router> */}
    </div>
  );
}

export default App;
