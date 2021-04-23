import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from "./components/Header";
import OptionProvider from './context/OptionsContext';
import Options from './pages/Options';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <OptionProvider>
      <Switch>
        <Route path="/" exact>
          <Options/>
        </Route>
        <Route path="/quiz">
          
          <QuizPage />
         
        </Route>
      </Switch>
      </OptionProvider>
    </div>
    </Router>
  );
}

export default App;
