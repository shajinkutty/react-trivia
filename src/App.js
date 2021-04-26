import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import OptionProvider from "./context/OptionsContext";
import Options from "./pages/Options";
import QuizPage from "./pages/QuizPage";
import { orange, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: orange,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <OptionProvider>
            <Switch>
              <Route path="/" exact>
                <Options />
              </Route>
              <Route path="/quiz">
                <QuizPage />
              </Route>
            </Switch>
          </OptionProvider>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
