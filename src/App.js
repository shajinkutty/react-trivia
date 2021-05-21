import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import Options from "./pages/Options";
import QuizPage from "./pages/QuizPage";
import { orange } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: orange,
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Options />
              </Route>
              <Route path="/quiz">
                <QuizPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
